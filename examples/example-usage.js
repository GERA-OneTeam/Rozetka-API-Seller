#!/usr/bin/env node

/**
 * Приклад використання Rozetka API
 *
 * Цей файл демонструє базову роботу з API
 */

import axios from 'axios';

const BASE_URL = 'https://api-seller.rozetka.com.ua';

// Ваші облікові дані (НЕ КОМІТЬТЕ ЇХ В GIT!)
const USERNAME = process.env.ROZETKA_USERNAME || 'your_username';
const PASSWORD = process.env.ROZETKA_PASSWORD || 'your_password';

/**
 * Отримання токена авторізації
 */
async function getAuthToken() {
  try {
    const response = await axios.post(`${BASE_URL}/sites/auth`, {
      username: USERNAME,
      password: PASSWORD
    });

    if (response.data.success) {
      console.log('✅ Успішна авторізація');
      return response.data.content.access_token;
    } else {
      throw new Error('Помилка авторізації: ' + JSON.stringify(response.data.errors));
    }
  } catch (error) {
    console.error('❌ Помилка при авторізації:', error.message);
    throw error;
  }
}

/**
 * Отримання списку замовлень
 */
async function getOrders(token) {
  try {
    const response = await axios.get(`${BASE_URL}/orders/search`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Language': 'uk'
      },
      params: {
        limit: 10,
        page: 1
      }
    });

    if (response.data.success) {
      console.log(`\n📦 Знайдено ${response.data.content.items.length} замовлень:\n`);

      response.data.content.items.forEach((order, index) => {
        console.log(`${index + 1}. Замовлення #${order.id}`);
        console.log(`   Статус: ${order.status}`);
        console.log(`   Сума: ${order.payment_amount} грн`);
        console.log(`   Дата: ${order.created}\n`);
      });

      return response.data.content;
    } else {
      throw new Error('Помилка отримання замовлень');
    }
  } catch (error) {
    console.error('❌ Помилка при отриманні замовлень:', error.message);
    throw error;
  }
}

/**
 * Отримання деталей замовлення
 */
async function getOrderDetails(token, orderId) {
  try {
    const response = await axios.get(`${BASE_URL}/orders/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Language': 'uk'
      },
      params: {
        expand: 'items,delivery,payment'
      }
    });

    if (response.data.success) {
      console.log(`\n📋 Деталі замовлення #${orderId}:\n`);
      console.log(JSON.stringify(response.data.content, null, 2));
      return response.data.content;
    }
  } catch (error) {
    console.error('❌ Помилка при отриманні деталей:', error.message);
    throw error;
  }
}

/**
 * Головна функція
 */
async function main() {
  try {
    console.log('🚀 Приклад роботи з Rozetka API\n');

    // Перевірка облікових даних
    if (USERNAME === 'your_username') {
      console.log('⚠️  Увага: Використовуйте змінні оточення для облікових даних:');
      console.log('   export ROZETKA_USERNAME=your_username');
      console.log('   export ROZETKA_PASSWORD=your_password\n');
      return;
    }

    // 1. Авторізація
    const token = await getAuthToken();

    // 2. Отримання списку замовлень
    const orders = await getOrders(token);

    // 3. Отримання деталей першого замовлення (якщо є)
    if (orders.items.length > 0) {
      await getOrderDetails(token, orders.items[0].id);
    }

    console.log('\n✨ Готово!');

  } catch (error) {
    console.error('\n❌ Помилка:', error.message);
    process.exit(1);
  }
}

// Запуск
main();

#!/usr/bin/env node

import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://api-seller.rozetka.com.ua/apidoc';
const DOCS_DIR = './docs';

/**
 * Завантажує дані з API
 */
async function fetchAPIData() {
  console.log('📥 Завантаження документації API...');

  try {
    const [projectResponse, dataResponse] = await Promise.all([
      axios.get(`${BASE_URL}/api_project.json`),
      axios.get(`${BASE_URL}/api_data.json`)
    ]);

    return {
      project: projectResponse.data,
      data: dataResponse.data
    };
  } catch (error) {
    console.error('❌ Помилка при завантаженні:', error.message);
    throw error;
  }
}

/**
 * Групує endpoints за категоріями
 */
function groupByCategory(endpoints) {
  const groups = {};

  endpoints.forEach(endpoint => {
    const group = endpoint.group || 'Other';
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(endpoint);
  });

  return groups;
}

/**
 * Конвертує параметр в Markdown
 */
function formatParameter(param) {
  const optional = param.optional ? '_(опціонально)_' : '**_(обов\'язково)_**';
  const type = param.type ? `\`${param.type}\`` : '';
  const description = param.description || '';

  return `- **${param.field}** ${type} ${optional} - ${description}`;
}

/**
 * Конвертує endpoint в Markdown
 */
function formatEndpoint(endpoint) {
  let md = `### ${endpoint.title || endpoint.name}\n\n`;

  // Метод та URL
  md += `**${endpoint.type}** \`${endpoint.url}\`\n\n`;

  // Опис
  if (endpoint.description) {
    md += `${endpoint.description}\n\n`;
  }

  // Версія
  if (endpoint.version) {
    md += `**Версія:** ${endpoint.version}\n\n`;
  }

  // Параметри
  if (endpoint.parameter?.fields) {
    md += `#### Параметри запиту\n\n`;

    Object.entries(endpoint.parameter.fields).forEach(([groupName, params]) => {
      if (groupName !== 'Parameter') {
        md += `**${groupName}:**\n\n`;
      }
      params.forEach(param => {
        md += formatParameter(param) + '\n';
      });
      md += '\n';
    });
  }

  // Header параметри
  if (endpoint.header?.fields) {
    md += `#### Headers\n\n`;

    Object.entries(endpoint.header.fields).forEach(([groupName, headers]) => {
      headers.forEach(header => {
        md += formatParameter(header) + '\n';
      });
    });
    md += '\n';
  }

  // Відповідь
  if (endpoint.success?.fields) {
    md += `#### Успішна відповідь\n\n`;

    Object.entries(endpoint.success.fields).forEach(([groupName, fields]) => {
      if (groupName !== 'Success 200') {
        md += `**${groupName}:**\n\n`;
      }
      fields.forEach(field => {
        md += formatParameter(field) + '\n';
      });
    });
    md += '\n';
  }

  // Приклади
  if (endpoint.success?.examples) {
    md += `#### Приклад відповіді\n\n`;
    endpoint.success.examples.forEach(example => {
      md += `\`\`\`json\n${example.content}\n\`\`\`\n\n`;
    });
  }

  // Помилки
  if (endpoint.error?.fields) {
    md += `#### Можливі помилки\n\n`;

    Object.entries(endpoint.error.fields).forEach(([groupName, errors]) => {
      errors.forEach(error => {
        md += formatParameter(error) + '\n';
      });
    });
    md += '\n';
  }

  md += '---\n\n';

  return md;
}

/**
 * Створює README з повною документацією
 */
function createMainReadme(project, groups) {
  let md = `# ${project.title || 'Rozetka Marketplace API'}\n\n`;
  md += `**Версія:** ${project.version}\n\n`;
  md += `**Base URL:** \`${project.url}\`\n\n`;

  // Зміст
  md += `## Зміст\n\n`;
  Object.keys(groups).sort().forEach(group => {
    md += `- [${group}](#${group.toLowerCase().replace(/\s+/g, '-')})\n`;
  });
  md += '\n---\n\n';

  // Endpoints по категоріях
  Object.entries(groups).sort(([a], [b]) => a.localeCompare(b)).forEach(([group, endpoints]) => {
    md += `## ${group}\n\n`;

    endpoints.forEach(endpoint => {
      md += formatEndpoint(endpoint);
    });
  });

  // Футер
  md += `\n---\n\n`;
  md += `*Документація згенерована автоматично з [Rozetka API](${BASE_URL})*\n`;
  md += `*Остання оновлення: ${new Date().toLocaleString('uk-UA')}*\n`;

  return md;
}

/**
 * Створює окремі файли для кожної категорії
 */
async function createCategoryFiles(groups) {
  const categoriesDir = path.join(DOCS_DIR, 'categories');
  await fs.mkdir(categoriesDir, { recursive: true });

  for (const [group, endpoints] of Object.entries(groups)) {
    let md = `# ${group}\n\n`;

    endpoints.forEach(endpoint => {
      md += formatEndpoint(endpoint);
    });

    const filename = `${group.toLowerCase().replace(/\s+/g, '-')}.md`;
    await fs.writeFile(path.join(categoriesDir, filename), md, 'utf-8');
    console.log(`  ✅ ${filename}`);
  }
}

/**
 * Головна функція
 */
async function main() {
  try {
    console.log('🚀 Запуск парсера документації Rozetka API\n');

    // Завантаження даних
    const { project, data } = await fetchAPIData();
    console.log(`✅ Завантажено ${data.length} endpoints\n`);

    // Створення директорії
    await fs.mkdir(DOCS_DIR, { recursive: true });

    // Збереження сирих даних
    console.log('💾 Збереження JSON файлів...');
    await fs.writeFile(
      path.join(DOCS_DIR, 'api_project.json'),
      JSON.stringify(project, null, 2),
      'utf-8'
    );
    await fs.writeFile(
      path.join(DOCS_DIR, 'api_data.json'),
      JSON.stringify(data, null, 2),
      'utf-8'
    );
    console.log('  ✅ api_project.json');
    console.log('  ✅ api_data.json\n');

    // Групування endpoints
    const groups = groupByCategory(data);
    console.log(`📂 Знайдено ${Object.keys(groups).length} категорій\n`);

    // Створення головного README
    console.log('📝 Генерація Markdown документації...');
    const readme = createMainReadme(project, groups);
    await fs.writeFile(path.join(DOCS_DIR, 'README.md'), readme, 'utf-8');
    console.log('  ✅ README.md\n');

    // Створення файлів категорій
    console.log('📁 Створення файлів категорій...');
    await createCategoryFiles(groups);

    // Статистика
    console.log('\n📊 Статистика:');
    Object.entries(groups).forEach(([group, endpoints]) => {
      console.log(`  ${group}: ${endpoints.length} endpoints`);
    });

    console.log('\n✨ Готово! Документація збережена в папці ./docs/');

  } catch (error) {
    console.error('\n❌ Помилка:', error.message);
    process.exit(1);
  }
}

// Запуск
main();

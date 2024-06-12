# Проект: To-Do Календарь

## Обзор проекта

### Описание проекта 
Данный проект представляет собой To-Do лист в виде календаря, где каждый день представлен как список задач. При клике на день открывается модальное окно со списком задач. В этом окне можно создавать новые задачи, удалять их и помечать как выполненные.

### Информация для код-ревью

- [Ссылка на репозиторий проекта](https://github.com/Didsen1/airnet)

### Функционал проекта
- Адаптивный дизайн
- Отображение текущего месяца
- Модальное окно со списком задач для каждого дня
  - Создание новой задачи
  - Удаление задачи
  - Пометка задачи как выполненной
- Реализация с использованием TypeScript
- Использование Redux Toolkit для управления состоянием
- SCSS для стилизации
- Архитектура проекта по FSD (Feature-Sliced Design)

### Будущие улучшения
- Система профилей: у каждого профиля свой список задач, не отображаемый в другом профиле
- Отображение всего года с правильной отрисовкой месяцев
- Упаковка проекта в Docker контейнер и размещение его на хостинге

## Запуск проекта

1. Клонировать репозиторий:
   git clone https://github.com/Didsen1/airnet
2. Установить зависимости:
   npm ci
3. Запустить dev-режим сборки приложения:
   npm run start

## Стэк технологий

<span><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></span>
<span><img src="https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit"></span>
<span><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></span>
<span><img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS"></span>

## Сторонние библиотеки

- React
- Redux Toolkit
- TypeScript
- SCSS

## Дополнительные Фичи
Реализованные дополнительные функции:
- Использование Redux Toolkit для управления состоянием
- Архитектура проекта по FSD (Feature-Sliced Design)
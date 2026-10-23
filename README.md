# HK industrial preview

Статический сайт на Astro (`site/`). Исходники и preview — на GitHub.

## Живой сайт

**https://chengsupply.com**

`www.chengsupply.com` ведёт туда же. Старый адрес
`chengsupply.github.io/hk_draft` отдаёт 301 на домен — это служебное имя
GitHub Pages, убрать его нельзя, да и не нужно: старые ссылки живут.

Каждый push в `main` → GitHub Actions собирает `site/` и публикует на GitHub Pages.

## Локально

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview  # http://localhost:4321
```

## GitHub

Репозиторий: https://github.com/chengsupply/hk_draft

- `ci.yml` — проверка сборки на PR
- `deploy-pages.yml` — деплой на GitHub Pages

## Структура

```
site/          ← рабочий сайт
бриф/          ← бриф, исходники (не нужен для билда)
```

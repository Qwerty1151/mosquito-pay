# Mosquito Pay — Frontend (Next.js App Router)

Отдельный проект Vercel для `mosquito.navilon.tech`. Фронт: лендинг, Pricing (редирект в `/api/checkout`), Success/Fail, Privacy/Terms, Dashboard с проверкой `/api/license/verify`.

## Команды
```
npm i
npm run dev
npm run build
npm start
```

## Env (Vercel → Project Settings → Env)
```
PAYEER_SHOP_ID=
PAYEER_SECRET_KEY=
CURRENCY=USD
JWT_SECRET=
ALLOWED_ORIGINS=https://navilon.tech,https://mosquito.navilon.tech,chrome-extension://<ID>
SUBSCRIPTION_DAYS=30
KV_REST_API_URL=
KV_REST_API_TOKEN=
KV_URL=
KV_REST_API_READ_ONLY_TOKEN=
NEXT_PUBLIC_BASE_URL=https://mosquito.navilon.tech
```

## Деплой (Vercel)
1) Импортируй архив как новый проект (Next.js).
2) Добавь домен `mosquito.navilon.tech`.
3) Заполни Env, подключи Vercel KV.
4) Payeer Merchant: Success `/success`, Fail `/fail`, Status `/api/payeer/callback`.

# Deploy Boutique Online

This project is ready for Render deployment.

## Render Settings

- Build command: `npm install`
- Start command: `npm start`
- Node version: `24`
- Persistent disk mount path: `/var/data`

This uses Render's `starter` service plan because SQLite and uploaded product images need a persistent disk. A free web service will lose local SQLite and upload files when it restarts.

The included `render.yaml` already sets:

- `DB_PATH=/var/data/boutique.db`
- `UPLOADS_DIR=/var/data/uploads`
- a 1 GB persistent disk

## Secrets To Add In Render

Set these in the Render dashboard after creating the web service:

```env
BASE_URL=https://your-render-app.onrender.com
MPESA_CALLBACK_URL=https://your-render-app.onrender.com/api/payments/mpesa-callback
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
```

Render will generate `JWT_SECRET` automatically from `render.yaml`.

## Deploy

1. Push this folder to GitHub.
2. Open Render and create a new Blueprint from the repository.
3. Render will read `render.yaml`.
4. Fill the secret values marked `sync: false`.
5. Deploy.

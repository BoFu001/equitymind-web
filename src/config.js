const isDev = import.meta.env.DEV

export const WS_URL = isDev
  ? 'ws://localhost:8001/api/v1/stream'
  : 'wss://equitymind-web-backend.up.railway.app/api/v1/stream'
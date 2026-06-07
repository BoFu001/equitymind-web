const isDev = import.meta.env.DEV

export const WS_URL = isDev
  ? 'ws://localhost:8000/api/v1/query/stream'
  : 'wss://equitymind.up.railway.app/api/v1/query/stream'
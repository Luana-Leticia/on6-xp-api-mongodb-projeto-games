const app = require('./src/app')

const PORT = 3000

app.listen(PORT, () => console.log(`O servidor está funcionando em http://localhost:${PORT}`))
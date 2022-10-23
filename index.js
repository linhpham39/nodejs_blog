const express = require('express')
//đi vào thư mục node module để gọi thư viện
const app = express()
const port = 3000

//định nghĩa route, thêm phần "/"(ở phần get) vào sau link local
app.get('/', (req, res) => {
  res.send('Hello Worddd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
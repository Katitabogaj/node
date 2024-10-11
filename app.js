import express, { response } from 'express'
import { adminroutes } from './routes/admin.js'
import shoproutes from './routes/shop.js'
import bodyParser from 'body-parser'
import __dirname from './util/rootpath.js'
import path from 'path'
import { errorControllers } from './controllers/error.js'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminroutes)
app.use('/', shoproutes)
app.use(errorControllers);



app.listen(3000, () => console.log('a szerver a http://localhost:${PORT} porton fut. '))
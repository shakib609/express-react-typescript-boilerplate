import express, { Application } from 'express'
import morgan from 'morgan'
import path from 'path'

const app: Application = express()

// Enable morgan logger
const morganConfig = process.env.NODE_ENV === 'production' ? 'short' : 'dev'
app.use(morgan(morganConfig))

// Serve static files from React apps production build
const staticFilesPath = path.resolve(__dirname, '../client/build/')
app.use(express.static(staticFilesPath))

// Serve React App
app.get('/', (req, res) => {
	res.render('../client/build/index.html')
})

// Listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.info(`Server listening on PORT: ${PORT}`)
})

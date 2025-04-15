import { Server } from '@aidomx/server'
import chalk from 'chalk'
import { performance } from 'perf_hooks'
import pkg from '@/package.json'
import { printServerInfo } from '@/cli/utils/printServerInfo'

const SERVER_VERSION = pkg.version
const web = {
  protocol: process.env.PROTOCOL || 'http://',
  hostname: process.env.HOSTNAME || '127.0.0.1',
  port: Number(process.env.PORT || 3000),
}

export const devServer = () => {
  const start = performance.now()
  const app = Server()

  app.get('/', (_res) => {
    console.log('Hello')
  })

  app.listen(web.port, () => {
    const duration = ((performance.now() - start) / 1000).toFixed(2)
    printServerInfo(web.port, SERVER_VERSION)
    console.log(chalk.green(` ✓ `) + `Ready in ${duration}s`)
    console.log()
  })

  return app
}

import pkg from '../package.json'
import { choiceServer, devServer, Initialize, Usage } from './commands'

const args = process.argv.slice(2)
const command = args[0]
const CLI_VERSION = pkg.version

switch (command) {
  case 'init':
    Initialize()
    break

  case 'dev':
    devServer()
    break

  case 'start':
    choiceServer(args[1])
    break

  case 'help':
  case '-h':
  default:
    console.log(Usage)
    break

  case 'version':
  case '-v':
    console.log(`Aidomx CLI v${CLI_VERSION}`)
    break
}

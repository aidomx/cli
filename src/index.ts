import pkg from '../package.json'
import { Initialize } from './commands/init'
import { choiceServer } from './commands/server'

const args = process.argv.slice(2)
const command = args[0]
const CLI_VERSION = pkg.version

switch (command) {
  case 'init':
    Initialize()
    break

  case 'start':
    choiceServer(args[1])
    break

  case 'help':
  case '-h':
  default:
    console.log(`  
Aidomx CLI 
  
Usage: 
  
Commands:  
aidomx  init     Inisialisasi proyek dengan konfigurasi AIDOMX
aidomx  start    Menjalankan server dengan php atau node
aidomx  version  Menampilkan versi CLI  
aidomx  help     Menampilkan bantuan ini  
`)
    break

  case 'version':
  case '-v':
    console.log(`Aidomx CLI v${CLI_VERSION}`)
    break
}

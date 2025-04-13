import { existsSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import pkg from '../../package.json'

const args = process.argv.slice(2)
const command = args[0]
const CLI_VERSION = pkg.version

switch (command) {
  case 'init':
    console.log('[Aidomx] Inisialisasi proyek AIDOMX...')
    // Placeholder init
    const configPath = resolve(process.cwd(), 'aidomx.config.json')
    if (existsSync(configPath)) {
      console.log('[Aidomx] aidomx.config.json sudah ada.')
    } else {
      writeFileSync(
        configPath,
        JSON.stringify(
          {
            path: {
              public: 'public',
              query: ['globals.js'],
            },
            eventMap: {
              onClick: 'click',
              onInput: 'input',
            },
          },
          null,
          2
        )
      )
      console.log('[Aidomx] Berhasil membuat aidomx.config.json')
    }
    break

  case '--help':
  case '-h':
  default:
    console.log(`
Aidomx CLI

Usage:
  aidomx [command]

Commands:
  init           Inisialisasi proyek dengan konfigurasi AIDOMX
  --version|-v   Menampilkan versi CLI
  --help|-h      Menampilkan bantuan ini
`)
    break

  case '--version':
  case '-v':
    console.log(`Aidomx CLI v${CLI_VERSION}`)
    break
}

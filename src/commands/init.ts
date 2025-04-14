import { existsSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export const Initialize = () => {
  console.log('[Aidomx] Inisialisasi proyek AIDOMX...')

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
}

"use strict";var i=require("fs"),e=require("path");var s={name:"@aidomx/cli",version:"0.0.1",description:"CLI for aidomx",keywords:["cli"],homepage:"https://github.com/aidomx/cli#readme",bugs:{url:"https://github.com/aidomx/cli/issues"},repository:{type:"git",url:"git+https://github.com/aidomx/cli.git"},license:"MIT",author:"aidomx <aidomxdev@gmail.com>",type:"commonjs",main:"index.js",scripts:{build:"tsup",test:"jest"},devDependencies:{"@types/node":"^22.14.1",tsup:"^8.4.0",typescript:"^5.8.3"}};var a=process.argv.slice(2),c=a[0],t=s.version;switch(c){case"init":console.log("[Aidomx] Inisialisasi proyek AIDOMX...");let o=(0,e.resolve)(process.cwd(),"aidomx.config.json");(0,i.existsSync)(o)?console.log("[Aidomx] aidomx.config.json sudah ada."):((0,i.writeFileSync)(o,JSON.stringify({path:{public:"public",query:["globals.js"]},eventMap:{onClick:"click",onInput:"input"}},null,2)),console.log("[Aidomx] Berhasil membuat aidomx.config.json"));break;case"--help":case"-h":default:console.log(`
Aidomx CLI

Usage:
  aidomx [command]

Commands:
  init           Inisialisasi proyek dengan konfigurasi AIDOMX
  --version|-v   Menampilkan versi CLI
  --help|-h      Menampilkan bantuan ini
`);break;case"--version":case"-v":console.log(`Aidomx CLI v${t}`);break}
//# sourceMappingURL=index.js.map
# Aidomx CLI

**AIDOMX CLI** adalah alat baris perintah (Command Line Interface) ringan untuk membantu mengelola proyek berbasis AIDOMX dengan cepat dan fleksibel. Dirancang untuk pemula dan pembelajar web, CLI ini mendukung pengembangan berbasis PHP dan Node.js.

---

## Instalasi

```bash
npm install -g @aidomx/cli


---

Perintah Dasar

aidomx [command]

init

Inisialisasi proyek AIDOMX di direktori saat ini. Akan membuat file aidomx.config.json jika belum ada.

aidomx init


---

start <stack>

Menjalankan server sesuai stack yang dipilih (php atau node).

aidomx start php
aidomx start node


---

add <stack>

Menambahkan dukungan stack ke proyek AIDOMX (rencana pengembangan).

aidomx add php
aidomx add node


---

version atau -v

Menampilkan versi CLI yang sedang digunakan.

aidomx version


---

help atau -h

Menampilkan bantuan CLI.

aidomx help


---

Tujuan

CLI ini bertujuan untuk menyederhanakan proses setup server web lokal untuk kebutuhan edukasi, prototipe, atau pembelajaran — tanpa kerumitan konfigurasi server seperti Apache, Nginx, atau Lighttpd.


---

Lisensi

MIT License — Silakan digunakan dan dikembangkan sesuai kebutuhan Anda.


---
```

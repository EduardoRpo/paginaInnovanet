# Despliegue de la web Innovanet

Servidor: `root@31.220.86.87` (vmi3009202)  
Directorio: `/opt/pagina-innovanet`  
Repo: `https://github.com/EduardoRpo/paginaInnovanet.git`  
Rama: `main`  
Sitio: https://innovannet.com  
Proceso: PM2, nombre `pagina-innovanet` (id 0, modo fork)

La app es Next.js 15 con `output: "standalone"`. Se construye **en el VPS**. Un `git pull` no publica solo: hay que **build** y **`pm2 restart`**.

## Publicar cambios

```bash
cd /opt/pagina-innovanet
git pull origin main
npm run build
pm2 restart pagina-innovanet
```

Build correcto: `Compiled successfully`, `Generating static pages (10/10)`, y `pagina-innovanet` queda `online` en PM2.

`npm install` solo si cambió `package.json`.

## Comprobar

Recarga dura (Ctrl+F5):

- https://innovannet.com/ — video de la plataforma en Producto
- https://innovannet.com/producto
- https://innovannet.com/servicios — video de automatización

## Notas

- Los MP4 del sitio están en `public/videos/`, no los originales de la raíz local.
- Build típico ~9 s. PM2 tras restart baja un momento la RAM y vuelve a `online`.

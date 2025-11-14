# 📄 FastFlix Help Page

Página de ayuda estática para FastFlix, accesible desde `fastflix.app/help`.

## 📁 Estructura

```
web/help/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos con colores FastFlix
├── js/
│   └── main.js         # Búsqueda y funcionalidad interactiva
└── README.md           # Este archivo
```

## ✨ Características

- **Responsive Design**: Optimizado para móvil, tablet y desktop
- **Búsqueda en vivo**: Busca en todo el contenido con resaltado de resultados
- **FAQ Expandible**: Preguntas frecuentes con acordeones
- **Gradientes FastFlix**: Colores azul (#2196F3) y morado (#9C27B0)
- **Accesibilidad**: Semántica HTML correcta y ARIA labels
- **Performance**: CSS y JS optimizados, sin dependencias externas

## 🚀 Deployment

### Opción 1: GitHub Pages (Recomendado)

1. **Configurar GitHub Pages:**
   ```bash
   # En tu repositorio de GitHub
   Settings → Pages → Source: Deploy from a branch
   Branch: main → Folder: /web/help
   ```

2. **Dominio personalizado (opcional):**
   - Agregar archivo `CNAME` en `/web/help/` con: `help.fastflix.app`
   - Configurar DNS en tu proveedor:
     ```
     CNAME help.fastflix.app → [tu-usuario].github.io
     ```

3. **URL final:**
   - Sin dominio: `https://[tu-usuario].github.io/fastflix/help/`
   - Con dominio: `https://help.fastflix.app`

### Opción 2: Netlify

1. **Deploy manual:**
   ```bash
   # Instalar Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   cd web/help
   netlify deploy --prod
   ```

2. **Deploy automático:**
   - Conectar repositorio en Netlify
   - Build settings:
     - Base directory: `web/help`
     - Publish directory: `.`
     - Build command: (dejar vacío)

3. **Dominio personalizado:**
   - Settings → Domain management → Add custom domain
   - Agregar: `help.fastflix.app`

### Opción 3: Vercel

1. **Deploy:**
   ```bash
   # Instalar Vercel CLI
   npm install -g vercel

   # Login
   vercel login

   # Deploy
   cd web/help
   vercel --prod
   ```

2. **Configurar dominio:**
   - Settings → Domains → Add
   - Agregar: `help.fastflix.app`

## 🧪 Testing Local

Para probar localmente:

```bash
# Opción 1: Python
cd web/help
python3 -m http.server 8000
# Abrir: http://localhost:8000

# Opción 2: Node.js (http-server)
npm install -g http-server
cd web/help
http-server -p 8000
# Abrir: http://localhost:8000

# Opción 3: PHP
cd web/help
php -S localhost:8000
# Abrir: http://localhost:8000
```

## 📝 Contenido

### Secciones incluidas:

1. **Hero Section**
   - Logo y título
   - Búsqueda interactiva

2. **Guía Rápida**
   - ¿Qué es FastFlix?
   - Cómo empezar
   - Características principales

3. **Funcionalidades**
   - Mi Lista (+/✔️)
   - Ya visto (👁️)
   - Me gusta (❤️)
   - Mis Filtros (🔧)

4. **FAQ**
   - 9 preguntas frecuentes
   - Expandibles con animación

5. **Contacto**
   - Email: soporte@fastflix.app
   - Links de footer

## 🎨 Personalización

### Colores

Editar en `css/styles.css`:

```css
:root {
    --primary-color: #2196F3;    /* Azul FastFlix */
    --secondary-color: #9C27B0;  /* Morado FastFlix */
    --text-dark: #212121;
    --text-light: #757575;
}
```

### Contenido

Editar `index.html`:
- Agregar/eliminar secciones
- Modificar FAQ
- Actualizar información de contacto

### Funcionalidad

Editar `js/main.js`:
- Modificar búsqueda
- Agregar analytics
- Personalizar interacciones

## 📊 Analytics (Opcional)

Para agregar Google Analytics:

1. **Agregar script en `index.html`:**
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

2. **Actualizar `js/main.js`:**
   ```javascript
   function trackEvent(category, action, label) {
       gtag('event', action, {
           'event_category': category,
           'event_label': label
       });
   }
   ```

## 🔒 Seguridad

- ✅ No hay backend ni base de datos
- ✅ No se recopila información personal
- ✅ HTTPS automático con GitHub Pages/Netlify/Vercel
- ✅ Sin cookies ni tracking (a menos que agregues analytics)

## 🐛 Troubleshooting

### La página no carga

- Verificar que los archivos estén en `/web/help/`
- Verificar rutas relativas en `index.html`
- Revisar consola del navegador para errores

### Los estilos no se aplican

- Verificar ruta de `css/styles.css` en `index.html`
- Limpiar caché del navegador
- Verificar que el archivo CSS no tenga errores de sintaxis

### La búsqueda no funciona

- Verificar ruta de `js/main.js` en `index.html`
- Revisar consola del navegador para errores JavaScript
- Verificar que los IDs de elementos coincidan

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ iOS Safari (iOS 13+)
- ✅ Chrome Android (últimas 2 versiones)

## 📄 Licencia

© 2025 FastFlix. Todos los derechos reservados.

## 🔗 Links Útiles

- **Repositorio:** [GitHub](https://github.com/tu-usuario/fastflix)
- **App:** [FastFlix en Google Play](https://play.google.com/store/apps/details?id=app.fastflix)
- **Contacto:** soporte@fastflix.app

---

**Última actualización:** 13 de Noviembre, 2025  
**Versión:** 1.0

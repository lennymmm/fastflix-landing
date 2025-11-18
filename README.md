# 🌐 FastFlix Website - Landing Page & Docs

Esta carpeta contiene **TODO** lo relacionado con la **landing page** de fastflix.app y sus páginas asociadas.

## 📁 Estructura Completa

```
website/
├── .git/                    ← Repositorio para Netlify
├── index.html              ← Landing page principal ⭐
├── landing-index.html      ← Versión alternativa
├── terms.html              ← Términos de uso (HTML)
│
├── help/                   ← Página de ayuda
│   ├── index.html
│   ├── css/
│   └── js/
│
├── privacy/                ← Política de privacidad
│   └── index.html
│
├── terms/                  ← Términos de servicio
│   └── index.html
│
├── imgs/                   ← Imágenes de la landing
├── mini/                   ← Versiones standalone
├── mmx/                    ← Otros recursos
├── zzzz/                   ← Backups
│
├── CNAME                   ← Dominio personalizado
└── *.md                    ← Documentación
```

## 🚀 Deploy en Netlify

Esta carpeta está conectada a **Netlify** para fastflix.app:

1. **Repositorio:** `website/.git/`
2. **Branch:** main (o el que uses)
3. **Build command:** Ninguno (HTML estático)
4. **Publish directory:** `.` (raíz de website/)

### Hacer cambios:

```bash
cd website/
git add .
git commit -m "Actualizar landing page"
git push origin main
```

Netlify detectará los cambios y actualizará automáticamente.

## 📝 Páginas Disponibles

| Página | Archivo | URL |
|--------|---------|-----|
| Landing principal | `index.html` | fastflix.app |
| Ayuda | `help/index.html` | fastflix.app/help |
| Privacidad | `privacy/index.html` | fastflix.app/privacy |
| Términos | `terms/index.html` | fastflix.app/terms |

## ✏️ Editar Landing Page

Para modificar la landing page:

1. Editar `index.html`
2. Probar localmente:
   ```bash
   # Abrir en navegador
   open index.html
   
   # O usar servidor local
   python3 -m http.server 8000
   ```
3. Commit y push:
   ```bash
   git add index.html
   git commit -m "Actualizar landing"
   git push
   ```

## 🔗 Separación con Flutter

| Carpeta | Propósito | Deploy | Repositorio |
|---------|-----------|--------|-------------|
| `website/` | Landing page | Netlify | `website/.git/` |
| `web/` | Flutter app | Vercel | Repositorio principal |

## ⚠️ Importante

- **NO mover** archivos de aquí a `web/`
- `web/` es solo para Flutter
- Esta carpeta es independiente
- Netlify lee directamente de aquí

## 🎯 Para tu Hijo (iPhone)

Dos opciones:

**Opción 1: Landing page (actual)**
- URL: fastflix.app
- Deploy: Netlify (esta carpeta)
- Contenido: Información de la app

**Opción 2: App completa**
- Build: `flutter build web --release`
- Deploy: `build/web/` en Vercel
- Contenido: App funcional en Safari

## 📦 Archivos Especiales

- **CNAME**: Dominio personalizado para GitHub Pages/Netlify
- **.git/**: Repositorio independiente para la landing
- **mini/**: Versiones standalone de páginas
- **zzzz/**: Backups de versiones anteriores

---

**Deploy actual:** Netlify  
**Dominio:** fastflix.app  
**Última actualización:** 16 de noviembre de 2025

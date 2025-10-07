# 📦 Instrucciones para publicar fastflix.app

## Archivos Creados

✅ `web/index.html` - Landing page principal
✅ `web/privacy.html` - Política de privacidad

## Opciones de Hosting

### Opción 1: GitHub Pages (Recomendado - GRATIS)

1. **Crear repositorio en GitHub:**
   ```bash
   # Desde la carpeta web/
   cd web
   git init
   git add .
   git commit -m "Landing page FastFlix"
   ```

2. **Subir a GitHub:**
   - Crea un repo en https://github.com/new (nombre: `fastflix-landing`)
   - Ejecuta:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/fastflix-landing.git
   git branch -M main
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → carpeta /root → Save

4. **Tu sitio estará en:**
   `https://TU_USUARIO.github.io/fastflix-landing/`

5. **Configurar dominio custom (fastflix.app):**
   - En GitHub Pages settings, ingresa `fastflix.app`
   - En tu proveedor de dominios, agrega estos DNS records:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   TU_USUARIO.github.io
   ```

---

### Opción 2: Netlify (GRATIS + Fácil)

1. **Subir a Netlify:**
   - Ve a https://app.netlify.com
   - Arrastra la carpeta `web/` a "Drop your site folder here"

2. **Configurar dominio:**
   - Site settings → Domain management
   - Add custom domain: `fastflix.app`
   - Sigue instrucciones de DNS

---

### Opción 3: Hosting de tu Dominio (Si ya tienes)

Si compraste hosting con fastflix.app:

1. **Subir archivos por FTP/cPanel:**
   - Sube `index.html` y `privacy.html` a la carpeta raíz (public_html)

2. **Verificar:**
   - Visita `https://fastflix.app`

---

## Actualizar Play Store Link

Una vez publicada la app en Play Store, actualiza el botón en `index.html`:

```html
<!-- Buscar esta línea: -->
<a href="#" class="cta-button">Descarga en Google Play</a>

<!-- Cambiar a: -->
<a href="https://play.google.com/store/apps/details?id=app.fastflix" class="cta-button">Descarga en Google Play</a>
```

---

## Verificar URLs

Después de configurar el hosting:

1. ✅ Landing page: `https://fastflix.app`
2. ✅ Privacidad: `https://fastflix.app/privacy.html`

Usa la URL de privacidad en Play Console cuando te la pida.

---

## Cambiar Package Name

En `android/app/build.gradle` línea ~40:

```gradle
defaultConfig {
    applicationId "app.fastflix"  // ← Ya confirmado
    // ...
}
```

✅ Ya está correcto según lo discutido.

---

## Próximos Pasos para Publicación

1. [ ] Hostear landing page (elige una opción arriba)
2. [ ] Verificar que `https://fastflix.app/privacy.html` funcione
3. [ ] Crear keystore de release
4. [ ] Cambiar applicationId a "app.fastflix" (si no está ya)
5. [ ] Preparar assets (icon 512x512, feature graphic 1024x500, screenshots)
6. [ ] Compilar AAB: `flutter build appbundle --release`
7. [ ] Subir a Play Console

Ver `RESUMEN_PUBLICACION.md` para checklist completo.

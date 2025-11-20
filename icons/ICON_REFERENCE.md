# 🎨 Iconos de FastFlix - Guía de Referencia

## ✅ Archivos Actuales

### Iconos Normales
- `icon-192.png` (14 KB) - Ícono normal 192x192
- `icon-512.png` (95 KB) - Ícono normal 512x512

### Iconos Maskable (Adaptativos)
- `Icon-maskable-192.png` (10 KB) - Con padding 20% - ✅ CREADO
- `Icon-maskable-512.png` (62 KB) - Con padding 20% - ✅ CREADO

### Otros
- `fastflix_logo.png` (413 KB) - Logo original grande
- `CREATE_MASKABLE.md` - Guía para crear maskables

---

## 📱 ¿Dónde se Usan?

### Favicon (Web)
**Archivo:** `web/index.html` línea 10-12
```html
<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="icons/icon-512.png">
<link rel="apple-touch-icon" href="icons/icon-192.png">
```

### PWA Manifest (Web App)
**Archivo:** `web/manifest.json`
```json
"icons": [
    {
        "src": "icons/icon-192.png",      // Normal
        "sizes": "192x192",
        "type": "image/png"
    },
    {
        "src": "icons/icon-512.png",      // Normal
        "sizes": "512x512",
        "type": "image/png"
    },
    {
        "src": "icons/Icon-maskable-192.png",  // Adaptativo Android
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
    },
    {
        "src": "icons/Icon-maskable-512.png",  // Adaptativo Android
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
    }
]
```

---

## 🔍 Diferencia Visual

### Icon Normal (`icon-192.png`)
```
┌─────────────────┐
│  🎬 FastFlix    │  ← Logo ocupa casi todo el espacio
│                 │
└─────────────────┘
```

### Icon Maskable (`Icon-maskable-192.png`)
```
┌─────────────────┐
│                 │
│                 │  ← Fondo morado #667eea
│   🎬 FastFlix   │  ← Logo más pequeño (80% área segura)
│                 │
│                 │
└─────────────────┘
```

**Cuando Android aplica máscara circular:**
```
    ╭───────────╮
   │             │
  │               │
  │   🎬 FastFlix │  ← Se ve completo dentro del círculo
  │               │
   │             │
    ╰───────────╯
```

---

## ✅ Verificación

### 1. Probar Maskable en Línea
1. Ve a: https://maskable.app
2. Sube `Icon-maskable-512.png`
3. Verifica que el logo se vea bien en todas las formas:
   - ⭕ Círculo (Android)
   - ◻️ Cuadrado redondeado
   - 🔶 Squircle

### 2. Probar Favicon en Navegador
1. Abre `web/index.html` en navegador
2. Revisa la pestaña - debería mostrar el ícono FastFlix

### 3. Probar PWA
1. Hostea el sitio
2. En Chrome Android: "Añadir a pantalla de inicio"
3. El ícono debería verse con forma adaptativa

---

## 🎨 Colores FastFlix

- **Primario:** `#667eea` (Morado/Púrpura)
- **Secundario:** `#764ba2` (Púrpura oscuro)
- **Gradiente:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

Los iconos maskable usan el color primario `#667eea` como fondo.

---

## 📝 Notas

- ✅ Los iconos maskable fueron generados automáticamente con ImageMagick
- ✅ Tienen 20% de padding (safe zone recomendada por Google)
- ✅ El logo se redimensiona al 80% y se centra sobre fondo morado
- ✅ Compatible con todas las formas de Android adaptativo

---

## 🔄 Regenerar Maskables

Si necesitas regenerar:

```bash
cd web/icons

# Maskable 192x192 (logo al 80% = 154px)
magick icon-192.png -resize 154x154 -gravity center \
  -background "#667eea" -extent 192x192 Icon-maskable-192.png

# Maskable 512x512 (logo al 80% = 410px)
magick icon-512.png -resize 410x410 -gravity center \
  -background "#667eea" -extent 512x512 Icon-maskable-512.png
```

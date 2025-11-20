# Crear Iconos Maskable para FastFlix

## ¿Qué son los Iconos Maskable?

Los iconos maskable son necesarios para Android 8+ donde el sistema aplica formas (círculo, cuadrado redondeado) sobre tu icono.

## Diferencia Visual

```
Icon Normal (icon-192.png):
┌─────────────────┐
│   [LOGO 100%]   │  ← Logo ocupa casi todo
└─────────────────┘

Icon Maskable (Icon-maskable-192.png):
┌─────────────────┐
│                 │
│   [LOGO 60%]    │  ← Logo más pequeño, centrado
│                 │
└─────────────────┘
```

## Opción 1: ImageMagick (Automático)

Si tienes ImageMagick instalado:

```bash
# Instalar ImageMagick
brew install imagemagick

# Crear maskable-192 (con 20% de padding)
convert icons/icon-192.png -resize 154x154 -gravity center -background "#667eea" -extent 192x192 icons/Icon-maskable-192.png

# Crear maskable-512 (con 20% de padding)
convert icons/icon-512.png -resize 410x410 -gravity center -background "#667eea" -extent 512x512 icons/Icon-maskable-512.png
```

## Opción 2: Online (Más Fácil)

1. Ve a: https://maskable.app/editor

2. Sube tu `icon-512.png`

3. Ajusta el padding hasta que el círculo preview se vea bien

4. Exporta en 192x192 y 512x512

5. Renombra:
   - `maskable-192.png` → `Icon-maskable-192.png`
   - `maskable-512.png` → `Icon-maskable-512.png`

6. Reemplaza en `web/icons/`

## Opción 3: Canva/Figma (Manual)

1. Crea un canvas de 512x512px

2. Agrega fondo de color (opcional): #667eea (morado FastFlix)

3. Coloca tu logo centrado al 60-70% del tamaño total

4. Exporta como PNG:
   - 512x512 → `Icon-maskable-512.png`
   - 192x192 → `Icon-maskable-192.png`

## Verificar

Sube a https://maskable.app y verifica que se vea bien en todas las formas (círculo, cuadrado, etc).

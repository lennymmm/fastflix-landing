# 🔧 Solución Error 403 - GitHub Pages + Porkbun

## Problema Común
Error 403 en GitHub Pages después de configurar dominio custom de Porkbun.

## Causas Principales

### 1. DNS Records Incorrectos
GitHub Pages requiere records específicos.

### 2. CNAME File Incorrecto/Faltante
GitHub Pages necesita un archivo CNAME en el repositorio.

### 3. Propagación DNS Pendiente
Puede tardar hasta 48 horas (aunque usualmente 1-2 horas).

---

## ✅ SOLUCIÓN PASO A PASO

### Paso 1: Verificar DNS Records en Porkbun

**Para `fastflix.app` (root domain):**

```
Tipo: A
Host: @ (o dejar vacío)
Answer: 185.199.108.153

Tipo: A
Host: @ (o dejar vacío)
Answer: 185.199.109.153

Tipo: A
Host: @ (o dejar vacío)
Answer: 185.199.110.153

Tipo: A
Host: @ (o dejar vacío)
Answer: 185.199.111.153
```

**Para `www.fastflix.app` (opcional pero recomendado):**

```
Tipo: CNAME
Host: www
Answer: TU_USUARIO.github.io
```

**IMPORTANTE:** Reemplaza `TU_USUARIO` con tu usuario de GitHub.

---

### Paso 2: Crear/Verificar Archivo CNAME

**En tu repositorio GitHub:**

1. Ve a la carpeta raíz de tu repo (donde está `index.html`)
2. Crea un archivo llamado **`CNAME`** (sin extensión, todo mayúsculas)
3. Contenido del archivo (una sola línea):

```
fastflix.app
```

**Desde terminal:**

```bash
# Si ya tienes el repo clonado
cd /ruta/a/tu/repo
echo "fastflix.app" > CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push
```

---

### Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. En **"Custom domain"**, ingresa: `fastflix.app`
4. Click **"Save"**
5. ✅ Marca la casilla **"Enforce HTTPS"** (espera 5-10 min si no está disponible)

---

### Paso 4: Verificar Configuración

**A. Verificar DNS Propagación:**

```bash
# Ver si los A records están propagados
dig fastflix.app +short

# Deberías ver:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Verificar CNAME (si configuraste www)
dig www.fastflix.app +short

# Debería mostrar: TU_USUARIO.github.io
```

**B. Verificar GitHub Pages Status:**

```bash
# Ver si GitHub reconoce el dominio
curl -I https://TU_USUARIO.github.io

# Debería redirigir a fastflix.app
```

---

## 🚨 Errores Comunes y Soluciones

### Error 1: "Domain's DNS record could not be retrieved"

**Causa:** DNS no propagado o records incorrectos.

**Solución:**
1. Verifica los A records en Porkbun
2. Espera 1-2 horas para propagación
3. Usa `dig fastflix.app` para verificar

### Error 2: 403 Forbidden

**Causa:** CNAME file faltante o incorrecto.

**Solución:**
```bash
# Crear CNAME correcto
echo "fastflix.app" > CNAME
git add CNAME && git commit -m "Fix CNAME" && git push
```

### Error 3: "Repository is not published"

**Causa:** GitHub Pages no está activado o branch incorrecto.

**Solución:**
1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)** → Save

### Error 4: Certificate Error / HTTPS No Disponible

**Causa:** GitHub aún no generó el certificado SSL.

**Solución:**
1. Espera 5-15 minutos
2. Desmarca "Enforce HTTPS"
3. Guarda
4. Vuelve a marcar "Enforce HTTPS"
5. Guarda de nuevo

---

## 📝 Checklist de Verificación

- [ ] **Porkbun:** 4 A records configurados (185.199.108-111.153)
- [ ] **Porkbun:** CNAME record para www (opcional)
- [ ] **Repo:** Archivo `CNAME` con contenido `fastflix.app`
- [ ] **GitHub Pages:** Custom domain configurado
- [ ] **GitHub Pages:** Source = main branch / root
- [ ] **DNS:** Propagación completada (`dig fastflix.app`)
- [ ] **HTTPS:** Enforce HTTPS activado (después de 5-10 min)

---

## 🕐 Tiempos de Espera

- **DNS Propagación:** 1-2 horas (máximo 48h)
- **GitHub SSL Certificate:** 5-15 minutos
- **GitHub Pages Build:** 1-3 minutos después de push

---

## 🔍 Debug Avanzado

### Ver qué está sirviendo GitHub:

```bash
curl -L https://fastflix.app
```

### Ver headers completos:

```bash
curl -I https://fastflix.app
```

### Verificar desde otro servidor DNS:

```bash
# Google DNS
nslookup fastflix.app 8.8.8.8

# Cloudflare DNS
nslookup fastflix.app 1.1.1.1
```

---

## 🎯 Configuración Correcta Final

**Porkbun DNS:**
```
A      @       185.199.108.153
A      @       185.199.109.153
A      @       185.199.110.153
A      @       185.199.111.153
CNAME  www     TU_USUARIO.github.io
```

**GitHub Repo (root):**
```
CNAME (archivo)
index.html
privacy.html
favicon.ico
... otros archivos
```

**Contenido de CNAME:**
```
fastflix.app
```

**GitHub Pages Settings:**
- Custom domain: `fastflix.app`
- Enforce HTTPS: ✅ (activar después de 5-10 min)
- Source: main / (root)

---

## ✅ Verificación Final

Una vez todo configurado, visita:
- ✅ `http://fastflix.app` → Debe cargar la página
- ✅ `https://fastflix.app` → Debe cargar con HTTPS
- ✅ `https://www.fastflix.app` → Debe redirigir a fastflix.app

Si sigue dando 403 después de 2 horas:
1. Borra el custom domain en GitHub Pages
2. Guarda
3. Espera 1 minuto
4. Vuelve a añadir `fastflix.app`
5. Guarda
6. Espera 5-10 minutos

---

## 💡 Alternativa Rápida: Netlify

Si GitHub Pages sigue dando problemas, Netlify es más simple:

1. Ve a https://app.netlify.com
2. Arrastra la carpeta `web/` 
3. Site settings → Domain management
4. Add custom domain: `fastflix.app`
5. Sigue las instrucciones DNS (más simples que GitHub)

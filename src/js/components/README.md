# Redireccionador de URLs internas a rutas limpias

Este script está diseñado para reescribir dinámicamente los enlaces internos en tus archivos HTML para que apunten a URLs amigables y limpias, como `/artistico`, en lugar de rutas largas como `./pages/es/perfilMusical/artistico.html`.

## 📁 Ruta del archivo

Ubica el archivo JavaScript en:

```
js/components/redireccion.js
```

## 🚀 Cómo usarlo

En cada archivo HTML, incluye este script justo antes del cierre de la etiqueta `</body>`:

```html
<script src="/js/components/redireccion.js"></script>
</body>
```

> ⚠️ El script solo se ejecutará cuando estés en el dominio `juanjramonmateos.com` para no interferir durante el desarrollo local.

---

## ➕ Cómo añadir más rutas

Dentro del archivo `redireccion.js`, hay un objeto llamado `mapaRutas`. Aquí es donde defines las redirecciones deseadas.

```javascript
const mapaRutas = {
  "./pages/en/musicalProfile/artistic.html": "/artistic",
  "./pages/en/musicalProfile/music.html": "/music",
  "./pages/es/perfilMusical/musica.html": "/musica",
  "./pages/es/perfilMusical/artistico.html": "/artistico",
  "./pages/es/index-es.html": "/es"
};
```

### 📌 Para añadir una nueva ruta:

1. Usa la ruta original interna tal como aparece en tus etiquetas `<a href="...">`.
2. Asigna la URL limpia que deseas que se muestre al usuario.

#### 🧠 Ejemplo

Supón que tienes un archivo en:

```
./pages/en/professionalProfile/experiencia.html
```

Y quieres que la URL limpia sea:

```
/experiencia
```

Simplemente añade esta línea en el objeto:

```javascript
"./pages/en/professionalProfile/experiencia.html": "/experiencia"
```

---

## 📎 Consejos

- Usa rutas absolutas (`/...`) en el segundo valor para evitar errores de resolución.
- Asegúrate de que las rutas cortas también estén configuradas correctamente en tu archivo `.htaccess` para que funcionen al navegar directamente.

---

Si necesitas ayuda para generar automáticamente estas rutas o integrarlas con tu servidor, no dudes en pedírmelo.

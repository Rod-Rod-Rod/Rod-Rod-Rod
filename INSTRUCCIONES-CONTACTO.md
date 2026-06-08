# 📧 Configuración del Formulario de Contacto - FORMSPREE

## ¿Qué es Formspree?

Formspree es un servicio **completamente gratuito** que recibe los mensajes de tu formulario web y te los envía directamente a tu correo.

---

## 🚀 Pasos para Configurar

### PASO 1: Crear cuenta en Formspree

1. Ve a **https://formspree.io**
2. Haz clic en **"Sign Up"** (esquina superior derecha)
3. Regístrate con tu email (el email donde quieres recibir los mensajes)
4. Verifica tu email (revisa spam si es necesario)

### PASO 2: Crear un nuevo formulario

1. En tu dashboard de Formspree, haz clic en **"Create"** o **"New Form"**
2. Dale un nombre (ej: "Contacto Portafolio")
3. Haz clic en **"Create Project"**

### PASO 3: Obtener tu FORM_ID

1. Después de crear el formulario, verás un código como este:

```
https://formspree.io/f/XXXXXXXXX
```

2. Copia la parte en mayúscula: **XXXXXXXXX** (eso es tu FORM_ID)

### PASO 4: Configurar tu portafolio

1. Abre el archivo **script.js** en tu editor
2. Busca la línea 26 donde dice: `const formspreeId = 'TU_FORM_ID';`
3. Reemplaza **'TU_FORM_ID'** con tu ID real

**ANTES:**

```javascript
const formspreeId = "TU_FORM_ID";
```

**DESPUÉS:**

```javascript
const formspreeId = "abc123xyz456"; // Ejemplo
```

---

## ✅ Verificar que funciona

1. Abre tu portafolio en el navegador
2. Desplázate hasta la sección **Contacto**
3. Completa el formulario con un mensaje de prueba
4. Haz clic en **"Enviar Mensaje"**
5. Si aparece el mensaje **✓ "¡Mensaje enviado exitosamente!"**, ¡funcionó! 🎉
6. Revisa tu correo (y carpeta de spam)

---

## 📋 Campos del Formulario

El formulario recopila:

- **Nombre**: Nombre del contacto
- **Email**: Su correo (para que puedas responder)
- **Asunto**: Tema del mensaje
- **Mensaje**: El contenido del mensaje

Todos los campos son **obligatorios**.

---

## 🔒 Privacidad

- Los mensajes se envían **directamente a tu email**
- Formspree **no almacena** información sensible
- Los emails recibidos son solo tuyos
- Puedes responder directamente desde tu cliente de email

---

## ❌ Solución de problemas

### "Por favor configura tu ID de Formspree"

**Solución:** Asegúrate de haber reemplazado `'TU_FORM_ID'` con tu ID real en script.js

### No llega el email

1. Revisa la **carpeta de spam/correo no deseado**
2. Verifica que confirmaste tu email en Formspree
3. Ve a https://formspree.io y revisa el dashboard para ver si llegó el mensaje

### El formulario no envía

1. Abre la **consola del navegador** (F12 → Consola)
2. Busca mensajes de error
3. Verifica que tengas **conexión a internet**

---

## 💡 Opcional: Personalización

Si quieres cambiar el formulario:

**Agregar más campos:**

```html
<div class="form-group">
  <label for="empresa">Empresa</label>
  <input type="text" id="empresa" name="empresa" required />
</div>
```

**Cambiar texto del botón:**
En `index.html`, cambia:

```html
<i class="fas fa-paper-plane"></i> Enviar Mensaje
```

Por lo que quieras.

---

## 🎯 Límites Gratuitos

- **Formspree Free**: 50 mensajes/mes
- Si necesitas más, puedes actualizar a plan de pago ($25/mes)

---

## ¿Preguntas?

Formspree tiene documentación en: **https://formspree.io/docs**

---

**¡Tu formulario de contacto ya está listo!** 🌿

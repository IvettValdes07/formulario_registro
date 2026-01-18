# Formulario de Registro con EmailJS

## Descripción

Formulario web responsive desarrollado en **HTML, CSS y JavaScript** que permite capturar datos de usuarios (nombre, correo, WhatsApp y local) y enviar automáticamente la información por correo electrónico utilizando **EmailJS**, sin necesidad de backend.

El sistema está pensado para uso en dispositivos móviles y desktop, y es ideal para páginas de registro, landing pages o formularios de contacto.
El correo se envía directamente al email ingresado por el usuario, mostrando un mensaje de **registro exitoso** al completar el envío.

Este proyecto demuestra habilidades en:

* Desarrollo Front-End puro (HTML, CSS, JavaScript)
* Integración de servicios externos (EmailJS)
* Manejo de formularios y eventos
* Validación básica de datos
* Diseño responsive orientado a portfolio
* Uso de servicios sin backend

---

## Tecnologías utilizadas

* HTML5
* CSS3 (diseño dark mode, mobile-first)
* JavaScript Vanilla
* EmailJS (envío de correos sin backend)
* GitHub Pages (para despliegue)

---

## Funcionalidades

* Formulario de registro con los campos:

  * Nombre
  * Correo electrónico
  * WhatsApp
  * Local
* Envío automático de los datos por correo electrónico
* El correo se envía al email ingresado por el usuario
* Mensaje visual de **registro exitoso** al completar el envío
* Diseño responsive adaptable a celular y desktop
* Integración completa sin necesidad de servidor

---

## Pasos para clonar

* Abrir la terminal o CMD
* Ir a la carpeta donde quieras guardar el proyecto, por ejemplo:

```bash
cd C:\Users\Usuario\Proyectos
```

* Clonar el repositorio:

```bash
git clone https://github.com/wellington3100/formulario-emailjs.git
```

* Entrar a la carpeta del proyecto:

```bash
cd formulario-emailjs
```

* Abrir el archivo `index.html` en el navegador o desplegarlo en GitHub Pages

---

## Configuración de EmailJS

1. Crear una cuenta en [https://www.emailjs.com](https://www.emailjs.com)
2. Conectar un servicio de correo (Gmail, Outlook, etc.)
3. Crear un template con las variables:

   * `{{nombre}}`
   * `{{correo}}`
   * `{{whatsapp}}`
   * `{{local}}`
4. Configurar el destinatario del correo como:

   * **To email:** `{{correo}}`
5. Colocar el **Public Key**, **Service ID** y **Template ID** en el archivo `script.js`

---

## Autor

**Ivett Valdes**

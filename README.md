## **Tabla de Contenidos**
1. [Características](#características)  
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)  
3. [Requisitos Previos](#requisitos-previos)  
4. [Instalación y Ejecución](#instalación-y-ejecución)  
5. [Uso de la Aplicación](#uso-de-la-aplicación)  
6. [Archivos Principales](#archivos-principales)  
7. [Capturas de Pantalla](#capturas-de-pantalla)
8. [Mejoras](#mejoras-futuras) 
9. [Autor](#autor)

# React Counter App

Una aplicación simple creada con **React** que permite al usuario incrementar, decrementar y reiniciar un contador, con un límite máximo configurable.  
Este proyecto utiliza **Hooks** (useState) para manejar el estado del contador.

---

## **Características**

- 📊 **Visualización del Contador**  
  El contador muestra un valor inicial de **0**.

- ⬆️⬇️ **Botones de Incrementar/Decrementar**  
  - **Incrementar**: Aumenta el contador en 1.  
  - **Decrementar**: Disminuye el contador en 1 (sin bajar de 0).

- 🔄 **Reiniciar el Contador**  
  Un botón que restablece el contador a 0.

- 🚨 **Mensaje de Alerta**  
  Se muestra un mensaje cuando el contador alcanza su valor máximo (por defecto, **16**).

---

## **Tecnologías Utilizadas**

- ⚛️ **React**: Framework principal para la interfaz de usuario.
- 🎨 **SCSS**: Estilización optimizada y mantenible.
- 🔧 **Hooks**: Manejo del estado con `useState`.

---

## **Requisitos Previos**

Asegúrate de tener instalado:

- [Node.js y npm](https://nodejs.org/)  
- [Git](https://git-scm.com/)

---

## **Instalación y Ejecución**

Sigue estos pasos para levantar el proyecto localmente:

### 1. **Clonar el repositorio**
```bash
git clone https://github.com/AndreaILara/React_counter
cd React_counter
``` 
### 2. **Instalar las dependencias**
```bash
npm install
```
### 3. **Ejecutar la aplicación**
```bash
npm start
```
### 4. **Abrir en el navegador**

La aplicación estará disponible en:
```bash
http://localhost:3000
```
---
### Uso de la Aplicación

  -**Incrementar**: Haz clic en el botón "Incrementar" para sumar 1 al contador.
  
  -**Decrementar**: Haz clic en "Decrementar" para restar 1 (el valor no baja de 0).
  
  -**Reiniciar**: Restablece el contador a 0.
  
  -**Límite máximo**: Al llegar a 16, aparece un mensaje: "¡Máximo alcanzado!".
  
---
### **Archivos Principales**

   - 📄 **index.html**: Estructura principal de la aplicación.
   - ⚛️ **App.jsx**: Componente principal que monta la aplicación.
   - 🔢 **Contador.jsx**: Componente que maneja la lógica del contador y botones.
  - 🎨 **App.scss**: Estilos optimizados utilizando SCSS.
---

### **Capturas de Pantalla**

https://github.com/user-attachments/assets/f646b90a-c94e-4182-a2a1-d45d3d21d7b0

---
### **Mejoras Futuras**

 - 🚀 Permitir personalizar el valor máximo del contador.
 - 📝 Agregar pruebas unitarias con Jest.
 - 🎨 Mejorar el diseño con Bootstrap o Material-UI.
 - 📱 Convertir la aplicación en una PWA (Progressive Web App).
---
### **Autor**
@AndreaILara


Potter E-Commerce 🧙‍♂️

Descripción del Proyecto
Este proyecto es una tienda en línea (e-commerce) desarrollada con React.js, que simula la venta de productos de la temática de Harry Potter. La aplicación permite a los usuarios navegar por un catálogo de productos, agregarlos a un carrito de compras y finalizar la compra, todo mientras interactúa con una base de datos en la nube.

Características Principales

1. Navegación y Vistas Dinámicas
Página Principal: Muestra todos los productos disponibles.

Categorías: Permite filtrar los productos por categorías (ej. Libros, Películas).

Vista de Detalle: Al hacer clic en un producto, se muestra una página dedicada con más información.

2. Gestión del Carrito de Compras
Los usuarios pueden agregar productos al carrito y ver el total y la cantidad seleccionada.

El carrito permite eliminar productos o vaciar la compra completa.

La funcionalidad del carrito se maneja de forma centralizada con el Context API de React, lo que asegura que la información esté disponible en toda la aplicación.

3. Persistencia de Datos
Backend en la nube: Utiliza Firestore (una base de datos de Google Firebase) para almacenar y gestionar los datos de los productos y las órdenes de compra.

Validación de Stock: Antes de confirmar una compra, la aplicación verifica el stock disponible en la base de datos para evitar ventas en exceso.

Generación de Órdenes: Al finalizar la compra, se crea un nuevo documento en Firestore con todos los detalles de la orden, incluyendo la información del comprador, los productos y el total.

4. Tecnologías Utilizadas

Frontend: React.js

Manejo de rutas: React Router DOM

Manejo de estado: React Context API

Backend: Firebase

Base de Datos: Firestore

Estructura de la Carpeta


Una breve descripción de la estructura principal del proyecto:

src/components/: Contiene los componentes reutilizables de la aplicación.

navBar/: Componentes de navegación.

itemListContainer/: Lógica para mostrar listas de productos.

itemDetailContainer/: Lógica para mostrar detalles de un solo producto.

pages/: Contiene los componentes de las diferentes vistas de la app (Carrito, Checkout, etc.).

src/context/: El CartContext que maneja el estado global del carrito.

src/firebaseConfig.js: Archivo de configuración para la conexión con Firebase.

Autor
QUAGLINO FLAVIO
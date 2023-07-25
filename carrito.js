// carrito.js

// Lista para almacenar los productos del carrito
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const cartItemsDiv = document.querySelector(".cart-items");
    const totalSpan = document.getElementById("total");


    cartItemsDiv.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button class="btn" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        cartItemsDiv.appendChild(itemDiv);

        total += producto.precio;
    });

    totalSpan.textContent = total;
}






//_______DOM_____//


// Función para mostrar/ocultar el carrito al hacer clic en el botón
function toggleCart() {
    const cartContainer = document.getElementById('cartContainer');
    if (cartContainer.style.display === 'none') {
      cartContainer.style.display = 'block';
    } else {
      cartContainer.style.display = 'none';
    }
  }
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto, precio) {
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total');
  
    // Crear un nuevo elemento de producto
    const nuevoProducto = document.createElement('div');
    nuevoProducto.classList.add('cart-item');
    nuevoProducto.innerHTML = `
      <span>${producto}</span>
      <span>$${precio}</span>
    `;
  
    // Agregar el nuevo elemento de producto al carrito
    cartItems.appendChild(nuevoProducto);
  
    // Actualizar el total
    const totalActual = parseFloat(totalElement.innerText);
    const nuevoTotal = totalActual + precio;
    totalElement.innerText = nuevoTotal;
  }
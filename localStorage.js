

// Función para guardar el valor del input en el LocalStorage
function saveToLocalStorage() {
  const searchInput = document.getElementById('searchInput');
  const inputValue = searchInput.value.trim(); 

  if (inputValue) {
    localStorage.setItem('searchValue', inputValue);
  } else {
    localStorage.removeItem('searchValue');
  }
}

// Función para obtener el valor del input almacenado en el LocalStorage
function getFromLocalStorage() {
  const savedValue = localStorage.getItem('searchValue');
  return savedValue || ''; 
}

// Función para mostrar el contenido almacenado en el LocalStorage en el input
function showValueFromLocalStorage() {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = getFromLocalStorage();
}

// Evento para guardar el valor en el LocalStorage cuando el usuario escriba en el input
const inputElement = document.getElementById('searchInput');
inputElement.addEventListener('input', () => {
  saveToLocalStorage();
});

// Mostrar el contenido almacenado en el LocalStorage en el input cuando se carga la página
window.addEventListener('load', () => {
  showValueFromLocalStorage();
});
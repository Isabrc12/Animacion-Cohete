var fondo = document.querySelector('.contenedor')
var cohete = document.querySelector('.ch')
var fuegoo = document.querySelector('.fuego')

fondo.addEventListener('click', arriba)

function arriba(){
fondo.classList.add('fondo')
cohete.classList.add('ch2')
fuegoo.classList.add('fg')
fuegoo.classList.remove('ocultar')
}


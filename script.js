function mostrarMensaje(){
    alert("HOLA!!!, Bienvenidos a mi primer pagina web");
}
const form = document.getElementById('contacForm')
form.addEventListener('submit', function(event) {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('EMAIL').value;
    const razon = document.getElementById('razon').value;

    if (nombre === '' || email === '' || razon === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});

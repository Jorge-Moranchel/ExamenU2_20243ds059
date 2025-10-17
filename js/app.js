const form = document.getElementById('formulario')
const mensaje = document.getElementById('mensaje')

window.addEventListener('load', () => {
    const nombreGuardado = localStorage.getItem('nombre')
    if (nombreGuardado) mensaje.textContent = `Bienvenido nuevamente, ${nombreGuardado}`
})

form.addEventListener('submit', e => {
    e.preventDefault()
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const edad = document.getElementById('edad')
    const pais = document.getElementById('pais')
    const campos = [nombre, email, edad, pais]
    let vacios = false
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            campo.classList.add('error')
            vacios = true
        } else campo.classList.remove('error')
    })
    if (vacios) {
        mensaje.textContent = 'Por favor, completa todos los campos.'
        mensaje.style.color = 'red'
        return
    }
    localStorage.setItem('nombre', nombre.value)
    mensaje.textContent = 'Formulario enviado con éxito.'
    mensaje.style.color = 'green'
    form.reset()
})

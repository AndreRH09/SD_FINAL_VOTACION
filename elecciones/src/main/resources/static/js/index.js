document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = [
        'url("img/bg/BG1.jpg")',
        'url("img/bg/BG2.jpg")',
        'url("img/bg/BG3.jpg")',
        'url("img/bg/BG4.jpg")'
    ];
    let currentBackgroundIndex = 0;

    // Establecer el primer fondo al cargar la página
    document.querySelector('.background').style.backgroundImage = backgrounds[currentBackgroundIndex];

    const changeBackground = () => {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        document.querySelector('.background').style.backgroundImage = backgrounds[currentBackgroundIndex];
    };

    setInterval(changeBackground, 5000); // Cambia de fondo cada 5 segundos

    const voteButton = document.getElementById('vote-button');
    const welcomeContainer = document.getElementById('welcome-container');
    
    voteButton.addEventListener('click', () => {
        // Cambiar el contenido del contenedor de bienvenida al formulario de inicio de sesión
        welcomeContainer.innerHTML = `
            <div class="login-container">
                <h1>Inicio de Sesión</h1>
                <form id="login-form">
                    <label for="username">Nombre de Usuario</label>
                    <input type="text" id="username" name="username" required>
                    
                    <label for="dni">DNI</label>
                    <input type="text" id="dni" name="dni" required>
                    
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        `;

        // Mostrar el formulario de inicio de sesión
        document.querySelector('.login-container').style.display = 'flex';
    });

    // Manejar el envío del formulario
    document.addEventListener('submit', (event) => {
        if (event.target.id === 'login-form') {
            event.preventDefault(); // Evitar el envío normal del formulario

            // Redirigir a la página principal (puedes ajustar la URL según sea necesario)
            window.location.href = 'main.html';
        }
    });
});

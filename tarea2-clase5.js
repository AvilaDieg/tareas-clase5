document.querySelector("#calcular-datos-usuario").onclick = function () {
    //capturar los valores de los inputs
    const nombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);
    //crear una cadena con los datos
    const resultado = `Su nombre completo es ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}, y su edad es ${edadUsuario}`;
    //mostrar el resultado en el <p></p>
    document.querySelector("#resultado").textContent = resultado;
    //cambiar el contenido del <h1></h1>
    document.querySelector("#titulo-bienvenida").textContent = `Bienvenido, ${nombreUsuario}!`;

    return false;
}

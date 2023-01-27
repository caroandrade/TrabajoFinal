
document.getElementById("informacion").style.display="none";

function mostrar() {
    let x = document.getElementById('informacion');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function volver(){
    window.location = 'index.html';
}

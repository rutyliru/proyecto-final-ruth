let menuVisible = false;

function mostrarOcultarMenu(){
	if(menuVisible){
		document.getElementById("nav").classList ="";
		menuVisible = false;
	}else{
		document.getElementById("nav").classList ="responsive";
		menuVisible = true;
	}
}
function seleccionar(){
	document.getElementById("nav").classList = "";
	menuVisible = true;
}

function mostrarAlerta() {
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
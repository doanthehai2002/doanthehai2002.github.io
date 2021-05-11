var nut = document.getElementById("timkiem-icon");
nut.onclick = function(){
	document.getElementById("timkiem").style.opacity = 1;
	document.getElementById("otimkiem").focus();
	document.getElementById("otimkiem").classList.add("active");
}
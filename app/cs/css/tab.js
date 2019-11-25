// JavaScript Document
function setContentTab(name, curr, n){
	for( i = 1; i <= n; i++){
		var menu = document.getElementById(name+i);
		var cont = document.getElementById("cont_" + name + "_" + i);
		menu.className = i == curr ? " on " : " ";
		if(i == curr){
			cont.style.display = "block";
			}
			else{
			cont.style.display = "none";
			}
		}
	}
var close = document.getElementsByClassName("close");
var i;
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	if(ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked');
	}
});
function newElement(){
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === ''){
		alert("Please enter the task!");
  	} 
	else{
		document.getElementById("listed").appendChild(li);
  	}
  	document.getElementById("myInput").value = "";
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	for (i = 0; i < close.length; i++){
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}
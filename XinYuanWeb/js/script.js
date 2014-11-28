/**
 * dennis(wynet321@163.com)
 */

function sliderShow() {
	if (!document.getElementById && !document.getElementsByTagName)
		return false;
	var slide = document.getElementById("slider");
	var slideli = slide.getElementsByTagName("li");
	var picwidth=2000;
	for (var i = 0; i < slideli.length; i++) {
		slideli[i].style.left += i * picwidth + "px";
	}
	var prev = document.getElementById("prev"), next = document
			.getElementById("next");
	var elem = document.getElementById("slider");
	if (!elem.style.marginLeft) {
		elem.style.marginLeft = "0";
	}
	var xpos = parseInt(elem.style.marginLeft);
	next.onclick = function() {
		if (xpos > 0 || xpos <= -(picwidth*2))
			return false;
		moveElement("slider", xpos -= picwidth, 20);
	}
	prev.onclick = function() {
		if (xpos >= 0 || xpos < -(picwidth*2))
			return false;
		moveElement("slider", xpos += picwidth, 20);
	}
}
function moveElement(elementID, gap, interval) {
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	var xpos = parseInt(elem.style.marginLeft);
	if (xpos == gap)
		return true;
	if (xpos > gap) {
		var glist = Math.floor((gap - xpos) / 10);
		xpos = xpos + glist;
	}
	if (xpos < gap) {
		var glist = Math.ceil((gap - xpos) / 10);
		xpos = xpos + glist;
	}
	elem.style.marginLeft = xpos + "px";
	var move = "moveElement('" + elementID + "'," + gap + "," + interval + ")";
	elem.movement = setTimeout(move, interval);
}

function menuShow(id) {
	var elem = document.getElementById(id);
	elem.className = 'fadein';
	
}
function menuHide(id) {
	var elem = document.getElementById(id);
	elem.className = '';
}
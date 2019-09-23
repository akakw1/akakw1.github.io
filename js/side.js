function Side() {
	var obj = document.getElementById('side');
	this.init = function() {
		obj.innerHTML = [
			"<span id='mainlink'><a href='windowsgui/index.html'>Windows GDI</a></span>"
		].join('\n');
	}
}
var side = new Side;
side.init();

var tools = {
	getStyle : function (obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	showCenter : function(obj){
		obj.style.display = "block";
		var center =  () => {
			var _top = (this.getBody().height - obj.offsetHeight) / 2;
			var _left = (this.getBody().width - obj.offsetWidth) / 2;
			this.setStyle(obj,{
				"position" : "absolute",
				"left" : _left + "px",
				"top" : _top + "px"
			})
		}
		center();
		window.onresize = center;
	},
	setStyle : function(obj,objAttr){
		for(var key in objAttr){
			obj.style[key] = objAttr[key];
		}
	},
	move : function(obj,attr,end){
		clearInterval(obj.timer);
		var start = parseInt(this.getStyle(obj, attr));
		obj.timer = setInterval(function () {
			var distance = end - start;
			var speed = distance > 0 ? Math.ceil(distance / 10) : Math.floor(distance / 10);
			start += speed;
			obj.style[attr] = start + "px";
			if(start === end) {
				clearInterval(obj.timer);
			}
		}, 20);
	}
}
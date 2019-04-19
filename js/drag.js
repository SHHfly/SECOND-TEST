function Drag(obj,title){
	this.obj = obj;
	this.title = title ? this.obj.querySelector(title) : obj;
}
Drag.prototype = Object.assign(Drag.prototype,{
	init : function(){
		this.title.onmousedown = (e)=>{
			var disx = e.offsetX,
				disy = e.offsetY;
				//console.log(this.obj);
			this.title.onmousemove = (e)=>{
				var _top = e.clientY - disy,
					_left = e.clientX - disx;
				this.move(_top,_left);
			}
			document.onmouseup = ()=>{
				this.title.onmousemove = null;
			}
//			this.title.onmouseleave = ()=>{
//				this.title.onmousemove = null;
//			}
			return false;
			
		}
	},
	move : function(top,left){
		
		if(top<0) top = 0;
		if(left<0) left = 0;
		if(top>tools.getBody().height - this.obj.offsetHeight) top = tools.getBody().height - this.obj.offsetHeight;
		if(left>tools.getBody().width - this.obj.offsetWidth) left = tools.getBody().width - this.obj.offsetWidth;
		
		tools.setStyle(this.obj,{
			
			"top" : top + "px",
			"left" : left + "px"
		})
		//console.log(top,left);	
	}
	
})
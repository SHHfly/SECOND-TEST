class Login{
	constructor(btn){
		this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.content = document.querySelector("#content");
		this.chexiao = document.querySelector(".chexiao");
		this.aLi = Array.from(this.content.querySelectorAll("li"));
		this.bindEvents();
	}
	bindEvents(){
		this.btn.onclick = this.inner.bind(this);
		this.container.onclick = this.click.bind(this);
		//this.content.oncontextmenu = this.stop.bind(this);
		//this.content.onclick = this.conClick.bind(this);
		for(let i=0;i<this.aLi.length;i++){
			this.aLi[i].oncontextmenu=this.oncontextmenu.bind(this);
			this.chexiao.onclick = this.remove.bind(this,i);
		}
	}
	inner(){
		this.container.innerHTML = '<h4>用户登录</h4>'+
		'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
		'<p><label>用户名：<input id="username" type="text"></label></p>'+
		'<p><label>内　容：<br/><textarea id = "text"></textarea></label></p>'+
		'<p><button id="loginBtn" class="logonBtn" type="button" style="float : right;margin-right :50px">发布</button></p>';
		tools.showCenter(this.container);
		this.modal = document.createElement("div");
		this.modal.className = "modal";
		document.body.appendChild(this.modal);
		new Drag(this.container,"h4").init();
	}
	click(e){
		switch(e.target.className){
			case "logonBtn" :
					this.name = this.container.querySelector("#username").value;
					this.text = this.container.querySelector("#text").value;
					this.render(this.name,this.text);
			case "close_btn" :
					this.container.style.display = "none";
					this.modal.remove();
					break;
		}
	}
	render(name,text){
		let date = new Date();
		let str = date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
		let li = document.createElement("li");
		//console.log(str);
		li.innerHTML = "用户:" + name + "</br>内容:" + text + "</br>"+str;
		this.content.appendChild(li);
		this.content.style.display = "block";
		this.aLi = Array.from(this.content.querySelectorAll("li"));
		this.bindEvents();	
	}
	oncontextmenu(e){
		//console.log(e.target.nodeName);
		tools.setStyle(this.chexiao,{
			"left" : e.clientX+ "px",
			"top" : e.clientY + "px",
			"display" : "block"
		})
		return false;
	}
	remove(i){
		console.log(i);
		this.aLi[i].remove();
		tools.setStyle(this.chexiao,{"display" : "none"});
		this.aLi = Array.from(this.content.querySelectorAll("li"));
		this.bindEvents();
	}
	
//	conClick(e){
//		if(e.target.className!=="chexiao"){
//			this.chexiao.style.display = "none";
//		}else{
//			console.log(e.target);
//		}
//	}
		
//	oncontextmenu(e){
//		//console.log(e.target.nodeName);
//		this.chexiao.onclick = ()=>{
//			aLi[i].remove();
//		}
//		
//	
//		if(e.target.nodeName === "LI"){
//			tools.setStyle(this.chexiao,{
//				"left" : e.clientX+ "px",
//				"top" : e.clientY + "px",
//				"display" : "block"
//			})
//			
//		}
//		return false;
//	
//	}
}

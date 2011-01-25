function mCanvas(id,width,height,left,top){
	
	this.id=id;
	this.width=width;
	this.height=height;
	this.left=left;
	this.top=top;
	this.mouseX;
	this.mouseY;
	this.canvas;
	this.context;
	this.selectObj=null;
	this.dragMode=false;
	this.childs=new Array();
	
	/**
	 * canvas id si tanımlanmış ise canvası yapılandır.
	 * 
	 * */  
	if (arguments[0]) this.initialize(); 
	
}

var _mcp=mCanvas.prototype;

_mcp.initialize=function(){
	
	mcc=this;
	
	mcc.canvas = document.getElementById(mcc.id);
	
	if (mcc.canvas.getContext) {
		mcc.context = mcc.canvas.getContext('2d');
		mcc.canvas.setAttribute('width',mcc.width);
		mcc.canvas.setAttribute('height',mcc.height);
		mcc.canvas.setAttribute('style','margin-left:'+mcc.left
								+'px; margin-top:'+mcc.top+'px;');
								
		// tüm objelerin gölge veriliyor ve köşeleri düzeltiliyor 	
		mcc.context.shadowOffsetX = 1;
        mcc.context.shadowOffsetY = 1;					
		mcc.context.shadowBlur = 2;
		mcc.context.shadowColor = "#222";
		mcc.context.lineJoin='round';
		
		// tuvalin olayları yönlendiriliyor.									
		var cEvents=new canvasEvents();	
								
		mcc.canvas.onmousemove=cEvents.mouseMove;
		mcc.canvas.onmousedown=cEvents.mouseDown;
		mcc.canvas.onmouseup=cEvents.mouseUp;
		mcc.canvas.ondblclick=cEvents.dblClick;
		mcc.canvas.onresize=cEvents.onResize;
    }
	else 
		alert("tarayacınız tuval nesnesini desteklemiyor!!");
}

_mcp.set=function(property){
	
	propertyObj=eval(property);
	for(var i in propertyObj){
		this[i]=propertyObj[i];
	}
	this.initialize(); 
}

_mcp.begin=function (){
	mcc.context.beginPath();
}

_mcp.close=function (){
	mcc.context.closePath();
}

_mcp.clear=function (){
	mcc.context.clearRect(0,0,mcc.canvas.width,mcc.canvas.height);
	mcc.context.beginPath();
}

_mcp.moveTo=function (x,y){
	
}

_mcp.locate=function (x,y){
	
}

_mcp.resize=function (){ 
	
}

_mcp.rotate=function (){
	
}

_mcp.draw=function (){
	
	for(var i in mcc.childs){
		this.begin();
		mcc.childs[i].drawRelation();
		this.close();
	}

	for(var i in mcc.childs){
		this.begin();
		mcc.childs[i].draw();
		this.close();
	}
mcc.context.fillText(mcc.mouseX+'-'+mcc.mouseY,30,30);

}

_mcp.clone=function (){
	
}

_mcp.append=function (obj){
	mcc.childs.push(obj);
}

_mcp.save=function(){
	mcc.context.save();
}

	
	


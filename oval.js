function oval(centerX,centerY,width,height){

	this.centerX=centerX;
	this.centerY=centerY;
	this.width=width;
	this.height=height;
	this.relation=new Array();
	this.initialize(); 
}

oval.prototype=new shape();

var _cop=oval.prototype;

_cop.initialize=function(){
	this.relationX=this.centerX;
	this.relationY=this.centerY;
	this.type='oval';
	
}

_cop.draw=function(){
			
	mcc.context.beginPath();
	
	mcc.context.moveTo(this.centerX,this.centerY - this.height/2);
	
	controlRectWidth = this.width; 
	
	// draw left side of oval
	mcc.context.bezierCurveTo(this.centerX-controlRectWidth/2,
		this.centerY-this.height/2,
		this.centerX-controlRectWidth/2,this.centerY+this.height/2,
		this.centerX,this.centerY+this.height/2);
 
	// draw right side of oval
	mcc.context.bezierCurveTo(this.centerX+controlRectWidth/2,
		this.centerY+this.height/2,
		this.centerX+controlRectWidth/2,this.centerY-this.height/2,
		this.centerX,this.centerY-this.height/2);
		
	mcc.context.lineWidth=this.border;
	mcc.context.strokeStyle=this.borderColor; 
	mcc.context.stroke();	
	
	mcc.context.fillStyle=this.backColor;
	mcc.context.fill();
	
	mcc.context.closePath();
	if (this.text!=null) this.writeText();
}

_cop.writeText=function(){

	var x = this.centerX;
	var y = this.centerY;
	var font=this.textSize+'pt '+this.textStyle;
	mcc.context.font=font;
	mcc.context.textAlign=this.textAlign;
	mcc.context.fillStyle=this.textColor;
	
	var size = mcc.context.measureText(this.text);

	if (size.width>this.width*72/100) {	

	resultText=this.parsingText(this.text,this.width*72/100,x,y);
	y-=resultText.length/2*(this.textSize+4);
		for (var i in resultText){
			y+=this.textSize+2;
			mcc.context.fillText(resultText[i], x, y);
			
		}
	}else mcc.context.fillText(this.text, x, y+5);
}



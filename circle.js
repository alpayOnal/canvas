function circle(centerX,centerY,radius){
	
	this.centerX=centerX;
	this.centerY=centerY;
	this.radius=radius;
	this.relation=new Array();
	this.initialize(); 
}

circle.prototype=new shape();

var _ccp=circle.prototype;

_ccp.initialize=function(){
	this.relationX=this.centerX;
	this.relationY=this.centerY;
	this.type='circle';
}

_ccp.draw=function(){
	
	mcc.context.beginPath();
	
	mcc.context.arc(this.centerX,this.centerY,this.radius,0, 2*Math.PI,false);
	
	mcc.context.lineWidth=this.border;
	mcc.context.strokeStyle=this.borderColor;
	mcc.context.stroke();
			
	mcc.context.fillStyle=this.backColor;
	mcc.context.fill();	

	mcc.context.closePath();
	if (this.text!=null) this.writeText();
	
}

_ccp.writeText=function(){

	var x = this.centerX;
	var y = this.centerY;
	
	var font=this.textSize+'pt '+this.textStyle;
	mcc.context.font=font;
	mcc.context.textAlign=this.textAlign;
	mcc.context.fillStyle=this.textColor;
	
	var size = mcc.context.measureText(this.text);

	if (size.width>this.radius*2) {	

	resultText=this.parsingText(this.text,this.radius*2,x,y);
	y-=resultText.length/2*(this.textSize+1);
		for (var i in resultText){
			y+=this.textSize+2;
			mcc.context.fillText(resultText[i], x, y);
			
		}
	}else mcc.context.fillText(this.text, x, y+3);
}

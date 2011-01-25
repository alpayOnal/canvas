function square(left,top,width,height){
	
	this.left=left;
	this.top=top;
	this.width=width;
	this.height=height;
	this.lineCap='round';
	this.relation=new Array();
	this.initialize(); 
	
}

square.prototype=new shape();

var _csp=square.prototype;

_csp.initialize=function(){
	this.relationX=this.left+this.width/2;
	this.relationY=this.top+this.height/2;
	this.type='square';

}

_csp.draw=function(){
		
	mcc.context.beginPath();
	
	mcc.context.rect(this.left,this.top,this.width,this.height);

	mcc.context.lineWidth=this.border;
	mcc.context.strokeStyle=this.borderColor;
	mcc.context.lineCap=this.lineCap;
	mcc.context.stroke();
	
	mcc.context.fillStyle=this.backColor;
	mcc.context.fill();	
	
	mcc.context.closePath();
	if (this.text!=null) this.writeText();
	
}

_csp.writeText=function(){
	mcc.begin();
	var x = this.left+this.width/2;
	var y = this.top+this.height/2;
	var font=this.textSize+'pt '+this.textStyle;
	mcc.context.font=font;
	mcc.context.textAlign=this.textAlign;
	mcc.context.fillStyle=this.textColor;
	
	var size = mcc.context.measureText(this.text);
	
	if (size.width>this.width) {
		
	resultText=this.parsingText(this.text,this.width,x,y);
	y-=resultText.length/2*(this.textSize+2);
		for (var i in resultText){
			y+=this.textSize+2;
			mcc.context.fillText(resultText[i], x, y);
			
		}
		
	}else mcc.context.fillText(this.text, x, y);
	mcc.close();
}

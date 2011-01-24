function triangle(beginX,beginY,x1,y1,x2,y2,x3,y3){
	
	this.beginX=beginX;
	this.beginY=beginY;
	this.x1=x1;
	this.y1=y1;
	this.x2=x2;
	this.y2=y2;
	this.x3=x3;
	this.y3=y3;
	this.lineCap='round';
	this.relation=new Array();
	this.initialize(); 
}

triangle.prototype=new shape();

var _ctp=triangle.prototype;

_ctp.initialize=function(){
	this.relationX=(this.x1+this.x2+this.x3)/3;
	this.relationY=(this.y1+this.y2+this.y3)/3;
	this.type='triangle';

}

_ctp.draw=function(){
		
	mcc.context.beginPath();
	
	mcc.context.moveTo(this.beginX,this.beginY); 
	mcc.context.lineTo(this.x1,this.y1);
	mcc.context.lineTo(this.x2,this.y2);
	mcc.context.lineTo(this.x3,this.y3);
	
	mcc.context.lineWidth=this.border;
	mcc.context.strokeStyle=this.borderColor; 
	mcc.context.stroke();	
	
	mcc.context.fillStyle=this.backColor;
	mcc.context.fill();	
	
	mcc.context.lineWidth=this.lineWidth;
	mcc.context.strokeStyle=this.strokeStyle; 
	mcc.context.lineCap = this.lineCap;
	mcc.context.stroke();
	mcc.context.fillStyle = this.fillStyle;
	mcc.context.fill();
	
	mcc.context.closePath();
	
	if (this.text!=null) this.writeText();
}

_ctp.writeText=function(){

	var x = (this.x1+this.x2+this.x3)/3;
	var y = (this.y1+this.y2+this.y3)/3;
	var font=this.textSize+'pt '+this.textStyle;
	
	mcc.context.font=font;
	mcc.context.textAlign=this.textAlign;
	mcc.context.fillStyle=this.textColor;
	
	var size = mcc.context.measureText(this.text);

	if (size.width>Math.abs(this.x1-this.x2)*2/3) {	

	resultText=this.parsingText(this.text,Math.abs(this.x1-this.x2)*2/3,x,y);
	y-=resultText.length/3*(this.textSize+5);
		for (var i in resultText){
			y+=this.textSize+2;
			mcc.context.fillText(resultText[i], x-3, y);
			
		}
	}else mcc.context.fillText(this.text, x, y+5);
}

function line(beginX,beginY,endX,endY){
	
	this.beginX=beginX;
	this.beginY=beginY;
	this.endX=endX;
	this.endY=endY;
}

line.prototype=new shape();

var _clp=line.prototype;

_clp.draw=function(){
	
	mcc.context.beginPath();
	
	mcc.context.moveTo(this.beginX,this.beginY);
	mcc.context.lineTo(this.endX,this.endY);
	
	mcc.context.lineWidth=this.lineWidth;
	mcc.context.strokeStyle=this.strokeStyle; 
	mcc.context.lineCap=this.cap; // square round butt
	mcc.context.stroke();
	
	mcc.context.closePath();
}




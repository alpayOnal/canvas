function shape(){

	this.border=1;
	this.borderColor='black';
	this.backColor='white';
	this.text=null;
	this.textSize=12;
	this.textStyle='Arial';
	this.textAlign='center';
	this.textColor='black';
	this.relationX;
	this.relationY;
	
	this.type;	

}

var _scp=shape.prototype;

_scp.draw=function(){
	
}

_scp.append=function(obj){
	
	this.relation.push(obj);
}

_scp.set=function(property){
	
	propertyObj=eval(property);
	for(var i in propertyObj){
		this[i]=propertyObj[i];
	}
	
}

_scp.drawRelation=function(){
	
	for(var i in this.relation) {
		
		var subObj=this.relation[i];
		
		if (subObj.type=='square') {
					
			var subObjC=new Array(subObj.left+subObj.width/2,subObj.top+subObj.height/2);		
		}
		
		if (subObj.type=='circle') {
							
			var subObjC=new Array(subObj.centerX,subObj.centerY);	
		}	
		
		if (subObj.type=='oval') {
							
			var subObjC=new Array(subObj.centerX,subObj.centerY);			
		}
		
		if (subObj.type=='triangle') {
					
			var subObjC=new Array((subObj.x1+subObj.x2+subObj.x3)/3
						,(subObj.y1+subObj.y2+subObj.y3)/3);
												
		}
		
		mcc.begin();
	
		mcc.context.moveTo(this.relationX,this.relationY); 
		mcc.context.lineTo(subObjC[0],subObjC[1]);
		
		mcc.context.lineWidth=5;	
		mcc.context.strokeStyle=this.borderColor;
		mcc.context.lineCap='round';
		mcc.context.stroke();
		
		mcc.close();
		
	}		
}
	

_scp.writeText=function(){

}

_scp.parsingText=function (text,width){
	
	var splitText=text.trim().split(' ');
	var nextText='',c=false,s=0;
	var textJoin=new Array();
		for(var i=0;i<=splitText.length;i++) {
			if (i!=splitText.length) nextText+=' '+splitText[i];
			if (mcc.context.measureText(nextText).width<=width){
				textJoin[s]=nextText;c=true;
			}
			else {
				if (!c) textJoin[s]=splitText[i-1];
				nextText=splitText[i];
				c=false;s++;
			}	
		}
		return textJoin;
}

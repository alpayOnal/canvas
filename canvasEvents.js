
function canvasEvents(){
	
}

canvasEvents.prototype=new mCanvas();

var _evp=canvasEvents.prototype;

_evp.mouseDown=function (e){
	
	mcc.dragMode=true;	
}

_evp.mouseUp=function (e){
	
	mcc.dragMode=false;
	mcc.selectObj=null;

}

_evp.mouseMove=function (e){
	
	mcc.mouseX = e.clientX - mcc.canvas.offsetLeft;
	mcc.mouseY = e.clientY - mcc.canvas.offsetTop;

	
	if (mcc.selectObj==null){
		
		for(var i in mcc.childs){
		
			if (mcc.childs[i].type=='circle'){
			
			if(mcc.mouseX>=(mcc.childs[i].centerX-mcc.childs[i].radius) 
			&& mcc.mouseX<=(mcc.childs[i].centerX+mcc.childs[i].radius)
			&& mcc.mouseY>=(mcc.childs[i].centerY-mcc.childs[i].radius)
			&& mcc.mouseY<=(mcc.childs[i].centerY+mcc.childs[i].radius)
			){	
				if (mcc.dragMode) mcc.selectObj=mcc.childs[i];
			 }
		}
		
			if (mcc.childs[i].type=='oval'){
			
			if(mcc.mouseX>=(mcc.childs[i].centerX-(mcc.childs[i].width*0.8)/2) 
			&& mcc.mouseX<=(mcc.childs[i].centerX+(mcc.childs[i].width*0.8)/2)
			&& mcc.mouseY>=(mcc.childs[i].centerY-mcc.childs[i].border-
			mcc.childs[i].height/2)
			&& mcc.mouseY<=(mcc.childs[i].centerY+mcc.childs[i].border+
			mcc.childs[i].height/2)){ 	
				
				if (mcc.dragMode) mcc.selectObj=mcc.childs[i];
			}		
		}
	
			if (mcc.childs[i].type=='triangle'){
			
			var xt;
			var yt;
				
			xt=(mcc.childs[i].x1+mcc.childs[i].x2+mcc.childs[i].x3)/3+mcc.childs[i].border;
			yt=(mcc.childs[i].y1+mcc.childs[i].y2+mcc.childs[i].y3)/3+mcc.childs[i].border;
						
			if (xt>0 && yt>0 ) {
			var fAB=(eval((mcc.mouseY-mcc.childs[i].y1)*
				(mcc.childs[i].x2-mcc.childs[i].x1) -
				(mcc.mouseX-mcc.childs[i].x1)*
				(mcc.childs[i].y2-mcc.childs[i].y1)));
			
			var fBC=(eval((mcc.mouseY-mcc.childs[i].y2)*
				(mcc.childs[i].x3-mcc.childs[i].x2) -
				(mcc.mouseX-mcc.childs[i].x2)*
				(mcc.childs[i].y3-mcc.childs[i].y2)));
			
			var fCA=(eval((mcc.mouseY-mcc.childs[i].y3)*
				(mcc.childs[i].x1-mcc.childs[i].x3) -
				(mcc.mouseX-mcc.childs[i].x3)*
				(mcc.childs[i].y1-mcc.childs[i].y3)));
				
			var c1=fAB*fBC;
			var c2=fBC*fCA;
			
			if (c1>0 && c2>0)
				if (mcc.dragMode) mcc.selectObj=mcc.childs[i];		
			}							
		} 
	
			if (mcc.childs[i].type=='square'){
				
			if(mcc.mouseX >= mcc.childs[i].left-mcc.childs[i].border 
			&& mcc.mouseX <= (mcc.childs[i].left+mcc.childs[i].border+ 
			mcc.childs[i].width) 
			&& mcc.mouseY >= mcc.childs[i].top-mcc.childs[i].border 
			&& mcc.mouseY <= (mcc.childs[i].top+mcc.childs[i].border+
			mcc.childs[i].height)) 	
				{	
					if (mcc.dragMode) mcc.selectObj=mcc.childs[i];
				}
			}
			
			if (mcc.childs[i].type=='line'){}
		}	 	
	} else {
		
		if (mcc.selectObj.type=='circle'){
			
			mcc.selectObj.centerX=mcc.mouseX;
			mcc.selectObj.centerY=mcc.mouseY;
			mcc.selectObj.initialize();
		}
		
		if (mcc.selectObj.type=='oval'){	
			
			mcc.selectObj.centerX=mcc.mouseX;
			mcc.selectObj.centerY=mcc.mouseY;
			mcc.selectObj.initialize();
		}
	
		if (mcc.selectObj.type=='triangle'){
			
			xt=(mcc.selectObj.x1+mcc.selectObj.x2+mcc.selectObj.x3)/3;
			yt=(mcc.selectObj.y1+mcc.selectObj.y2+mcc.selectObj.y3)/3;
			
			var xShift=mcc.mouseX-xt;
			var yShift=mcc.mouseY-yt;
			mcc.selectObj.beginX+=xShift;
			mcc.selectObj.beginY+=yShift;
			mcc.selectObj.x1+=xShift;
			mcc.selectObj.x2+=xShift;
			mcc.selectObj.x3+=xShift;
			mcc.selectObj.y1+=yShift;
			mcc.selectObj.y2+=yShift;
			mcc.selectObj.y3+=yShift;
			mcc.selectObj.initialize();
		}
	
		if (mcc.selectObj.type=='square'){
			
			mcc.selectObj.left=mcc.mouseX-mcc.selectObj.width/2;
			mcc.selectObj.top=mcc.mouseY-mcc.selectObj.height/2;
			mcc.selectObj.initialize();
		}

	}
	 	
	mcc.clear();
	mcc.draw();		

}

_evp.dblClick=function (){
	
}

_evp.dragging=function (){
	
}

_evp.onResize=function (){
	
}

_evp.onDraw=function (){
	
}


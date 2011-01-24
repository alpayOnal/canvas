
function incJs(){
		
	jsFile=new Array('mCanvas.js','cEvents.js','square.js','circle.js',
					'oval.js','triangle.js','line.js');
	filePath='';
	
	addScript(jsFile,filePath);
}
	
function addScript(url,path) {
	 
	for (var i=0;i<url.length;i++)
        document.write('<script type="text/javascript" src="'
        +filePath+url[i]+'"></script>');           
}

/*

function addScript(url,path) {
	 
	for (var i=0;i<url.length;i++){
    
        var xJs = document.createElement("script");
        xJs.type = "text/javascript";
        xJs.src=path+url[i];
        
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(xJs);        
	}
}
*/


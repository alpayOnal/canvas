
function incJs(){
		
	jsFile=new Array('canvas.js','canvasEvents.js','shape.js','square.js','circle.js',
					'oval.js','triangle.js','line.js');
	filePath='';
	
	addScript(jsFile,filePath);
}
	
function addScript(url,path) {
	 
	for (var i=0;i<url.length;i++)
        document.write('<script type="text/javascript" src="'
        +filePath+url[i]+'"></script>');           
}

incJs();

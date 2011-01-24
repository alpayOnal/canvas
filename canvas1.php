
<html>
<head>
	<title>canvas</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	</head>
<body>

<canvas id="canvas" width="300px" height="400px"> </canvas>
<form method="post">
<input name="x" type="text" >
<input name="y" type="text" >
<input type="submit" name="button">
</form>
</body>
</html>

<?php
$beginX=150;
$beginY=160;
$x1=250;$y1=300;
$x2=50;$y2=250;
$x3=150;$y3=160;
$s='<script>';
$s.='var canvas = document.getElementById("canvas");';
$s.='var c = canvas.getContext("2d");';	
$s.='c.beginPath();';
$s.='c.moveTo('.$beginX.','.$beginY.');'; 
$s.='c.lineTo('.$x1.','.$y1.');';
$s.='c.lineTo('.$x2.','.$y2.');';
$s.='c.lineTo('.$x3.','.$y3.');';
$s.='c.lineWidth=10;';
$s.='c.strokeStyle="#ff0000";';
$s.='c.lineCap="round";';
$s.='c.stroke();';
$s.='</script>';
echo $s;

class point{
	public $x;
	public $y;
}


function MINX($a,$b){
	if ($a>$b) return $b;
	else return $a;
}
	
function MAXX($a,$b){
	
	if ($a>$b) return $a;
	else return $b;
}
	
function InsidePolygon($k)
{
  
 
  $polygon=array(array('150','160'),array('50','250'),array('250','300'));
  
 	

// Compute vectors        
v0 = C - A
v1 = B - A
v2 = P - A

// Compute dot products
dot00 = dot(v0, v0)
dot01 = dot(v0, v1)
dot02 = dot(v0, v2)
dot11 = dot(v1, v1)
dot12 = dot(v1, v2)

// Compute barycentric coordinates
invDenom = 1 / (dot00 * dot11 - dot01 * dot01)
u = (dot11 * dot02 - dot01 * dot12) * invDenom
v = (dot00 * dot12 - dot01 * dot02) * invDenom

// Check if point is in triangle
return (u > 0) && (v > 0) && (u + v < 1)

	
}

if (isset($_POST['button']))
{	
$k=new point();
$k->x=$_POST['x'];
$k->y=$_POST['y'];
InsidePolygon($k);
$s='<script>';
$s.='var canvas = document.getElementById("canvas");';
$s.='var c = canvas.getContext("2d");';	
$s.='c.beginPath();';
$s.='c.moveTo('.$_POST['x'].','.$_POST['y'].');'; 
$s.='c.lineTo('.($_POST['x']+1).','.($_POST['y']+1).');'; 
$s.='c.lineWidth=2;';
$s.='c.strokeStyle="#000";';
$s.='c.lineCap="round";';
$s.='c.stroke();';
$s.='</script>';
echo $s;
}
?>

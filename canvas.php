
<html>
<head>
	<title>canvas</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	
	</head>
<body>

<canvas id="canvas" width="300px" height="400px"> </canvas>
<?php
$beginX=150;
$beginY=150;
$x1=250;$y1=250;
$x2=50;$y2=250;
$x3=150;$y3=150;
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
/*
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
  $counter = 0;
  $i;
  $xinters;
  $p1=new point();
  $p2=new point();
  $p=new point();
  $p=$k;
  $N=3;
 
  $polygon=array(array('150','160'),array('50','250'),array('250','300'));
  
  $p1->x=$polygon[0][0];
  $p1->y=$polygon[0][1];
   
   for ($i=1;$i<$N;$i++) {
	echo '<hr>LOOP:'.$i.'<br>';
	
	$p2=new point();
    $p2->x = $polygon[$i][0];
    $p2->y = $polygon[$i][1];
	print_r($p1);
	print_r($p2);
	print_r($p);
   echo '<br>';
   
   echo 's1-> '.$p->y.'>'.MINX($p1->y,$p2->y).'<br>';
    if ($p->y > MINX($p1->y,$p2->y)) {
		
	echo 's2-> '.$p->y.'<='.MAXX($p1->y,$p2->y).'<br>';
      if ($p->y <= MAXX($p1->y,$p2->y)) {
		
	  echo 's3-> '.$p->x.'<='.MAXX($p1->x,$p2->x).'<br>';
        if ($p->x <= MAXX($p1->x,$p2->x)) {
			
          if ($p1->y != $p2->y) {
			 echo 's4-> '.$p1->y.'!='.$p2->y.'<br>';
            $xinters = ($p->y-$p1->y)*($p2->x-$p1->x)/($p2->y-$p1->y)+$p1->x;
             echo 's5-> xinters ->'.$xinters.'<br>';
             echo 's6-> '.$p1->x.'=='.$p2->x.' || '.$p->x.'<='.$xinters.'<br>';
            if ($p1->x == $p2->x || $p->x >= $xinters){
              $counter++;
              
			}
          }
        }
      }
    }
    unset($p1);
    $p1 = $p2;
    unset($p2);
  }
	echo $counter;
  if ($counter % 2 == 0)
    echo 'dışında';
  else
    echo 'içinde';
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
}*/
?>

<script language="JavaScript">
var x1=150,x2=50,x3=250,y1=150,y2=250,y3=250;
function calc() {

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

c.beginPath();
c.moveTo(document.form1.x.value,document.form1.y.value);
c.lineTo(parseInt(document.form1.x.value)+1,parseInt(document.form1.y.value)+1);
c.lineWidth=2;
c.strokeStyle="#000";
c.lineCap="round";
c.stroke();

	if (fAB()*fBC()>0 && fBC()*fCA()>0) alert("Inside");
	else alert("Not Inside");
	}
function fAB() {
	return (eval((parseInt(document.form1.y.value)-y1)*
		(x2-x1) -
		(document.form1.x.value-x1)*
		(y2-y1)))
	}
function fBC() {
	return (eval((parseInt(document.form1.y.value)-y2)*
		(x3-x2) -
		(document.form1.x.value-x2)*
		(y3-y2)))
	}
function fCA() {
	return (eval((parseInt(document.form1.y.value)-y3)*
		(x1-x3) -
		(document.form1.x.value-x3)*
		(y1-y3)))
	}

</script>
<form method="post" name="form1">
<input name="x" id="x" type="text" value="" >
<input name="y" id="y" type="text" value="" >
<input type="button" name="button" onclick="calc()">
</form>

</body>
</html>




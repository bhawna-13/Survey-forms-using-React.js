<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
$servername="localhost";
$username="root";
$password="";
$dbname="popsur";

$a=$_GET['firstname'];
$b=$_GET['lastname'];
$c=$_GET['Age'];
$f=$_GET['members'];
$j=$_GET['childrens'];
$i=$_GET['Income'];
$e=$_GET['Contact'];
$d=$_GET['gender'];
$h=$_GET['emp'];
$g=$_GET['loc'];
$k=$_GET['aadhar'];

$conn=new mysqli($servername,$username,$password,$dbname);
$response=array();
if($conn -> connect_error)
{
    die("Connection failed: ".$conn -> connect_error);
}
$sql_query="INSERT INTO survey values('$a','$b',$c,'$d',$e,$f,'$g','$h',$i,$j,$k)";
if($conn-> query($sql_query)==TRUE){
    echo "Submit Ok";
    array_push($response,array('Result'=>"OK"));
}
else
{
array_push($response,array('Result'=>"NO"));
}
echo json_encode($response);
$conn->close();
?>

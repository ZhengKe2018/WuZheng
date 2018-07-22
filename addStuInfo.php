<?php
require("connect.php");

$StuXH = $_GET['StuXH'];
$StuXM = $_GET['StuXM'];
$StuXB = $_GET['StuXB'];
$StuMZ = $_GET['StuMZ'];
$StuCSNY = $_GET['StuCSNY'];
$StuBJ = $_GET['StuBJ'];
$StuRXNF = $_GET['StuRXNF'];

$sql = "insert into wzzx_xsxx(xh,xm,xb,mz,csny,bj,rxnf) values('$StuXH','$StuXM','$StuXB','$StuMZ','$StuCSNY','$StuBJ','$StuRXNF')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "保存成功";
else
	echo "数据重复提交"; 

mysql_close($conn);

?>
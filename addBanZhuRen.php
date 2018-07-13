<?php
require("connect.php");
$BJ = $_GET['BJ'];
$XJ = $_GET['XJ'];
$XM = $_GET['XM'];
$XSS = $_GET['XSS'];

$sql = "insert into wzzx_bzr(BJ,XJ,XM,XSS) values('$BJ','$XJ','$XM','$XSS')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "提交成功";
else
	echo "数据重复提交"; 
mysql_close($conn);
?>
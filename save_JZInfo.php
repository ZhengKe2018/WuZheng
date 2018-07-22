<?php
require("connect.php");

$JZName = $_GET['JZName'];
$PicLink = $_GET['PicLink'];
$year = $_GET['year'];
$XQ = $_GET['XQ'];

$sql = "insert into wzzx_jiangzhuang(studentName,JZName,PicLink,year,XQ) values('admin','$JZName','$PicLink','$year','$XQ')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "0";   

mysql_close($conn);



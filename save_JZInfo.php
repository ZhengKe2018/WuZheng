<?php
require("connect.php");

$JZName = $_GET['JZName'];
$PicLink = $_GET['PicLink'];

$sql = "insert into wzzx_jiangzhuang(studentName,JZName,PicLink) values('admin','$JZName','$PicLink')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "0";   

mysql_close($conn);



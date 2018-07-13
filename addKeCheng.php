<?php
require("connect.php");
$MC = $_GET['MC'];
$BZ = $_GET['BZ'];

$sql = "insert into wzzx_kc(MC,BZ) values('$MC','$BZ')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "提交成功";
else
	echo "数据重复提交"; 
mysql_close($conn);
?>
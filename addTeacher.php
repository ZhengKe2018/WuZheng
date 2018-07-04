<?php
require("connect.php");
$KeMu = $_GET['KeMu'];
$BanJi = $_GET['BanJi'];
$RKJS = $_GET['RKJS'];

$sql = "insert into wzzx_teacher(KeMu,BanJi,RKJS) values('$KeMu','$BanJi','$RKJS')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "提交成功";
else
	echo "数据重复提交"; 
mysql_close($conn);
?>
<?php
require("connect.php");

$TeaGH = $_GET['TeaGH'];
$TeaXM = $_GET['TeaXM'];
$TeaZW = $_GET['TeaZW'];
$TeaNX = $_GET['TeaNX'];

$sql = "insert into wzzx_teacher_info(GH,XM,ZW,NX) values('$TeaGH','$TeaXM','$TeaZW','$TeaNX')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "保存成功";
else
	echo "数据重复提交"; 

mysql_close($conn);

?>
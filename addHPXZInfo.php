<?php
require("connect.php");
$xzmc = $_GET['xzmc'];
$xslb = $_GET['xslb'];

$sql = "insert into wzzx_hpxz(XZMC,XSLB) values('$xzmc','$xslb')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "提交成功";
else
	echo "数据重复提交"; 
mysql_close($conn);
?>
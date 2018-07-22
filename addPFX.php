<?php
require("connect.php");

$pfxmc = $_GET['pfxmc'];
$pfxfs = $_GET['pfxfs'];

$sql = "insert into wzzx_pfx(MC,FS) values('$pfxmc','$pfxfs')";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "保存成功";
else
	echo "数据重复提交"; 

mysql_close($conn);

?>
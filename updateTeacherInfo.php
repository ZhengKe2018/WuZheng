<?php
require("connect.php");
$GH = $_GET['GH'];
$XM = $_GET['XM'];
$ZW = $_GET['ZW'];
$GZNX = $_GET['GZNX'];
$ID = $_GET['ID'];

$sql = "update wzzx_teacher_info set GH='$GH',XM='$XM',ZW='$ZW',NX='$GZNX' where id=$ID";

mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "数据更新成功";
else
	echo "数据更新失败"; 
mysql_close($conn);

?>
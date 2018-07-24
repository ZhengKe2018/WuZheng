<?php
require("connect.php");
$MC = $_GET['MC'];
$FS = $_GET['FS'];
$ID = $_GET['ID'];

$sql = "update wzzx_pfx set MC='$MC',FS='$FS' where id=$ID";

mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "数据更新成功";
else
	echo "数据更新失败"; 
mysql_close($conn);

?>
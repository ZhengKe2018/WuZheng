<?php
require("connect.php");
$BZRID = $_GET['BZRID'];

$sql = "delete from wzzx_BZR where id='$BZRID'";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "删除成功";
else
	echo "删除失败"; 
mysql_close($conn);
?>
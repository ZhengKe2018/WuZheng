<?php
require("connect.php");
$ID = $_GET['ID'];

$sql = "delete from wzzx_pfx where id=$ID";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "删除成功";
else
	echo "删除失败"; 

mysql_close($conn);
?>
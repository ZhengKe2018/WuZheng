<?php
require("connect.php");
$MC = $_GET['MC'];
$ID = $_GET['ID'];

$sql = "update wzzx_hpxz set XZMC='$MC' where id=$ID";

mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "数据更新成功";
else
	echo "数据更新失败"; 
mysql_close($conn);

?>
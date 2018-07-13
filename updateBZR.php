<?php
require("connect.php");
$BZRBJ = $_GET['BZRBJ'];
$BZRXJ = $_GET['BZRXJ'];
$BZRXM = $_GET['BZRXM'];
$BZRXSS = $_GET['BZRXSS'];
$BZRID = $_GET['BZRID'];


$sql = "update wzzx_bzr set BJ='$BZRBJ',XJ='$BZRXJ',XM='$BZRXM',XSS='$BZRXSS' where id='$BZRID'";

mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "数据更新成功";
else
	echo "数据更新失败"; 
mysql_close($conn);

?>
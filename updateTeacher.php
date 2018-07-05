<?php
require("connect.php");
$TeacherID = $_GET['TeacherID'];
$JSKM = $_GET['JSKM'];
$JSBJ = $_GET['JSBJ'];
$JSXM = $_GET['JSXM'];

$sql = "update wzzx_teacher set KeMu='$JSKM',BanJi='$JSBJ',RKJS='$JSXM' where id='$TeacherID'";

mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "数据更新成功";
else
	echo "数据更新失败"; 
mysql_close($conn);

//echo $_GET["TeacherID"].$_GET["JSKM"].$_GET["JSBJ"].$_GET["JSXM"];

?>
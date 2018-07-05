<?php
require("connect.php");
$TeacherID = $_GET['TeacherID'];

$sql = "delete from wzzx_teacher where id='$TeacherID'";
mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "删除成功";
else
	echo "删除失败"; 
mysql_close($conn);
?>
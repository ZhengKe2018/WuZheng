<?php
require("connect.php");

$sql = "select * from wzzx_teacher_info";
$result = mysql_query($sql);

$rows = array();
while($row=mysql_fetch_array($result))
	$rows[] = $row;

echo json_encode($rows);

mysql_close($conn);
?>
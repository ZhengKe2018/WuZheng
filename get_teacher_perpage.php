<?php
require("connect.php");

$list_perpage = 6;
$selectPage = $_GET["selectPage"];
$offset = ($selectPage - 1) * $list_perpage;

$sql = "select * from wzzx_teacher limit $offset,$list_perpage";

//echo $sql;

$result = mysql_query($sql);

$rows = array();
while($row=mysql_fetch_array($result))
	$rows[] = $row;

echo json_encode($rows);

mysql_close($conn);
?>
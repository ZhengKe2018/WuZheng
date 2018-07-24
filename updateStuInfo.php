<?php
require("connect.php");
$XH = $_GET['XH'];
$XM = $_GET['XM'];
$XB = $_GET['XB'];
$MZ = $_GET['MZ'];
$CSNY = $_GET['CSNY'];
$BJ = $_GET['BJ'];
$RXNF = $_GET['RXNF'];
$ID = $_GET['ID'];

$sql = "update wzzx_xsxx set XH='$XH',XM='$XM',XB='$XB',MZ='$MZ',CSNY='$CSNY',BJ='$BJ',RXNF='$RXNF' where id=$ID";

mysql_query($sql);

if(mysql_affected_rows() > 0)
	echo "数据更新成功";
else
	echo "数据更新失败"; 
mysql_close($conn);

?>
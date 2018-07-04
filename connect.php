<?php
$conn=@mysql_connect("127.0.0.1","root",""); //连接数据库
mysql_select_db("mydb");  //选择数据库
mysql_query("SET names UTF8");  //设置字符编码UTF8
date_default_timezone_set("PRC"); //设置中国时区标准时间
?>
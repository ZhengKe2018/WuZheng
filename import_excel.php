<?php
require("connect.php");
require_once 'C:\wamp\www\PHPExcel\Classes\PHPExcel\IOFactory.php'; 

$filepath = $_FILES['file']['tmp_name'];

$reader = PHPExcel_IOFactory::createReader('Excel2007'); //设置以Excel5格式(Excel97-2003工作簿)  
$PHPExcel = $reader->load($filepath); // 载入excel文件          
$sheet = $PHPExcel->getSheet(0); // 读取第一個工作表  
$highestRow = $sheet->getHighestRow(); // 取得总行数  
//$highestColumm = $sheet->getHighestColumn(); // 取得总列数 

/** 循环读取每个单元格的数据 */  
for ($row = 2; $row <= $highestRow; $row++)
    {//行数是以第2行开始  
          $KeMu = $sheet->getCell('A'.$row)->getValue();  
          $BanJi = $sheet->getCell('B'.$row)->getValue();
          $RKJS = $sheet->getCell('C'.$row)->getValue(); 

          $sql = "insert into wzzx_teacher(KeMu,BanJi,RKJS) values('$KeMu','$BanJi','$RKJS')";
          mysql_query($sql);
    } 
mysql_close($conn);
?>
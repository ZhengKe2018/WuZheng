<?php
include 'PHPExcel\Classes\PHPExcel.php' ;
include 'PHPExcel\Classes\PHPExcel\IOFactory.php';

$objPHPExcel=new PHPExcel();
//获得数据 ---一般是从数据库中获得数据
$conn=@mysql_connect("127.0.0.1","root",""); //连接数据库
mysql_select_db("mydb");  //选择数据库
mysql_query("SET names UTF8");  //设置字符编码UTF8

$sql = "select * from wzzx_teacher_info";
$result = mysql_query($sql);

$data = array();
while($row=mysql_fetch_array($result,MYSQL_ASSOC))
	$data[] = $row;

mysql_close($conn);

//设置excel列名
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1','工号');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('B1','姓名');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('C1','职务');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('D1','工作年限');

//把数据循环写入excel中
foreach($data as $key => $value){
$key+=2;
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$key,$value['GH']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('B'.$key,$value['XM']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('C'.$key,$value['ZW']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('D'.$key,$value['NX']);
}

header("Content-Type: application/vnd.ms-excel;");
header("Content-Disposition:attachment;filename=".date('Y-m-d',mktime()).".xls");
header("Pragma:no-cache");
header("Expires:0");
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter->save('php://output');
?>
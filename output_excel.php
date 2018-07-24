<?php

/*php生成excel完整实例代码
现求：php生成excel完整实例代码
最好能说明如何调用！谢谢
java_sunhui4 | 浏览 8131 次 2014-09-24 14:50
2014-09-25 11:15
最佳答案

下载phpexcel类库 代码如下：*/
include 'C:\wamp\www\PHPExcel\Classes\PHPExcel.php' ;
include 'C:\wamp\www\PHPExcel\Classes\PHPExcel\IOFactory.php';

$objPHPExcel=new PHPExcel();
//获得数据 ---一般是从数据库中获得数据
$data=array(
0=>array('id'=>2013,'name'=>'zhangsan','age'=>21),
1=>array('id'=>2015,'name'=>'EVA','age'=>21)
);
//设置excel列名
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1','编号');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('B1','姓名');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('C1','年龄');
//把数据循环写入excel中
foreach($data as $key => $value){
$key+=2;
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$key,$value['id']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('B'.$key,$value['name']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('C'.$key,$value['age']);
}
//excel保存在根目录下 如要导出文件，以下改为注释代码
$objPHPExcel->getActiveSheet() -> setTitle('SetExcelName');
$objPHPExcel-> setActiveSheetIndex(0);
// $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
//ob_end_clean();
header("Content-Type: application/vnd.ms-excel;");
header("Content-Disposition:attachment;filename=".date('Y-m-d',mktime()).".xls");
header("Pragma:no-cache");
header("Expires:0");
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter->save('php://output');
?>
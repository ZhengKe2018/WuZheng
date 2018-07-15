<?php
require("connect.php");
$fileObj=$_FILES['file'];
$JZName = $fileObj["name"];
$PicLink = "";

//move_uploaded_file($fileObj["tmp_name"],"test.jpg");

$currentDate=date("Y-m-d",intval(time()));
$path="images/";

if($fileObj["error"]==0){

  $types=array("jpg","jpeg","png","gif");

  //获取文件类型
  $type = explode("/", $fileObj["type"]);
  $type = $type[1];       

  if(in_array($type, $types))
  {
      $time = time();//获取时间戳 返回一个整形

      $res=move_uploaded_file($fileObj["tmp_name"],$path.$time.".jpg");

      if($res)
      {
      	$PicLink = $path.$time.".jpg";
      	$sql = "insert into wzzx_jiangzhuang(studentName,JZName,PicLink) values('admin','$JZName','$PicLink')";
      	mysql_query($sql);
      	if(mysql_affected_rows() > 0)
      	{
        	echo "图片上传成功-".$PicLink;
        }      
      else
        echo "图片上传失败";    
  	  }
  	}
  else
  	echo "图片格式不正确";     
}
mysql_close($conn);
?>
<?php

$fileObj=$_FILES['file'];

//move_uploaded_file($fileObj["tmp_name"],"test.jpg");

$path="images/";

if($fileObj["error"]==0)
{
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
      	echo "图片上传成功-".$PicLink;        
  	  }
      else
        echo "图片上传失败"; 
   }
  else
  	echo "图片格式不正确";     
}
?>
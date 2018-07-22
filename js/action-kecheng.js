$(function(){
	var $serverAddr = "http://localhost/zuo/";

	//查看课程信息
    $("#checkKeCheng").click(function(){
                   $('#addKC').html("");
                   $.ajax({
                    type: 'get',
                    url:"checkKeCheng.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);

                        for(var index=0;index<obj.length;index++)
                            {
                                var $kc_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['MC']+'</div><div class="col-xs-3 col-xs-offset-6"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div>';
                                $('#addKC').prepend($kc_info_list);                                            
                            }
                    }
                }); 
            });

	//保存课程
     $('#saveKC').click(function(){
                var $MC = $("#KeCheng_MC").val();

                $.ajax({
                    type: 'get',
                    url:$serverAddr+"addKeCheng.php",
                    async:true,
                    data:"MC="+$MC,
                    success: function (data) { //返回json结果
                        alert('添加成功');                          
                    }
                });

            });
});
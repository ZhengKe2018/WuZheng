$(function(){
	var $serverAddr = "http://localhost/zuo/";

	//查看评分项信息
    $("#checkPFX").click(function(){
                   $('#addpingfenxiang').html("");
                   $.ajax({
                    type: 'get',
                    url:"checkPFX.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);

                        for(var index=0;index<obj.length;index++)
                            {
                                var $pfx_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['MC']+'</div><div class="col-xs-3">'+obj[index]['FS']+'</div><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                                $('#addpingfenxiang').prepend($pfx_info_list);                                            
                            }
                    }
                }); 
            });

    //保存评分项信息
    $("#savePFX").click(function(){
                var $pfxmc = $("#pfxmc").val();
                var $pfxfs = $("#pfxfs").val();

                $.ajax({
                    type: 'get',
                    url:"addPFX.php",
                    async:true,
                    data:"pfxmc="+$pfxmc+"&pfxfs="+$pfxfs,
                    success: function (data) { //返回json结果
                        alert(data);                       
                    }
                });
            });
});
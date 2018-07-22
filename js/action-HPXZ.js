$(function(){
	var $serverAddr = "http://localhost/zuo/";

    //查看互评小组信息
     $("#checkHPXZ").click(function(){
                   $('#HPXZInfo').html("");
                   $.ajax({
                    type: 'get',
                    url:"checkHPXZ.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);

                        for(var index=0;index<obj.length;index++)
                            {
                                var $hpxz_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['XZMC']+'</div><div class="col-xs-2 col-xs-offset-6"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeHPXZInfo"><span class="glyphicon glyphicon-pencil"></span>修改 </button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteHPXZInfo"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div>';
                                $('#HPXZInfo').prepend($hpxz_info_list);                                            
                            }

                    }
                }); 
            });

     //保存互评小组
    $("#saveHPXZ").click(function(){
                var $xzmc = $("#xzmc").val();
                var $xslb = $("input:checkbox[name='stuXM']:checked").map(function(index,elem){
                    return $(elem).val();
                }).get().join(',');

                $.ajax({
                    type: 'get',
                    url:"addHPXZInfo.php",
                    async:true,
                    data:"xzmc="+$xzmc+"&xslb="+$xslb,
                    success: function (data) { //返回json结果
                        alert(data);                       
                    }
                });                
            });

     //列出评选小组的学生名单
     $("#select_hpxz_bj").change(function(){
                 $("#addStuXM").html("");
                var $bjmc = $("#select_hpxz_bj option:selected").text();
                $("#addStuXM").append('<input type="checkbox" name="stuXM" value="张三" style="margin-left:8px"/>张三   ');
                $("#addStuXM").append('<input type="checkbox" name="stuXM" value="李四" style="margin-left:8px"/>李四   ');
                $("#addStuXM").append('<input type="checkbox" name="stuXM" value="王五" style="margin-left:8px"/>王五   ');
                $("#addStuXM").append('<input type="checkbox" name="stuXM" value="赵六" style="margin-left:8px"/>赵六   ');
                $("#addStuXM").append('<br>');
            });

                /*传递id给修改互评小组的模态框*/
            $('#changeHPXZInfo').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });

            /*传递id给删除互评小组的模态框*/
            $('#deleteHPXZInfo').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });
});
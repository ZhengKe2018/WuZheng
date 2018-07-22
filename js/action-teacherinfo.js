$(function(){
	var $serverAddr = "http://localhost/zuo/";

	//查看老师基本信息
     $("#checkTeacherInfo").click(function(){
                   $('#addlsxx').html(""); 
                   $.ajax({
                    type: 'get',
                    url:"checkTeacherInfo.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);
                         for(var index=0;index<obj.length;index++)
                           {
                                var $teacher_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['GH']+'</div><div class="col-xs-2">'+obj[index]['XM']+'</div><div class="col-xs-2">'+obj[index]['ZW']+'</div><div class="col-xs-2">'+obj[index]['NX']+'</div><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeTeacherInfo"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteTeacherInfo"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                                $('#addlsxx').prepend($teacher_info_list);                                            
                            }    

                    }
                }); 
            });


	//保存老师基本信息
    $("#saveTeacherInfo").click(function(){
                var $TeaGH = $("#TeaGH").val();
                var $TeaXM = $("#TeaXM").val();
                var $TeaZW = $("#TeaZW").val();
                var $TeaNX = $("#TeaNX").val();

                $.ajax({
                    type: 'get',
                    url:"addTeacherInfo.php",
                    async:true,
                    data:"TeaGH="+$TeaGH+"&TeaXM="+$TeaXM+"&TeaZW="+$TeaZW+"&TeaNX="+$TeaNX,
                    success: function (data) { //返回json结果
                        alert(data);                       
                    }
                });
            });



            /*传递id给修改教师信息的模态框*/
            $('#changeTeacherInfo').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });

            /*传递id给删除教师信息的模态框*/
            $('#deleteTeacherInfo').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });
});
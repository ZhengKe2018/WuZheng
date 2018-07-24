$(function(){

	//查看老师基本信息
     $("#checkTeacherInfo").click(function(){
                   $('#addlsxx').html(""); 
                   $("#teacher_select_page").empty();
                   $.ajax({
                    type: 'get',
                    url:"checkTeacherInfo.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);

                        var $total_pages = Math.ceil(obj.length/6);
                            $("#teacher_total_pages").html("共"+$total_pages+"页");

                            for(var $pageNum=1;$pageNum<=$total_pages;$pageNum++)
                                $("#teacher_select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

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

    /*更新教师信息*/
    $('#updateTeacherInfo').click(function(){
        var $GH = $("#update_teacher_GH").val();
        var $XM = $("#update_teacher_XM").val();
        var $ZW = $("#update_teacher_ZW").val();
        var $GZNX = $("#update_teacher_GZNX").val();
        var $ID = $("#update_teacher_ID").val();

        $.ajax({
                    type: 'get',
                    url:"updateTeacherInfo.php",
                    async:true,
                    data:"GH="+$GH+"&XM="+$XM+"&ZW="+$ZW+"&GZNX="+$GZNX+"&ID="+$ID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });
      });

    /*删除老师信息*/
    $('#deleteTeaInfo').click(function(){
      var $ID = $("#delete_teacher_ID").val();
      $.ajax({
                    type: 'get',
                    url:"deleteTeacherInfo.php",
                    async:true,
                    data:"ID="+$ID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });
    
      });

     /*点击下拉列表获取教师信息*/
      $("#teacher_select_page").change(function(){
                    var $selectPage = $("#teacher_select_page").find("option:selected").text();
                    $("#addlsxx").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_teainfo_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果    
                            var obj = JSON.parse(data);

                             for(var index=0;index<obj.length;index++)
                           {
                                var $teacher_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['GH']+'</div><div class="col-xs-2">'+obj[index]['XM']+'</div><div class="col-xs-2">'+obj[index]['ZW']+'</div><div class="col-xs-2">'+obj[index]['NX']+'</div><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeTeacherInfo"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteTeacherInfo"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                                $('#addlsxx').prepend($teacher_info_list);                                            
                            } 
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
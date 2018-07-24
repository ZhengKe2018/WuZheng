$(function(){
	//查看课程信息
    $("#checkKeCheng").click(function(){
                   $('#addKC').html("");
                   $("#kecheng_select_page").empty();
                   $.ajax({
                    type: 'get',
                    url:"checkKeCheng.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);
                        var $total_pages = Math.ceil(obj.length/6);
                        $("#kecheng_total_pages").html("共"+$total_pages+"页");

                        for(var $pageNum=1;$pageNum<=$total_pages;$pageNum++)
                                $("#kecheng_select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

                        for(var index=0;index<obj.length;index++)
                            {
                                var $kc_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['MC']+'</div><div class="col-xs-3 col-xs-offset-6"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeKeCheng"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteKeCheng"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div>';
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

     /*更新课程信息*/
    $('#updateKeCheng').click(function(){
        var $MC = $("#update_KeCheng_MC").val();
        var $ID = $("#update_KeCheng_ID").val();

        $.ajax({
                    type: 'get',
                    url:"updateKeCheng.php",
                    async:true,
                    data:"MC="+$MC+"&ID="+$ID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });
            });

    /*删除课程信息*/
    $('#deleleKC').click(function(){
                var $ID = $("#delete_KeCheng_ID").val();
                
                $.ajax({
                    type: 'get',
                    url:"deleteKeCheng.php",
                    async:true,
                    data:"ID="+$ID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });
    
            });

    /*点击下拉列表获取课程*/
    $("#kecheng_select_page").change(function(){
                    var $selectPage = $("#kecheng_select_page").find("option:selected").text();
                    $("#addKC").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_kecheng_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果   
                      var obj = JSON.parse(data); 
                      for(var index=0;index<obj.length;index++)
                            {
                                var $kc_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['MC']+'</div><div class="col-xs-3 col-xs-offset-6"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeKeCheng"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteKeCheng"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div>';
                                $('#addKC').prepend($kc_info_list);                                            
                            }
                    }
                });                   
            });

     /*传递id给修改课程的模态框*/
    $('#changeKeCheng').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });

     /*传递id给删除课程的模态框*/
    $('#deleteKeCheng').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });
});
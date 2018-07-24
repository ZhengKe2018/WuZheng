$(function(){
	//查看评分项信息
    $("#checkPFX").click(function(){
                   $('#addpingfenxiang').html("");
                   $("#pfx_select_page").empty();
                   $.ajax({
                    type: 'get',
                    url:"checkPFX.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);

                        var $total_pages = Math.ceil(obj.length/6);
                            $("#pfx_total_pages").html("共"+$total_pages+"页");

                            for(var $pageNum=1;$pageNum<=$total_pages;$pageNum++)
                                $("#pfx_select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

                        for(var index=0;index<obj.length;index++)
                            {
                                var $pfx_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['MC']+'</div><div class="col-xs-3">'+obj[index]['FS']+'</div><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changePFX"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deletePFX"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
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

    /*更新评分项*/
    $('#updatePFX').click(function(){
        var $MC = $("#update_PFX_MC").val();
        var $FS = $("#update_PFX_FS").val();
        var $ID = $("#update_PFX_ID").val();

//        alert($MC+$FS);

        $.ajax({
                    type: 'get',
                    url:"updatePFX.php",
                    async:true,
                    data:"MC="+$MC+"&FS="+$FS+"&ID="+$ID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });
            });

    /*删除评分项信息*/
    $('#delelePF').click(function(){
                var $ID = $("#delete_PFX_ID").val();
                
                $.ajax({
                    type: 'get',
                    url:"deletePFX.php",
                    async:true,
                    data:"ID="+$ID,
                    success: function (data) { 
                        alert(data);                                    
                    }
                });
            });

    /*点击下拉列表获取评分项*/
     $("#pfx_select_page").change(function(){
                    var $selectPage = $("#pfx_select_page").find("option:selected").text();
                    $("#addpingfenxiang").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_pfx_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果    
                            var obj = JSON.parse(data);

                             for(var index=0;index<obj.length;index++)
                            {
                                var $pfx_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['MC']+'</div><div class="col-xs-3">'+obj[index]['FS']+'</div><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changePFX"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deletePFX"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                                $('#addpingfenxiang').prepend($pfx_info_list);                                            
                            }
                    }
                });                   
            });

    /*传递id给修改评分项的模态框*/
    $('#changePFX').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });

     /*传递id给删除评分项的模态框*/
    $('#deletePFX').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });
});
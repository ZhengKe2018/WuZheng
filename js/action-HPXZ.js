$(function(){
    //查看互评小组信息
     $("#checkHPXZ").click(function(){
                   $('#HPXZInfo').html("");
                   $("#hpxz_select_page").empty;
                   $.ajax({
                    type: 'get',
                    url:"checkHPXZ.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);

                        var $total_pages = Math.ceil(obj.length/6);
                            $("#hpxz_total_pages").html("共"+$total_pages+"页");

                            for(var $pageNum=1;$pageNum<=$total_pages;$pageNum++)
                                $("#hpxz_select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

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

    /*更新互评小组信息*/
    $('#updateHPXZ').click(function(){
        var $MC = $("#update_HPXZ_MC").val();
        var $ID = $("#update_HPXZ_ID").val();

        $.ajax({
                    type: 'get',
                    url:"updateHPXZInfo.php",
                    async:true,
                    data:"MC="+$MC+"&ID="+$ID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });
      });

    /*删除互评小组*/
    $('#deleteHPXZ').click(function(){
      var $ID = $("#delete_HPXZ_ID").val();
      $.ajax({
                    type: 'get',
                    url:"deleteHPXZInfo.php",
                    async:true,
                    data:"ID="+$ID,
                    success: function (data) { 
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

      /*点击下拉列表获取互评小组*/
     $("#hpxz_select_page").change(function(){
                    var $selectPage = $("#hpxz_select_page").find("option:selected").text();
                    $("#HPXZInfo").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_hpxz_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果    
                            var obj = JSON.parse(data);

                             for(var index=0;index<obj.length;index++)
                            {
                                var $hpxz_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-3">'+obj[index]['XZMC']+'</div><div class="col-xs-2 col-xs-offset-6"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeHPXZInfo"><span class="glyphicon glyphicon-pencil"></span>修改 </button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteHPXZInfo"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div>';
                                $('#HPXZInfo').prepend($hpxz_info_list);                                            
                            }
                    }
                });                   
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
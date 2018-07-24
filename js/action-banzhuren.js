$(function(){
    /*查看班主任信息*/
    $('#checkBZR').click(function(){
        $("#show_BZR_List").html("");
        $("#BZR_select_page").empty();
        $.ajax({
                    type: 'get',
                    url:"checkBanZhuRen.php",
                    async:true,
                    success: function (data) { //返回json结果     
                            var obj = JSON.parse(data);
                            var $BZR_total_pages = Math.ceil(obj.length/6);
                            $("#BZR_total_pages").html("共"+$BZR_total_pages+"页");

                            for(var $pageNum=1;$pageNum<=$BZR_total_pages;$pageNum++)
                                $("#BZR_select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

                                for(var index=0;index<obj.length;index++)
                                {
                                    var $per_BZR_list = '<div class="row"  id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['BJ']+'</div><div class="col-xs-2"><span>'+obj[index]['XJ']+'</span></div><div class="col-xs-3">'+obj[index]['XM']+'</div><div class="col-xs-3">'+obj[index]['XSS']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeSource"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteSource"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                                    $('#show_BZR_List').prepend($per_BZR_list);                                            
                                }
                    }
                });
            });

        /*添加班主任信息*/
        $('#saveBZR').click(function(){
                var $BJ = $("#BZR_BJ").val();
                var $XJ = $("#BZJ_XJ").val();
                var $XM = $("#BZR_XM").val();
                var $XSS = $("#BZR_XSS").val();

                $.ajax({
                    type: 'get',
                    url:"addBanZhuRen.php",
                    async:true,
                    data:"BJ="+$BJ+"&XJ="+$XJ+"&XM="+$XM+"&XSS="+$XSS,
                    success: function (data) { //返回json结果
                        alert('添加成功');
                        var $per_BZR_list = '<div class="row"><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">'+$BJ+'</div><div id="topAD" class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span>'+$XJ+'</span></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+$XM+'</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+$XSS+'</div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div></div>';
                        $('#show_BZR_List').prepend($per_BZR_list); 
                        $('#addSource').modal('hide');                          
                    }
                });
            });

        /*更新班主任信息*/
            $('#updateBZR').click(function(){
                var $BZRID = $("#BZRID").val();
                var $BZRBJ = $("#update_BZR_BJ").val();
                var $BZRXJ = $("#update_BZR_XJ").val();
                var $BZRXM = $("#update_BZR_XM").val();
                var $BZRXSS = $("#update_BZR_XSS").val();

                $.ajax({
                    type: 'get',
                    url:"updateBZR.php",
                    async:true,
                    data:"BZRBJ="+$BZRBJ+"&BZRXJ="+$BZRXJ+"&BZRXM="+$BZRXM+"&BZRXSS="+$BZRXSS+"&BZRID="+$BZRID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });
            });

           /*删除班主任信息*/
            $('#deleleBZR').click(function(){
                var $BZRID = $("#BZRID_d").val();

                $.ajax({
                    type: 'get',
                    url:"deleteBZR.php",
                    async:true,
                    data:"BZRID="+$BZRID,
                    success: function (data) { 
                        alert(data);                     
                    }
                });
            });

            /*点击下拉列表获取班主任*/
            $("#BZR_select_page").change(function(){
                    var $selectPage = $("#BZR_select_page").find("option:selected").text();
                    $("#show_BZR_List").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_bzr_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果   
                      var obj = JSON.parse(data); 
                       for(var index=0;index<obj.length;index++)
                        {
                            var $per_BZR_list = '<div class="row"  id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['BJ']+'</div><div class="col-xs-2"><span>'+obj[index]['XJ']+'</span></div><div class="col-xs-3">'+obj[index]['XM']+'</div><div class="col-xs-3">'+obj[index]['XSS']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeSource"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteSource"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                            $('#show_BZR_List').prepend($per_BZR_list);                                            
                        }
                    }
                });                   
            });

            /*传递id给修改班主任信息的模态框*/
            $('#changeSource').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });


            /*传递id给删除班主任信息的模态框*/
            $('#deleteSource').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });

});
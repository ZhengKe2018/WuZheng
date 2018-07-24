$(function(){

	/*查看任课教师信息*/
     $('#checkTeacher').click(function(){
                $("#addJS").html("");
                $("#select_page").empty();
                $.ajax({
                    type: 'get',
                    url:"checkTeacher.php",
                    async:true,
                    success: function (data) { //返回json结果     
                            var obj = JSON.parse(data);
                            var $total_pages = Math.ceil(obj.length/6);
                            $("#total_pages").html("共"+$total_pages+"页");

                            for(var $pageNum=1;$pageNum<=$total_pages;$pageNum++)
                                $("#select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

                                for(var index=0;index<obj.length;index++)
                                {
                                    var $newJS = $('<div class="row updateTeacher" id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['KeMu']+'</div><div class="col-xs-3"><span>'+obj[index]['BanJi']+'</span></div><div class="col-xs-5">'+obj[index]['RKJS']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeChar"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteChar"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>');
                                     $('#addJS').prepend($newJS);                
                                }
                    }
                });
            });


	/*添加任课教师信息*/
     $('#saveJS').click(function(){
                var $KeMu = $("#KeMu").val();
                var $BanJi = $("#BanJi").val();
                var $RKJS = $("#RKJS").val();

                $.ajax({
                    type: 'get',
                    url:"addTeacher.php",
                    async:true,
                    data:"KeMu="+$KeMu+"&BanJi="+$BanJi+"&RKJS="+$RKJS,
                    success: function (data) { //返回json结果
                        alert('添加成功');
                        var $newJS = $('<div class="row"><div class="col-xs-2">'+$KeMu+'</div><div class="col-xs-3"><span>'+$BanJi+'</span></div><div class="col-xs-5">'+$RKJS+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#changeChar">修改</button><button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteChar">删除</button></div></div>');
                            $('#addJS').prepend($newJS);                           
                    }
                });
            });


     		/*更新任课教师信息*/
            $('#UpdateTeacherData').click(function(){
                var $TeacherID = $("#TeacherID").val();
                var $JSKM = $("#JSKM").val();
                var $JSBJ = $("#JSBJ").val();
                var $JSXM = $("#JSXM").val();

                $.ajax({
                    type: 'get',
                    url:"updateTeacher.php",
                    async:true,
                    data:"JSKM="+$JSKM+"&JSBJ="+$JSBJ+"&JSXM="+$JSXM+"&TeacherID="+$TeacherID,
                    success: function (data) { //返回json结果
                        alert(data); 
                        $(".updateTeacher").remove("#"+$TeacherID);   //删除节点
                        var $replaceJS = $('<div class="row updateTeacher" id='+$TeacherID+'><div class="col-xs-2">'+$JSKM+'</div><div class="col-xs-3"><span>'+$JSBJ+'</span></div><div class="col-xs-5">'+$JSXM+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+$TeacherID+' data-toggle="modal" data-target="#changeChar">修改</button><button class="btn btn-danger btn-xs" data-id='+$TeacherID+' data-toggle="modal" data-target="#deleteChar">删除</button></div></div>'); 
                            $('#addJS').prepend($replaceJS);      //替换节点                 
                    }
                });
            });

            /*删除任课教师信息*/
            $('#deleteJS').click(function(){
                var $TeacherID = $("#TeacherID_d").val();

                $.ajax({
                    type: 'get',
                    url:"deleteTeacher.php",
                    async:true,
                    data:"TeacherID="+$TeacherID,
                    success: function (data) { 
                        alert(data);                     
                    }
                });
            });


            /*点击下拉列表获取任课教师信息*/
            $("#select_page").change(function(){
                    var $selectPage = $("#select_page").find("option:selected").text();
                    $("#addJS").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_teacher_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果    
                            var obj = JSON.parse(data);

                             for(var index=0;index<obj.length;index++)
                                {
                                    var $newJS = $('<div class="row updateTeacher" id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['KeMu']+'</div><div class="col-xs-3"><span>'+obj[index]['BanJi']+'</span></div><div class="col-xs-5">'+obj[index]['RKJS']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeChar">修改</button><button class="btn btn-danger btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteChar">删除</button></div></div>');
                                        $('#addJS').prepend($newJS);                
                                }
                    }
                });                   
            });

            /*查看下一页任课教师信息*/
/*            $(".next_page_teacher").click(function(){
                var $max_page = $("#select_page option").length;   //获取最大页数
                var $check_value = $("#select_page").val();

                if(parseInt($check_value) < parseInt($max_page))
                    $("#select_page").val(parseInt($check_value)+1);
                else
                    $("#select_page").val(parseInt($max_page));

                var $selectPage = $("#select_page").find("option:selected").text();
                    $("#addJS").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_teacher_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果    
                            var obj = JSON.parse(data);

                             for(var index=0;index<obj.length;index++)
                                {
                                    var $newJS = $('<div class="row updateTeacher" id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['KeMu']+'</div><div class="col-xs-3"><span>'+obj[index]['BanJi']+'</span></div><div class="col-xs-5">'+obj[index]['RKJS']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeChar">修改</button><button class="btn btn-danger btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteChar">删除</button></div></div>');
                                        $('#addJS').prepend($newJS);                
                                }
                    }
                });
            });*/

            /*查看上一页任课教师信息*/
/*            $(".last_page_teacher").click(function(){
                    var $check_value = $("#select_page").val();

                    if(parseInt($check_value) > 1)
                        $("#select_page").val(parseInt($check_value)-1);
                    else
                        $("#select_page").val(1);

                    var $selectPage = $("#select_page").find("option:selected").text();
                    $("#addJS").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_teacher_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果    
                            var obj = JSON.parse(data);

                             for(var index=0;index<obj.length;index++)
                                {
                                    var $newJS = $('<div class="row updateTeacher" id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['KeMu']+'</div><div class="col-xs-3"><span>'+obj[index]['BanJi']+'</span></div><div class="col-xs-5">'+obj[index]['RKJS']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeChar">修改</button><button class="btn btn-danger btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteChar">删除</button></div></div>');
                                        $('#addJS').prepend($newJS);                
                                }
                    }
                });
            });*/


            /*传递id给修改任课教师信息的模态框*/
            $('#changeChar').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                }); 

            /*传递id给删除任课教师信息的模态框*/
            $('#deleteChar').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });           
});
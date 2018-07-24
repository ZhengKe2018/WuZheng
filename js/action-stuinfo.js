$(function(){

	//查看学生基本信息
    $("#checkStuInfo").click(function(){
               $('#addxsxx').html("");
               $("#student_select_page").empty();
                   $.ajax({
                    type: 'get',
                    url:"checkStuInfo.php",
                    async:true,
                    success: function (data) { 
                        var obj = JSON.parse(data);

                        var $total_pages = Math.ceil(obj.length/6);
                            $("#student_total_pages").html("共"+$total_pages+"页");

                            for(var $pageNum=1;$pageNum<=$total_pages;$pageNum++)
                                $("#student_select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

                        for(var index=0;index<obj.length;index++)
                            {
                                var $stu_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-1">'+obj[index]['xh']+'</div><div id="topAD" class="col-xs-1">'+obj[index]['xm']+'</div><div class="col-xs-1">'+obj[index]['xb']+'</div><div class="col-xs-1">'+obj[index]['mz']+'</div><div class="col-xs-2">'+obj[index]['csny']+'</div><div class="col-xs-2">'+obj[index]['bj']+'</div><div class="col-xs-2">'+obj[index]['rxnf']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeStuInfo"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteStuInfo"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                                $('#addxsxx').append($stu_info_list);                                            
                            }    

                    }
                }); 
            });

    //保存学生基本信息
     $("#saveStuInfo").click(function(){
                var $StuXH = $("#StuXH").val();
                var $StuXM = $("#StuXM").val();
                var $StuXB = $("#StuXB").val();
                var $StuMZ = $("#StuMZ").val();
                var $StuCSNY = $("#StuCSNY").val();
                var $StuBJ = $("#StuBJ").val();
                var $StuRXNF = $("#StuRXNF").val();

                $.ajax({
                    type: 'get',
                    url:"addStuInfo.php",
                    async:true,
                    data:"StuXH="+$StuXH+"&StuXM="+$StuXM+"&StuXB="+$StuXB+"&StuMZ="+$StuMZ+"&StuCSNY="+$StuCSNY+"&StuBJ="+$StuBJ+"&StuRXNF="+$StuRXNF,
                    success: function (data) { //返回json结果
                        alert(data);                       
                    }
                });
            });

      /*更新学生信息*/
    $('#updateStuInfo').click(function(){
        var $XH = $("#update_Stu_XH").val();
        var $XM = $("#update_Stu_XM").val();
        var $XB = $("#update_Stu_XB").val();
        var $MZ = $("#update_Stu_MZ").val();
        var $CSNY = $("#update_Stu_CSNY").val();
        var $BJ = $("#update_Stu_BJ").val();
        var $RXNF = $("#update_Stu_RXNF").val();
        var $ID = $("#update_PFX_ID").val();

        $.ajax({
                    type: 'get',
                    url:"updateStuInfo.php",
                    async:true,
                    data:"XH="+$XH+"&XM="+$XM+"&XB="+$XB+"&MZ="+$MZ+"&CSNY="+$CSNY+"&BJ="+$BJ+"&RXNF="+$RXNF+"&ID="+$ID,
                    success: function (data) { //返回json结果
                        alert(data);                                    
                    }
                });

            });

    /*删除学生信息*/
    $('#deleteStudentInfo').click(function(){
      var $ID = $("#delete_XSXX_ID").val();
      $.ajax({
                    type: 'get',
                    url:"deleteStuInfo.php",
                    async:true,
                    data:"ID="+$ID,
                    success: function (data) { 
                        alert(data);                                    
                    }
        });
    
      });


                /*点击下拉列表获取学生信息*/
            $("#student_select_page").change(function(){
                    var $selectPage = $("#student_select_page").find("option:selected").text();
                    $("#addxsxx").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_stuinfo_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果    
                            var obj = JSON.parse(data);

                             for(var index=0;index<obj.length;index++)
                            {
                                var $stu_info_list = '<div class="row" id='+obj[index]['id']+'><div class="col-xs-1">'+obj[index]['xh']+'</div><div id="topAD" class="col-xs-1">'+obj[index]['xm']+'</div><div class="col-xs-1">'+obj[index]['xb']+'</div><div class="col-xs-1">'+obj[index]['mz']+'</div><div class="col-xs-2">'+obj[index]['csny']+'</div><div class="col-xs-2">'+obj[index]['bj']+'</div><div class="col-xs-2">'+obj[index]['rxnf']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeStuInfo"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteStuInfo"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div>';
                                $('#addxsxx').append($stu_info_list);                                            
                            }
                    }
                });                   
            });

    /*传递id给修改学生信息的模态框*/
    $('#changeStuInfo').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });

            /*传递id给删除学生信息的模态框*/
            $('#deleteStuInfo').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                }); 

});
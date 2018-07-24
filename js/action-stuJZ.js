$(function(){

    /*查看所有学生奖状信息*/
    $('#checkJZ').click(function(){
                $("#XSJZ").html("");
                $("#jx_select_page").empty();
                $.ajax({
                    type: 'get',
                    url:"checkJZ.php",
                    async:true,
                    data:"studentName=admin",
                    success: function (data) {
                        var obj = JSON.parse(data);

                        var $total_pages = Math.ceil(obj.length/6);
                            $("#jx_total_pages").html("共"+$total_pages+"页");

                            for(var $pageNum=1;$pageNum<=$total_pages;$pageNum++)
                                $("#jx_select_page").append('<option value='+$pageNum+'>'+$pageNum+'</option>');

                        for(var index=0;index<obj.length;index++)
                        {
                            var $newJZ = $('<div class="row" id='+obj[index]['id']+'><div class="col-xs-1">'+obj[index]['studentName']+'</div><div class="col-xs-3">'+obj[index]['JZName']+'</div><div class="col-xs-3"><a href='+obj[index]['PicLink']+' target="_blank">查看图片</a></div><div class="col-xs-2">'+obj[index]['year']+'</div><div class="col-xs-2">'+obj[index]['XQ']+'</div></div>');
                            $("#XSJZ").append($newJZ);
                        }     
                    }
                });
            });

    /*点击下拉列表获取奖项*/
    $("#kecheng_select_page").change(function(){
                    var $selectPage = $("#jx_select_page").find("option:selected").text();
                    $("#XSJZ").html("");

                    $.ajax({
                    type: 'get',
                    url:"get_jx_perpage.php",
                    data:"selectPage="+$selectPage,
                    async:true,
                    success: function (data) { //返回json结果   
                      var obj = JSON.parse(data); 
                      
                      for(var index=0;index<obj.length;index++)
                        {
                            var $newJZ = $('<div class="row" id='+obj[index]['id']+'><div class="col-xs-1">'+obj[index]['studentName']+'</div><div class="col-xs-3">'+obj[index]['JZName']+'</div><div class="col-xs-3"><a href='+obj[index]['PicLink']+' target="_blank">查看图片</a></div><div class="col-xs-2">'+obj[index]['year']+'</div><div class="col-xs-2">'+obj[index]['XQ']+'</div></div>');
                            $("#XSJZ").append($newJZ);
                        }
                    }
                });                   
            });
});
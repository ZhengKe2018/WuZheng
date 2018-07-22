$(function(){
	var $serverAddr = "http://localhost/zuo/";

    /*查看所有学生奖状信息*/
            $('#checkJZ').click(function(){
                $("#XSJZ").html("");
                $.ajax({
                    type: 'get',
                    url:"checkJZ.php",
                    async:true,
                    data:"studentName=admin",
                    success: function (data) {
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
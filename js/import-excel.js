$(function(){
	         /*从Excel表格中导入任课教师*/
            $("#import_rk_teacher").change(function(){
                var fileObj = this.files[0];
                var formData=new FormData();

                formData.append("file",fileObj);
                formData.append("name",fileObj.name);

                $.ajax({
                    type: 'post',
                    url:"import_rk_teacher.php",
                    async:true,
                    data:formData,
                    processData:false,
                    contentType:false,
                    success: function (data) { 
                        alert('数据导入成功'); 
                    }
               });
            });

            /*从Excel表格中导入学生信息*/
            $("#import_student_info").change(function(){
                var fileObj = this.files[0];
                var formData=new FormData();

                formData.append("file",fileObj);
                formData.append("name",fileObj.name);

                $.ajax({
                    type: 'post',
                    url:"import_student_info.php",
                    async:true,
                    data:formData,
                    processData:false,
                    contentType:false,
                    success: function (data) { 
                        alert('数据导入成功'); 
                    }
               });
            });

            /*从Excel表格中导入教师信息*/
            $("#import_teacher_info").change(function(){
                var fileObj = this.files[0];
                var formData=new FormData();

                formData.append("file",fileObj);
                formData.append("name",fileObj.name);

                $.ajax({
                    type: 'post',
                    url:"import_teacher_info.php",
                    async:true,
                    data:formData,
                    processData:false,
                    contentType:false,
                    success: function (data) { 
                        alert('数据导入成功'); 
                    }
               });
            });

            /*输出任课教师Excel表格*/
            $("#output_rk_teacher").click(function(){
                window.location.href = 'output_rk_teacher.php';
            });

            /*输出学生信息Excel表格*/
            $("#output_student_info").click(function(){
                window.location.href = 'output_student_info.php';
            });

             /*输出教师信息Excel表格*/
            $("#output_teacher_info").click(function(){
                window.location.href = 'output_teacher_info.php';
            });
});
/**
 * Created by xiening on 2017/3/24.
 */
$('input[type="file"]').change(
    function(){
        var form=new FormData();
        var files = $('input[type="file"]')[0].files;
        form.append('image',files[0]);
        console.log(files);
        fetch('test/file_upload',{
            method:'POST',
            mode:'no-cors',
            body:form,
        }).then(function(res){
            return res.json();
        }).then(function(json){
            console.log(json);
            var path=json.path;
            var newpath=path.replace(/public\//,"");
            console.log(newpath);
            var imgele=$('<img class="imgclass"/>');
            imgele.attr('src',newpath);
            imgele.appendTo("body");
        });
    }
);

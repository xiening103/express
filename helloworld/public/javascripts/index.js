/**
 * Created by xiening on 2017/3/21.
 */
fetch("../json/index.json").then(function(res){
    if(res.ok){
        var data;
        res.json().then(function(data){
            console.log(data);
             data=data.text;
            document.getElementById("hh").innerHTML="bbb";
        });
        return data;
    }else{
        console.log("没成功",res.status);
    }
},function(e){
    console.log("Fetch failed",e);
});
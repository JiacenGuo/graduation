$(document).ready(function(){

    var mine0 = document.getElementById("mine0")
    var mine1 = document.getElementById("mine1")
    var mine2 = document.getElementById("mine2")
    var mine3 = document.getElementById("mine3")
    var mine4 = document.getElementById("mine4")
    var mine5 = document.getElementById("mine5")
    var mine6 = document.getElementById("mine6")

    if (window.location.pathname=='/mine/0/')
    {
        console.log("mine0")
        mine0.style.display="block";
        mine1.style.display="none";
        mine2.style.display="none";
        mine3.style.display="none";
        mine4.style.display="none";
        mine5.style.display="none";
        mine6.style.display="none";
    }
    else if(window.location.pathname=='/mine/1/'){
        console.log("1");
        mine0.style.display="none";
        mine1.style.display="block";
        mine2.style.display="none";
        mine3.style.display="none";
        mine4.style.display="none";
        mine5.style.display="none";
        mine6.style.display="none";
    }
    else if(window.location.pathname=='/mine/2/'){
        console.log("2");
        mine0.style.display="none";
        mine1.style.display="none";
        mine2.style.display="block";
        mine3.style.display="none";
        mine4.style.display="none";
        mine5.style.display="none";
        mine6.style.display="none";
    }
    else if(window.location.pathname=='/mine/3/'){
        console.log("3");
        mine0.style.display="none";
        mine1.style.display="none";
        mine2.style.display="none";
        mine3.style.display="block";
        mine4.style.display="none";
        mine5.style.display="none";
        mine6.style.display="none";
    }
    else if(window.location.pathname=='/mine/4/'){
        console.log("4");
        mine0.style.display="none";
        mine1.style.display="none";
        mine2.style.display="none";
        mine3.style.display="none";
        mine4.style.display="block";
        mine5.style.display="none";
        mine6.style.display="none";
    }else if(window.location.pathname=='/mine/5/'){
        console.log("5");
        mine0.style.display="none";
        mine1.style.display="none";
        mine2.style.display="none";
        mine3.style.display="none";
        mine4.style.display="none";
        mine5.style.display="block";
        mine6.style.display="none";
    }else if(window.location.pathname=='/mine/6/'){
        console.log("5");
        mine0.style.display="none";
        mine1.style.display="none";
        mine2.style.display="none";
        mine3.style.display="none";
        mine4.style.display="none";
        mine5.style.display="none";
        mine6.style.display="block";
    }

    var quit = document.getElementById("tuichu")
    quit.addEventListener("click", function(){
        console.log("tc")
        layer.open({
        content: '????????????????????????'
        ,btn: ['??????', '??????']
        ,yes: function(index){
            $.post("/quit/",{},function(data){
              if (data.status == "success" )
              {
                //?????????,????????????
                location.reload();
                }

              },false)
            layer.close(index);
            }
        })
    });

    var collects = document.getElementsByClassName("shoucang");
    //????????????????????????????????????
    for(var i = 0; i<collects.length;i++)
    {
        col = collects[i];
        col.addEventListener("click",function(){
            bianhao = this.getAttribute("bianhao")

                layer.open({
                content: '?????????????????????????????????'
                ,btn: ['??????', '??????']
                ,yes: function(index){
                   //??????
                   $.post("/manipulate/2/",{"bianhao":bianhao},function(data){

                      if (data.status == "success" )
                      {
                          layer.open({
                                content: '????????????????????????~'
                                ,skin: 'msg'
                                ,time: 2 //2??????????????????
                          });
                          setTimeout(function(){location.reload();},2300);
                      }else{
                        //?????????
                      }
                   })

                }
            });
        });
    }

    var qx_collects = document.getElementsByClassName("quxiaoshoucang");
    //????????????????????????????????????
    for(var i = 0; i<qx_collects.length;i++)
    {
        col = qx_collects[i];
        col.addEventListener("click",function(){
            bianhao = this.getAttribute("bianhao")

                layer.open({
                content: '????????????????????????????????????'
                ,btn: ['??????', '??????']
                ,yes: function(index){
                   //??????
                   $.post("/manipulate/3/",{"bianhao":bianhao},function(data){

                      if (data.status == "success" )
                      {
                          layer.open({
                                content: '????????????????????????~'
                                ,skin: 'msg'
                                ,time: 2 //2??????????????????
                          });
                          setTimeout(function(){location.reload();},2300);
                      }else{
                        //?????????
                      }
                   })

                }
            });
        });
    }

    var huifus = document.getElementsByClassName("huifutuxiang");
    //????????????????????????????????????
    for(var i = 0; i<huifus.length;i++)
    {
        huifu = huifus[i];
        huifu.addEventListener("click",function(){
            bianhao = this.getAttribute("bianhao")

                layer.open({
                content: '??????????????????????????????'
                ,btn: ['??????', '??????']
                ,yes: function(index){
                   //??????
                   $.post("/manipulate/4/",{"bianhao":bianhao},function(data){

                      if (data.status == "success" )
                      {
                          layer.open({
                                content: '????????????????????????~'
                                ,skin: 'msg'
                                ,time: 2 //2??????????????????
                          });
                          setTimeout(function(){location.reload();},2300);
                      }else{
                        //?????????
                      }
                   })

                }
            });
        });
    }

})
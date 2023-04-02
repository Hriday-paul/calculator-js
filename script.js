var result = document.querySelector("#result");
var dad = document.querySelector("#parent");
var btn_len = dad.children.length;
for (let i = 0; i<btn_len-1; i++){
        dad.children[i].addEventListener("click", function(){
        var btn_value = dad.children[i].value;
        if(btn_value!="C"){
            result.value+=btn_value;
        }
        else{
            result.value="";
        }
    })
}

//calculation
document.querySelector(".btn-eql").addEventListener("click",function(){
    let res = document.querySelector("#result").value;
    if(res[0]=="√"){
        try{
        document.querySelector("#result").value = Math.sqrt(parseInt(res.slice(1,res.length)));
        }
        catch{
            document.querySelector("#result").value = "syntax error"
        }
    }
    else if(res[res.length-1]=="√"){
        try{
            document.querySelector("#result").value = Math.sqrt(parseInt(res.slice(0,res.length-1)));
        }catch{
            document.querySelector("#result").value = "syntax error"
        }
    }
    else{
        try{
            document.querySelector("#result").value = eval(res);
        }
        catch{
            document.querySelector("#result").value = "syntax error"
        }
    }
})
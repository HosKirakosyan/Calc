const screen = document.getElementById("screen");
const btn = document.getElementById("btn");
const value_btn = document.querySelectorAll("#value_btn")
const del_btn = document.getElementById("del");
const delall = document.getElementById("delall");
const SR = document.getElementById("SR");
const sqr = document.getElementById("sqr");

sqr.addEventListener("click",()=>{
    screen.value = eval(screen.value) * eval(screen.value);
});

SR.addEventListener("click",()=>{
    screen.value = Math.sqrt(eval(screen.value));
});

del_btn.addEventListener("click",()=>{
    screen.value = screen.value.substring(0,screen.value.length-1);
});
delall.addEventListener("click",()=>{
    screen.value = "";
});

for(let i = 0; i < value_btn.length; i++){


        value_btn[i].addEventListener("click",()=>{
            if(screen.value[screen.value.length - 1] == value_btn[i].value && screen.value[screen.value.length - 1] == value_btn[i].value){
                //chgidem inj grem meka ashxatuma
            }else{
                screen.value += value_btn[i].value;
            };
        });
};


btn.addEventListener("click",()=>{
    let arr = screen.value.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "x"){
            arr[i] = "*";
        }else if(arr[i] == "÷"){
            arr[i] = "/";
        }
    }
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str += arr[i];
    }
    if(screen.value == ""){
        screen.value = "0";
    };

    screen.value = eval(str);
});











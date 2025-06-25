function checkAge(){
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var result = "";

    if(name === "" || typeof age !== "number" || isNaN(age) || age<=0){
        result = `It is invalid for ${name}`;
    } else if(age > 18){
        result = `${name}, you are an adult persion`;
    }else if(age === 18){
        result = `${name}, you are become an adult persion`;
    }else{
       result = `${name}, you are a minor persion`;
    }

    document.getElementById("result").innerText = result;
    
}
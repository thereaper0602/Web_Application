function Execute(){
    let a = Number(document.forms["form"]["num-one"].value);
    let b = Number(document.forms["form"]["num-two"].value);
    let ope = document.forms["form"]["op"].value;
    let res;
    switch(ope){
        case "+": res = a + b;break;
        case "-": res = a - b;break;
        case "*": res = a*b;break;
        case "/": 
        {
            if(b!=0){
                res = (a/b).toFixed(2);
            }
            else {
                res = "No solution";
            }
            break;
        }
    }
    document.forms["form"]["result"].value = res;
    return false;
}
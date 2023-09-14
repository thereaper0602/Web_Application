function delta(a,b,c){
    return b**2 - 4*a*c;

}

function Solve(){
    const a = Number(document.getElementById("num-a").value);
    const b = Number(document.getElementById("num-b").value);
    const c = Number(document.getElementById("num-c").value);
    let kq,x;
    if(a===0 || a===""){
        if(b===0 || b===""){
            if(c!=0){
                kq = "Infinite solution";
            }
            else kq = "None solution";
            document.getElementById("number-root").innerHTML = kq;
        }
        else{
            x = -c/b;
            kq = x.toFixed(2);
            document.getElementById("number-root").innerHTML = "The equation has 1 solution";
            document.getElementById("root").innerHTML = `x = ${kq}`;
        }
    }
    else{
        let x1,x2;
        if(delta(a,b,c) > 0){
            x1 = (-b + Math.sqrt(delta(a,b,c)))/2*a;
            x2 = (-b - Math.sqrt(delta(a,b,c)))/2*a;
            kq = "The equation has 2 solutions";
            document.getElementById("number-root").innerHTML = kq;
            document.getElementById("root").innerHTML = `x1 = ${x1.toFixed(2)} <br> x2 = ${x2.toFixed(2)}`;
        }
        else if(delta(a,b,c)===0){
            kq = "The equation has 1 solution";
            x = -b/2*a;
            document.getElementById("number-root").innerHTML = kq;
            document.getElementById("root").innerHTML = `x = ${x.toFixed(2)}`;
        }
        else{
            kq = "None solution";
            document.getElementById("number-root").innerHTML = kq;
        }

    }
}

function del(){
document.getElementById("num-a").value = "";
document.getElementById("num-b").value = "";
document.getElementById("num-c").value = "";
document.getElementById("number-root").innerHTML = "";
document.getElementById("root").innerHTML = "";
}
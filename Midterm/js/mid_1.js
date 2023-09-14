let colorCar = "";
let kind = "";
        function changePic(value){
            let kindChange = document.getElementById("carKind").value;
            colorCar = value;
            document.querySelector(".image-change").innerHTML = `<img src = "/Midterm/images/${value}-${kindChange}.jpg">`;
            console.log(colorCar);
        }
        let quanti;
function buy(){
            quanti = Number(document.querySelector(".quanti").value);
            kind = document.getElementById("carKind").value;
            console.log(kind);
            document.querySelector(".done").innerHTML = `You has just ordered ${quanti} ${colorCar} ${kind} car(s)`;
        }        

        function changeKind(){
            let kindChange = document.getElementById("carKind").value;
            document.querySelector(".left-section").innerHTML = `
            <img src="/Midterm/images/red-${kindChange}.jpg">
            <img src = "/Midterm/images/blue-${kindChange}.jpg">
            <img src = "/Midterm/images/white-${kindChange}.jpg">
            <img src = "/Midterm/images/yellow-${kindChange}.jpg">
            `;
        }
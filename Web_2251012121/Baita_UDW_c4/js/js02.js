const month = Number(prompt("Input the month"));
const year = Number(prompt("Input the year"));
const getDay = countDay(year,month);
document.querySelector(".js-count-day").innerHTML = `Month ${month} year ${year} has ${getDay} days`;
function countDay(year,month){
    switch(month)
    {
    case 1:case 3:case 5:case 7:case 8:case 10:case 12:{
        return 31;
    }
    case 2:{
        if(isLeap(year)===true) return 29;
        else return 28;
    }
    case 4:case 6:case 9:case 11:{
        return 30;
    }
}
}

function isLeap(year){
    if(year%400===0 || (year % 4 === 0 && year % 100 !== 0)){return true;}
    else {return false;}
}


function date(){
    const now = new Date();
    document.querySelector(".js-show_date").innerHTML = `Hôm nay, thứ ${Number(now.getDay()+2)} ngày ${now.getDate()}/${Number(now.getMonth()+1)}/${now.getFullYear()}`
}

function clock(){
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    let second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    document.querySelector(".js-clock").innerHTML = hour + ":" + minute + ":" + second;
}


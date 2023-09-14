function greeting() {
    const greet = document.querySelector(".js-name").value;
    document.querySelector(".greet").innerHTML = `Hello ${greet} !`;
}
function calAge(){
    const year = document.querySelector(".js-age-count").value;
    const now = new Date();
    const result = now.getFullYear() - year;
    document.querySelector(".js-result").innerHTML = `Your age is ${result}`;
}
let calculation = localStorage.getItem('calculation') || '';

    displayCalculation();

    function updateCalculation(value){
        calculation+=value;
        localStorage.setItem('calculation',calculation);
        displayCalculation();
    }

    function displayCalculation(){
        document.querySelector('.js-screen').innerHTML = calculation;
    }
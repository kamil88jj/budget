'use strict'


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time  = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц", ""),
    time  = prompt("Введите дату в формате YYYY-MM-DD");
    }
}
start();

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i ++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце" , ""),
            b = prompt("Во сколько обойдется?" , "");
    
        if (typeof(a) === "string" && typeof(a) !=null && typeof(b) !=null && a != '' && b !='' && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b; 
        }   else { 
            console.log("bad result");
            i --;
        }
    }
}
chooseExpenses();




function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    alert ("Ежедневный бюджет" +  appDate.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {
    if (appDate.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000 ) {
        console.log("Высокий уровень достатка");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectLevel();


function checkSavings() {
    if (appDate.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appDate.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appDate.monthIncome);
    }        
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i ++) {
        let questionOptExpenses = prompt( "Статья необязательных расходов?" , '');
        appDate.optionalExpenses[i] = questionOptExpenses;
        console.log(appDate.optionalExpenses);
        
    }
}

chooseOptExpenses();
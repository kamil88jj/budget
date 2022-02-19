'use strict'

let money = prompt("Ваш бюджет на месяц"),
    time  = prompt("Введите дату в формате YYYY-MM-DD");



let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце" , ""),
    a2 = prompt("Во сколько обойдется?" , ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце" , ""),
    a4 = prompt("Во сколько обойдется?" , "");

appDate.expenses.a1 = a2;
appDate.expenses.a3 = a4;

alert(appDate.budget / 30);



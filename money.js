let money;
let time;

function start() {
    money = +prompt('Your budget on this month?', "");
    time = prompt('Enter the date, in format YYYY-MM-DD', "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Your budget on this month?', "");
    }
}
start();

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        do {
            let a = prompt ("Enter the important expenses in this month?", ""),
                b = prompt ("Enter how much it will cost?", "");
    
            if (a && b) {
                console.log ("done!");
                appData.expenses[a] = b;
                break;
            } else {
                console.log('error');
                alert('Try again!');
            }
        } while(true);
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Everyday budget: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Minimal salary");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Average salary");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("High salary");
        } else {
            console.log ("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("How much is your savings?");
                percent = +prompt("Percent?");
    
            appData.monthIncome = save/100/12+percent;
            alert("Income per month from your deposit:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let questionOptExpenses = prompt("Optional expenses?", "");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
             
        }
    },
    chooseIncome: function() {
        let items = prompt("What can improve your budget? (Write point)", "");
        // Ввести в дополнительных доходах (chooseIncome) только строку
        // Не может оставить строку пустой
        // Не может отменить вопрос
        if (typeOf (items) !="string" || items == "" || typeOf(items) == null) {
           console.log("Incorect! Try again."); 
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Anything else?"));
            appData.income.sort();
        }
        //2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
        //Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
        appData.income.forEach (function (itemmassive, i) {
            alert("Additional methods of earnings: " + (i+1) + " - " + itemmassive);
        });
    }
};

// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
for (let key in appData) {
    console.log("Our program includes this data: " + key + " - " + appData[key]);   
}














// for (let i = 0; i < 2; i++) {
//     let a = prompt ("Enter the important expenses in this month?", ''),
//         b = prompt ("Enter how much it will cost?", '');

//     if (typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null && a != '' && b !='' && a.lengh < 50) {

//         console.log ("done!");

//         appData.expenses[a] = b;
//     } else {
//         console.log('error');
//         alert('Try again!');
//         i--;
//     }
// };


// let i=0;
// while (i < 2){
// let a = prompt("Enter the important expenses in this month?", ''),
//         b = prompt("Enter how much it will cost?", '');

//     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null &&
//         a != '' && b !='' && a.lengh < 50) {
//             console.log("done!");
//     appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

// let i=0;
// do {
//     let a = prompt("Enter the important expenses in this month?", ''),
//         b = prompt("Enter how much it will cost?", '');

//     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null &&
//         a != '' && b !='' && a.lengh < 50) {
//             console.log("done!");
//     appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2);

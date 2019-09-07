// ·        Восстановить порядок в меню, добавить пятый пункт
// ·        Заменить картинку заднего фона на другую из папки img
// ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
// ·        Удалить рекламу со страницы
// ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementsByClassName ('title'),
    column = document.querySelector ('.column'),
    adv = document.getElementsByClassName('adv'),
    prompt = document.getElementById ('prompt');


document.column.replaceChild = "newTxt[0], title[0]";

document.column.removeChild (adv[1]);

menuItem.sort();


let newItem = document.createElement ('newItem');
newItem.innerHTML = "Пятый пункт";
newItem.style.color = "White";
newItem.style.borderColor = "white";
menu.appendChild(newItem);

let newTxt = document.createElement('newTxt');
newTxt.innerHTML = "Мы продаем только подлинную технику Apple";


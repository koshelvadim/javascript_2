// домашка к четвертому уроку
'use strict';
 // 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. 
 //    Придумать шаблон, который заменяет одинарные кавычки на двойные.

 let str = "One: 'Hi Mary.'\nTwo: 'Oh, hi.'\nOne: 'How are you doing?'\nTwo: 'I'm doing alright. How about you?'\nOne: 'Not too bad. The weather is great isn't it?'\nTwo: 'Yes. It's absolutely beautiful today.'\nOne: 'I wish it was like this more frequently.'\nTwo: 'Me too.'\nOne: 'So where are you going now?'\nTwo: 'I'm going to meet a friend of mine at the department store'\nOne: 'Going to do a little shopping?'\nTwo: 'Yeah, I have to buy some presents for my parents.'\nOne: 'What's the occasion?'\nTwo: 'It's their anniversary.'\nOne: 'That's great. Well, you better get going. You don't want to be late.'\nTwo: 'I'll see you next time.'\nOne: 'Sure. Bye.'";

//  console.log(str.replace(/'/g, '"'));

 // 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
 
//  console.log(str.replace(/\B'/g, '"'));

 /** 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. 
 * При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
 * a. Имя содержит только буквы.
 * b. Телефон имеет вид +7(000)000-0000.
 * c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
 * d. Текст произвольный.
 * e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.
 **/

 const form = document.querySelector('.formvalidation');
 const nameForm = document.getElementById('name');
 const telephoneForm = document.getElementById('telephone');
 console.log(telephoneForm);

 const nameRegExp = /[A-Za-zА-Яа-яЁё]/gi;


form.addEventListener('submit', function(event) {
    
 })

//  function validName() {
//     if((nameForm.value).test(nameRegExp)){
//         console.log(true);
//     }   else {
//         console.log(false);
//     }
//  }






// let regExp = new RegExp('выражение', 'флаги');
// let regExp = /regexp/flags

// i - поиск без учета регистра
// g - множественный поиск
// m - многострочный поиск

// let str = 'Язык JavaScript называется так из-за популярности языка Java';
// let regExp = new RegExp('java', 'i');

// console.log(regExp);

// search
// -1 - если нет совпадений
// возвращает индекс первого совпадения
// console.log(str.search(regExp));

// match
// без флага g вернет массив-объект с подробной информацией о вхождении
// с флагом g вернет список всех найденных вхождений
// null если совпадений не найдено
// console.log(str.match(/java/ig));

// replace
// console.log('+7 (000)000-00-00'.replace('-', ':'));
// console.log('+7 (000)000-00-00'.replace(/-/g, ':'));

// let name = 'Snow, John';

// console.log(name.replace(/([a-z]+), ([a-z]+)/i, '$2 $1'));
// console.log(name.replace(/([a-z]+), ([a-z]+)/i, 'Было: $&\nСтало: $2 $1'));

// Classes
// \d - [0123456789] - [0-9]
// \D - [^0123456789] - [^0-9]
// \w - [a-zA-Z0-9_]
// \W
// \s - space, tab, \n
// \S
// \b - граница слова
// \B - не граница слова
// [а-яА-ЯёЁ]

// квантификаторы
// {n} - строго n раз
// {n,m} - от n до m раз
// {n,} - от n до бесконечности
// {,m} - от 0 до m раз

// сокращения
// + - {1,}
// * - {0,}
// ? - {0,1}

// console.log('+7-(000) 000:00-00'.replace(/\D/g, '')); // 70000000000
// console.log('+7-(000) 000:00-00'.match(/\d+/g).join('')); // 70000000000

// console.log('color colour'.match(/colou?r/g));
// console.log('color colour colotr'.match(/colo[ut]?r/g));

// console.log('Язык JavaScript это не Java вам =)'.match(/\bjava\B/i));

// console.log('JavaScript это не java'.match(/^java/i));
// console.log('JavaScript это не java'.match(/java$/i));
// console.log('JavaScript это не java'.match(/^java$/i));

// console.log('Chapter 7.2 7g2'.match(/\d\.\d/g));

// test (true|false)
// console.log(/java/i.test(str));

// let result;
// let regExp2 = /java/ig;
//
// console.log(`Начальный индекс lastIndex ${regExp2.lastIndex}`);
//
// while(result = regExp2.exec(str)) {
//     console.log(result);
//     console.log(`Текущий lastIndex ${regExp2.lastIndex}`);
// }
//
// console.log(`Конечный lastIndex ${regExp2.lastIndex}`);

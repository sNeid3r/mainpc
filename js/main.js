// Arrays

//var colors = ['red', 'blue', 'green'];

//colors.push('yellow');

//alert(colors);

// var numbers = [2,5,7,9, 'Eight'];

// alert(numbers.sort());
// alert(numbers.reverse());

//    for(var i = 0; i < 10; i++) {
//        console.log(i);
//   }

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// var numbers = [1,2,3,4,5,6];

// // numbers.forEach(function(numbers){
// //     console.log(numbers);
// // });

// for(var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// var var1 = 1;
// var var2 = 4;

// if (var1 != var2 && var1 == 1) {
//     console.log('This is true');
// } else {
//     console.log('This is false');
// };

// var fruit = 'apple';

// switch (fruit) {
//         case 'banana':
//             alert('i love ' + fruit);
//             break;
//         case 'apple':
//         alert('I love ' + fruit);
//         break;
//     default:
//         alert('Mimimi');
//         break;
// }

// object literal
// var person = {
//     firstname: 'Mike',
//     lastname: 'Singer',
//     age: 35,
//     children: ['mike', 'mandy'],
//     adress: {
//         street: 'Wilfredo Springs',
//         city: 'Raynorside',
//         state: 'Nebraska',
//     },
//     fullName: function () {
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// console.log(person.fullName());

// object constructor
// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'round';

// apple.describe = function () {
//     return 'This apple is ' + apple.color + ' and it is ' + apple.shape;    
// }

// console.log(apple.describe());

// Constructor Pattern
// function Fruit(name, color, shape) {
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
    
//     this.describe = function () {
//         return 'A ' + this.name + ' is the color ' + this.color + ' is the shape ' + this.shape;
//     }
// }

// var apple = new Fruit('apple', 'red', 'round');

// var melon = new Fruit('melon', 'green', 'oval');

// console.log(melon.describe());

// var users = [
//     {
//         name: 'John Smith' ,
//         age: 30
//     },
//     {
//         name: 'Evalyn Runolfsson' ,
//         age: 24
//     },
//     {
//         name: 'Mike Stark' ,
//         age: 6
//     }
// ];

// console.log(users[0].name);


// Events - look in html line 18
// function doClick() {
//     alert('You clicked');
// };

// function changeText(id) {
//     id.innerHTML = 'You Clicked';
// }

// function changeText() {
//     var heading = document.getElementById('h1header');
//     heading.innerHTML = 'You clicked';
// }

// function showDate() {
//     var time = document.getElementById('time');
//     time.innerHTML = Date();
// }

// function clearDate() {
//     var time = document.getElementById('time');
//     time.innerHTML= ' ';
// }


// FORMS
function changeBackground(x) {
    console.log(x.value);
    var body = document.getElementById('h1header');
    h1header.style.color = x.value;
}

function validateForm() {
    var firstName = document.forms['myForm'] ['firstName'].value;

    if (firstName == null || firstName == ' ') {
      alert('First Name is required');
      return false;  
    }

    if (firstName.lenght < 3) {
        alert('At least 3 characters');
        return false;  
      }
}
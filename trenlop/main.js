// ES1------------------------------------------------------------

// const test3 = {
//     username: "cuonglephu",
//     password: '12345',
//     sum: ['cuonglephu', '12345'],
//     email: 'cuonglephu239@gmail.com',
//     add : {
//         one : {
//             open: 12,
//             close: 15
//         },
//         two : {
//             open: 12,
//             close: 15
//         },
//         three : {
//             open: 12,
//             close: 15
//         },
//     },
//     order: function(test1, test2){
//         return [this.username[test1], this.password[test2]];
//     }
// }
// const {add = []} = test3;
// console.log(add);

// const {
//     fri : {
//         open: c,
//         close: b
//     },
// } = test3
// console.log(c, b)

// const {email, password} = test3;
// console.log(email, password);

// const {
//     email: newEmail,
//     username: newPassword,
// } = test3;
// console.log(newEmail, newPassword)

// const [username, password] = test3.sum
// // console.log('username:',username,"password:", password)

// // biến mutating  variables
// let a = 111;
// let b= 34;
// const ojb = {a: 4, b: 5, c: 5}
// ({a, b} = ojb);
// console.log(a, b)
// const test = (n) => {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
//   console.log("/n");
// };
// test(9);

// const app = (n) => {
//     for(let i = 1; i<=10; i++){
//         console.log(`${i} * ${n} = ${i*n}`)
//     }
// }
// app(5)

// const arr = [1, 2, 3];
// // const newarr = [4, 5, 6, ...arr];
// const newarr = [4, 5, 6, arr[0], arr[1], arr[2]]
// console.log(newarr)

//test today
// const test1 = [1,2,3,4];
// const test2= [5, 6, test1[0], test1[1], test1[2], test1[3]]
// console.log(test2);

// const maths = Math.max(...test1);
// console.log(maths);
//  const test1 = {
//     name: "le phu cuong",
//     hometwo: "thanh hoa",
//     addInfo : ['lephucuong', 'thanhhoa'],
//     order : {
//        test3: {
//         height: 12
//        }
//     },
// }

// const [name, hometwo] = test1
// console.log(name, hometwo)

// const {order = []} = test1
// // console.log(order);

// function tinhCanhHuyen(a, b) {
//   var canhHuyen = Math.sqrt(a * a + b * b);
//   return canhHuyen;
// }
// var canhA = 3;
// var canhB = 4;
// var canhHuyen = tinhCanhHuyen(canhA, canhB);
// console.log(
//   "Cạnh huyền của tam giác vuông có hai cạnh a = " +
//     canhA +
//     " và b = " +
//     canhB +
//     " là: " +
//     canhHuyen
// );

// const arr = [1,2,3,4,5];
// function remove(listArr) {
//     const [a, b, arr] = listArr;
//     return arr;
// }
// const arrs = remove(arr);
// console.log(arrs);
// console.log(arr)

// const arrs = [5,6,7,8];
// function newTest(test2) {
//     const [a, ...arr] = test2
//     return arr;
// }
// const arr = newTest(arrs)
// console.log(arr)
// console.log(arrs)

// ES2------------------------------------------------------------

// try {
//  let x = y + 10
//  console.log('không được in ra !');
// }catch(err) {
//     console.log('lỗi', err);
// }

// function test1(a, b) {
//     try {
//         if(a===0 || b=== 0){
//             console.log("không thể chia cho 0!")
//         }
//         let kq = a/b;
//         // return kq;
//         console.log('kết quả: ',kq);
//     }catch(error){
//         console.log('lỗi', er)
//     }
// }

// test1(10, 2);

// ES3-------------------------------------------------------------

//math
// let num = 1.66;
// let roundNum = Math.round(num);
// console.log(roundNum)

// let sqrtNum = Math.sqrt(2);
// console.log(sqrtNum);

// let random = Math.floor(Math.random() * 20) +1;
// console.log(random)

//array
// let courses = ['js', 'php', 'java', 'reactjs'];
// let length = courses.length;
// const push = courses.push('nodejs');

// console.log(push)
// console.log(length);

// let test = courses[0];
// console.log(test);

// courses.forEach(function(te) {
//     console.log(te);
// })

// const all = courses
// console.log(all);

//json
// let info = {
//     "name" : "lê phú cường",
//     "age" : 21,
//     "hometwo": "new york"
// };
// //json.stringify chuyen doi doi tuong tanh chuoi
// let infoString = JSON.stringify(info);
// console.log(infoString);
// //json.parse chuyen chuoi json thanh doi tuong json
// let infoObject = JSON.parse(infoString);
// console.log(infoObject.name);

// ES5----------------------------------------------------------------
//foreach(lặp qua mảng in ra phần tử)
// var number = [1,2,3,4,5,6,7,8,9];
// // console.log(number)
// number.forEach(function(num) {
//     console.log(num);
// })

//reduce (tính tổng các pt trong mangr
// var number = [1,2,3,4,5,6,7,8,9];
// var sum = number.reduce(function(a,b) {
//     return a + b
// }, 0);
// console.log(sum);

//use strict(kiểm tra ngiêm ngặt hơn)
// "use strict";
// x = 10;
// console.log(x);

// function test() {
//     x=10;
//     return x;
// }
// console.log(test);

//map nhân mỗi pt trong mảng 2 và tạo ra
// var number = [1,2,3,4,5,6,7,8,9];
// var x2number = number.map(function(num){
//     return num * 2;
// })
// console.log(x2number);

// ES6---------------------------------------------------------------
// classes
// class Info {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         return `name: ${this.name} and age: ${this.age} tuổi`;
//     }
// }
// //tạo info
// let info = new Info('lê phú cường', 21);
// console.log(info.greet());

//destructuring
// let number = [1,2,3];
// let [a, b, c] = number
// console.log(a,b,c)

// let info = {
//     name : "cuong",
//     age: 25
// }
// let {name, age} = info
// console.log(name, age)

//ES7---------------------------------------------------------------
//array.prototype.includes sử dụng để check trong mảng có chứa gt cụ thể hay không có thì true, không thì fallse
// let number = [1,2,3,4,5];
// console.log(number.includes(3));//t
// console.log(number.includes(10));//f

//async/await
// function test1() {
//     return new Promise((newtest) => {
//         setTimeout(() => {
//             newtest('xin chao cac ban!');
//         }, 4000);
//     })
// }
// async function test2(){
//     console.log('loading...');
//     let ressult = await test1();
//     console.log(ressult);
// }
// test2();

//Object.entries trả về một mảng chứa cặp value
const obj = {a:1, b:2, c:3}
console.log(Object.entries(obj));

//nullish coalescing operator(??)
let test1 = null ?? "test1"
console.log(test1)
let test2 = 0 ?? "test2"
console.log(test2)

//optional chaining(?)
let info = {
    name: "cuong",
    address: {
        hometwo: 'thanh hoa'
    }
}
console.log(info?.name);
console.log(info?.address.hometwo);

//set 
const arr = [1,2,3,4,5,6];
const set1 = new Set(arr);
console.log(set1);
const arr2 = {a:1, b:2, c:3};
console.log(Object.entries(arr2))
arr.forEach((test) => {
    console.log(test);
})
for(let item of arr) {
    console.log(item);
}
let test = 'undefined' ?? "Bạn là ai";
console.log(test);
const test3 = arr.reduce(function(a, b){
    console.log("tính tổng trong mảng");
    return a+b;
})
console.log(test3)

const test4 = {
    add : {
        h: "dsada",
        hl: 21
    },
    name: "lephucuong",
    age: 21,
}

const {a, b} = test4;
console.log(a,b);










// Private Class Fields
// class Couter {
//     #count = 0 //private
//     increment() {
//         this.#count++;
//         console.log(this.#count)
//     }
// }
// let counter = new Couter();
// console.log(counter);
// console.log(counter);

//ontap ECMASCRIPT---------------------------------------------------------
// function test1(a,b){
//     try {
//         if(a === 0 || b===0){
//             console.log('không thể bằng 0');
//         }
//         let ressult = a+b;
//         console.log(ressult);
//     }catch(err){
//         console.log("lỗi",err)
//     }
// }
// test1(0,0)

// let a = 3.444;
// let b = Math.round(a)
// console.log(b)
// let c = Math.sqrt(a)
// console.log(c)
// let d = Math.floor(Math.random() * 20) + 1
// console.log(d)

// let info = {
//     name: "cuong",
//     age : 21
// }
// const stringifys = JSON.stringify(info)
// console.log(stringifys);
// const parses = JSON.parse(stringifys)
// console.log(parses)

// const info = [1, 2, 3, 4, 5]
// info.forEach((ina) => {
//     console.log(ina);
// })

// var arr = [1,2,3,4,5,6,6,7,8]
// var sum = arr.reduce(function(a,b){
//     return a+b
// },0)
// console.log(sum);

// var arr = [1,2,3,4,5,6,6,7,8]
// var test = arr.map(function(a){
//     return a*2;
// })
// console.log(test)

// "use strict";
// let x=1;
// console.log(x);

// class test1 {
//     constructor(name, age, hometwo) {
//         this.name = name,
//         this.age = age,
//         this.hometwo = hometwo
//     };
//     greet() {
//         return `tên la: ${this.name} and tuổi là ${this.age} and quê quán là ${this.hometwo}`;
//     }
// }
// let info = new test1("cường", 21, "thanh hoá");
// console.log(info.greet());

// console------------------------------------------------------------------
// Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });
// console.group('simple');
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();
// Add CSS to logs
const styles = 'padding: 10px; background-color: red; border-radius: 4px; font-weight: bold; color: white';
console.log('%c Tôi đang học đây !', styles);

// let test =1;
// test = 1;
// console.log(test)
// if(true){
//     test = test+1;
// }
// console.log(test);

// let s = "hello"
// let x = s.toUpperCase();
// let xx = s.toLowerCase();
// console.log(x)
// console.log(xx)

// const myString = 'developer';
// let myNewString;
// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3:
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
// console.log(myNewString);

// tren lop ---------------------------------------------------------------
// let test = "Tiêu đề";
// let test2= " ";
// newTest = test2 || 'Tiêu đề đã chọn ' || test;
// console.log(newTest);
// function createSequentialIdGenerator(baseValue) {
// let i=baseValue;
//     return function fun(){
//         i++;
//         return i;

//     }
//   // your code here
// }

// const generateUniqueId = createSequentialIdGenerator(999);

// console.log(generateUniqueId()); // Expected output: 1000
// console.log(generateUniqueId()); // Expected output: 1001
// console.log(generateUniqueId()); // Expected output: 1002

// Abhay
//   Just now
// Find whether all students in the class have passed the exam
// Rule: Passed - If the average marks of a student is> 40, else failed
// Use higher-order functions (eg: some, reduce, every)
// const students = [
//   { name: 'John', marks: [70, 85, 90] },
//   { name: 'Jane', marks: [60, 75, 80] },
//   { name: 'David', marks: [0, 5, 65] }
// ];

// function checkAllStudentsPassed(studentsArr) {
//     var result="passed";
//     students.forEach(element => {
        
//         let sum=element.marks.reduce((total,curr)=> total+curr,0);
//         let average=sum/3;
//         console.log(average);
//         if(average<40){
//             result="failed";
//         }
        
        
//     });
//     return result;
//   // Your code here
// }

// const allStudentsPassed = checkAllStudentsPassed(students);
// console.log(allStudentsPassed)

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// const resolvert = async() =>{
//     console.log(await promise1)
// }

// // promise1.then(res => {
// //   console.log(res)
// // })
// resolvert()
// console.log('end');
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end')
// console.log('start')
// const fn = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// })
// console.log('middle')
// fn.then(res => {
//   console.log(res)
// })
// console.log('end')
// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')

// console.log('start')
// setTimeout(() => {
//   console.log('setTimeout')
// })
// Promise.reject().then(() => {
//   console.log('resolve')
// })
// console.log('end')
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4)



// console.log('start');
// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');


// const promise = new Promise((resolve, reject) => {
//     resolve('Some Error Occurred');
//   })
//   .catch(error => {
//      return console.log("Catch 1 >>", error);
//   })
//   .catch(error => {
//     console.log("Catch 2 >>", error);
//   })
//   .then(result => console.log("Result >>", result));

const promise = new Promise(res => res(2));

promise.then(val_1 => {
        console.log(val_1);
       return val_1 * 2;
    })
    .then(val_2 => {
        console.log(val_2);
        return val_2 * 2;
    })
    .finally(val_3 => {
        console.log(val_3);
        console.log("heloo")
        return val_3 * 2;
    })
    .then(val_4=> {
        console.log(val_4);
    })





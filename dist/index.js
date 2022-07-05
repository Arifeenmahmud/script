"use strict";
/*

npm install -g typescript
C:\Users\Arifeen\Desktop\exampleType>code .
node index.ts
tsc index.ts
node index.js
tsc --init
C:\Users\Arifeen\Desktop\exampleType>cd src
C:\Users\Arifeen\Desktop\exampleType\src>tsc index.ts
C:\Users\Arifeen\Desktop\exampleType\src>tsc
*/
// console.log("IDB is supported");
// let x: number = 10;
// let y: number = 20;
// let z: number = x + y;
// var a: number = 10;
// console.log(z);
// let x!: string;
// let y: boolean = true;
// let z: string = x + " " + y;
// console.log(z);
// let firstname: string = "IDB-BISEW";
// let lastname: string = "J2EE";
// console.log(`Hi!, ${firstname} ${lastname} Batch`);
// let items: Number[] = [1, 2, 3, 4];
// console.log(items);
// let items1: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'];
// console.log(items1[2]);
// let x: [string, number];
// x = ["IDB-BISEW", 10];
// console.log(x[1]);
// let x: [string, number][];
// x = [
//     ["IDB-BISEW", 10],
//     ["J2EE", 20],
//     ["IDB-BISEW", 10]
// ];
// console.log(x[2][1]);
// enum Color {
//     Red = 1,
//     Green,
//     Blue = 10,
// };
// console.log(Color.Red);
// let c: Color = Color.Green;
// let d: Color = Color.Blue;
// console.log(c);
// console.log(d);
// let notSure: unknown = 4;
// console.log(notSure);
// let notSure: any = 4;
// console.log(notSure);
// notSure = "IDB-BISEW";
// console.log(notSure);
// notSure = false;
// console.log(notSure);
// let a: string | number = "IDB-BISEW";
// console.log(a);
// let items: string[] = ["IDB-BISEW", "J2EE", "IDB-BISEW", "BITL"];
// for (let i of items) {
//     console.log(i);
// }
// let items: string[] = ["J2EE", "JAVA", "IDB-BISEW", "BITL"];
// let i = 0;
// while (items[i]) {
//     console.log(items[i]);
//     i++;
// }
// do {
//     console.log(items[i]);
//     i++;
// } while (i < items.length);
// const User = {
//     name: "IDB-BISEW",
//     age: 20
// }
// console.log(User);
// console.log(User.name);
// console.log(User.age);
// console.log(User.name + " " + User.age);
// console.log(User.name + " " + User.age + " " + "Batch");
// console.log(User.name + " " + User.age + " " + "Batch" + " " + "IDB-BISEW");
// console.log(User.name + " " + User.age + " " + "Batch" + " " + "IDB-BISEW" + " " + "J2EE");
// const User1: { username: string, password: number } = {
//     username: "IDB-BISEW",
//     password: 20
// }
// console.log(User1);
// console.log(User1.username);
// console.log(User1.password);
// console.log(User1.username + " " + User1.password);
// console.log(User1.username + " " + User1.password + " " + "Batch");
// console.log(User1.username + " " + User1.password + " " + "Batch" + " " + "IDB-BISEW");
// console.log(User1.username + " " + User1.password + " " + "Batch" + " " + "IDB-BISEW" + " " + "J2EE");
// type User2 = {
//     username: string,
//     password: number
// }
// let User2: User2 = {
//     username: "IDB-BISEW",
//     password: 20
// }
// console.log(User2);
// console.log(User2.username);
// console.log(User2.password);
// console.log(User2.username + " " + User2.password);
// console.log(User2.username + " " + User2.password + " " + "Batch");
// console.log(User2.username + " " + User2.password + " " + "Batch" + " " + "IDB-BISEW");
// console.log(User2.username + " " + User2.password + " " + "Batch" + " " + "IDB-BISEW" + " " + "J2EE");
// interface User3 {
//     username: string,
//     password: number
// }
// let User3: User3 = {
//     username: "IDB-BISEW",
//     password: 20
// }
// console.log(User3);
// console.log(User3.username);
// console.log(User3.password);
// console.log(User3.username + " " + User3.password);
// console.log(User3.username + " " + User3.password + " " + "Batch");
// console.log(User3.username + " " + User3.password + " " + "Batch" + " " + "IDB-BISEW");
// console.log(User3.username + " " + User3.password + " " + "Batch" + " " + "IDB-BISEW" + " " + "J2EE");
// let x: unknown = "IDB-BISEW";
// let y: number = (x as number);
// console.log(y);
// let x: unknown = "IDB-BISEW Batch 49 J2EE";
// let y: string = <string>x;
// console.log(y);
// function sum(): number {
//     return 10;
// }
// console.log(sum());
// function display(): void {
//     console.log("IDB-BISEW");
// }
// display();
// let x = display();
// console.log(x);
// function newsum(a: number, b: number): number {
//     return a + b;
// }
// console.log(newsum(10, 20));
// interface point {
//     readonly x: number;
//     y: string;
// }
// let point1: point = { x: 10, y: "test" };
// // point1.x = 20;
// console.log(point1.x);
// console.log(point1.y);
// interface calculate {
//     (a: number, b: number): number;
// }
// let calculate1: calculate = function (a: number, b: number): number {
//     return a + b;
// }
// console.log(calculate1(10, 20));
// interface calculate {
//     (a: number, b: number): number;
// }
// let obj: calculate = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(obj(15, 20));
// class greeting {
//     msg!: string;
//     constructor() {
//     }
//     set greetings(gtr: string) {
//         this.msg = gtr;
//     }
//     get greetings(): string {
//         return this.msg;
//     }
// }
// let obj = new greeting();
// obj.greetings = "IDB-BISEW";
// console.log(obj.msg);
// interface clockInterface {
//     a: Date;
// }
// class clock implements clockInterface {
//     a: Date = new Date();
//     sayTime(): string {
//         return `${this.a}`;
//     }
// }
// let obj1 = new clock();
// console.log(obj1.a);
// console.log(obj1.sayTime());
/*

class p {
    x!: string;
    y!: number;
    constructor(x: string, y: number) {
        this.x = x;
        this.y = y;
    }
}
class q extends p {
    z!: string;
    constructor(x: string, y: number, z: string) {
        super(x, y);
        this.z = z;
    }
}
let obj0 = new p("IDB-BISEW", 20);
console.log(obj0.x);

let obj1 = new q("IDB-BISEW", 20, "Batch");
console.log(obj0.x, obj1.y);

let obj = new q("IDB-BISEW", 20, "Batch");
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
console.log(obj.x + " " + obj.y + " " + obj.z);
console.log(obj.x + " " + obj.y + " " + obj.z + " " + "Batch");
console.log(obj.x + " " + obj.y + " " + obj.z + " " + "Batch" + " " + "IDB-BISEW");
console.log(obj.x + " " + obj.y + " " + obj.z + " " + "Batch" + " " + "IDB-BISEW" + " " + "J2EE");
*/
class p {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    saySomething() {
        console.log("I am Parant " + this.x + " " + this.y);
    }
}
class q extends p {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    saySomething() {
        console.log(" I am Child " + this.x + " " + this.y + " " + this.z);
    }
}
let obj0 = new p(" IDB-BISEW", 20);
console.log(obj0.x);
let obj1 = new q(" IDB-BISEW", 20, "Batch");
console.log(obj0.x, obj1.y);
console.log(obj0.saySomething());
console.log(obj1.saySomething());

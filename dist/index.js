"use strict";
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
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
let c = Color.Green;
let d = Color.Blue;
console.log(c);
console.log(d);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var StudentManager_1 = require("./StudentManager");
var student1 = new Student_1.Student('tai', 'A', 2);
var student2 = new Student_1.Student('tai2', 'A', 4);
var student3 = new Student_1.Student('tai3', 'A', 6);
var student4 = new Student_1.Student('tai4', 'A', 8);
var student5 = new Student_1.Student('tai5', 'A', 10);
var manager = new StudentManager_1.StudentManager();
manager.add(student1);
manager.add(student2);
manager.add(student3);
manager.add(student4);
manager.add(student5);
var a = manager.thongke();
console.log(a);

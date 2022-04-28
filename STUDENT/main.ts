import {Student} from "./Student";
import {StudentManager} from "./StudentManager";

let student1 = new Student('tai','A',2)
let student2 = new Student('tai2','A',4)
let student3 = new Student('tai3','A',6)
let student4 = new Student('tai4','A',8)
let student5 = new Student('tai5','A',10)

let manager = new StudentManager();
manager.add(student1)
manager.add(student2)
manager.add(student3)
manager.add(student4)
manager.add(student5)

let a = manager.thongke()
console.log(a)
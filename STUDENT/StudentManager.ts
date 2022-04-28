import {Student} from "./Student";

export class StudentManager {
    listStudent: Student[] = [];

    constructor() {
    }

    show(){
        console.log(this.listStudent)
    }

    add(student:Student){
        this.listStudent.push(student);
    }

    update(index1:number,student:Student){
        this.listStudent.forEach((value,index)=> {
            if(index==index1){
                this.listStudent[index1]=student;
            }

        })
    }

    delete(index1) {
        this.listStudent.forEach((value,index)=> {
            if(index==index1){
                this.listStudent.splice(index1,1)
                return console.log("xoa thanh cong")
            }

        })
    }

    thongke():object{
        let count1:number = 0;
        let count2:number = 0;
        let count3:number = 0;
        this.listStudent.forEach((student)=>{
            if(student.ponit<6){
                count1++
            }

            if(student.ponit>=6&& student.ponit<=8){
                count2++
            }

            if(student.ponit>=8){
                count3++
            }
        })
        return {
            sinhviennhohon6: count1+" nguoi",
            sinhviennhohon6_8: count2+" nguoi",
            sinhvienlonhon9: count3+" nguoi"
        }
    }
}
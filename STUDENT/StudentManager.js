"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.listStudent = [];
    }
    StudentManager.prototype.show = function () {
        console.log(this.listStudent);
    };
    StudentManager.prototype.add = function (student) {
        this.listStudent.push(student);
    };
    StudentManager.prototype.update = function (index1, student) {
        var _this = this;
        this.listStudent.forEach(function (value, index) {
            if (index == index1) {
                _this.listStudent[index1] = student;
            }
        });
    };
    StudentManager.prototype.delete = function (index1) {
        var _this = this;
        this.listStudent.forEach(function (value, index) {
            if (index == index1) {
                _this.listStudent.splice(index1, 1);
                return console.log("xoa thanh cong");
            }
        });
    };
    StudentManager.prototype.thongke = function () {
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        this.listStudent.forEach(function (student) {
            if (student.ponit < 6) {
                count1++;
            }
            if (student.ponit >= 6 && student.ponit <= 8) {
                count2++;
            }
            if (student.ponit >= 8) {
                count3++;
            }
        });
        return {
            sinhviennhohon6: count1 + " nguoi",
            sinhviennhohon6_8: count2 + " nguoi",
            sinhvienlonhon9: count3 + " nguoi"
        };
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;

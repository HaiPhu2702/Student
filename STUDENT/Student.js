"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, classs, point) {
        this._name = name;
        this._classs = classs;
        this._ponit = point;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "classs", {
        get: function () {
            return this._classs;
        },
        set: function (value) {
            this._classs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "ponit", {
        get: function () {
            return this._ponit;
        },
        set: function (value) {
            this._ponit = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;

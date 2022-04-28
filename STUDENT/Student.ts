export class Student {
    private _name:string;
    private _classs:string;
    private _ponit:number;


    constructor(name: string,classs:string,point:number){
        this._name=name;
        this._classs=classs;
        this._ponit=point;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get classs(): string {
        return this._classs;
    }

    set classs(value: string) {
        this._classs = value;
    }

    get ponit(): number {
        return this._ponit;
    }

    set ponit(value: number) {
        this._ponit = value;
    }



}
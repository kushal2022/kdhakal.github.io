class Computer{
    constructor(ram, cpu, storage) {
        this._ram = ram;
        this._cpu = cpu;
        this._storage = storage;
    }
    getCpu() {
        return this._cpu;
    }
    runProgram(program) {
        console.log ("running: " + program);
    }
}
class Laptop extends Computer{
    constructor(ram, cpu, storage, battery) {
        super(ram, cpu, storage);
        this._battery = battery;
    }
    carryAround(){
        console.log ("carrying laptop:  cpu " + this.getCpu() +" ram: " + this._ram + " storage: " + this._storage + " battery: " + this._battery)
    }
}

let laptop = new Laptop(16,"intel", '1TB', '42000maH');
laptop.runProgram('myProgram');
laptop.carryAround();
interface vehicle {
    specification():string;
}

class car implements vehicle{

    private model:string;
    private year:number;
    private mileage:string;
    private color:string;

    constructor(model,year,mileage,color){
        this.model=model;
        this.year=year;
        this.mileage=mileage;
        this.color=color;
    }

    public getModel():string{
        return this.model;
    }

    public setmModel(model):void{
        this.color=model;
    }

    public getYear():number{
        return this.year;
    }

    public setYear(Year):void{
        this.year=Year;
    }
    public getMileage():string{
        return this.mileage;
    }

    public setMileage(Year):void{
        this.year=Year;
    }

    public getColor():string{
        return this.color;
    }

    public setcolor(color):void{
        this.color=color;
    }
    public specification():string{
        return"";
    }
}
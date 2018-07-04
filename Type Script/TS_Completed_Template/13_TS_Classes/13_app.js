var car = /** @class */ (function () {
    function car(model, year, mileage, color) {
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }
    car.prototype.getModel = function () {
        return this.model;
    };
    car.prototype.setmModel = function (model) {
        this.color = model;
    };
    car.prototype.getYear = function () {
        return this.year;
    };
    car.prototype.setYear = function (Year) {
        this.year = Year;
    };
    car.prototype.getMileage = function () {
        return this.mileage;
    };
    car.prototype.setMileage = function (Year) {
        this.year = Year;
    };
    car.prototype.getColor = function () {
        return this.color;
    };
    car.prototype.setcolor = function (color) {
        this.color = color;
    };
    car.prototype.specification = function () {
        return "";
    };
    return car;
}());




class CustomDate {

    constructor(dateTime) {
        if(dateTime) {
            this.dateTime = dateTime;
        } else {
            this.dateTime = '2022-16-01'
        }
    }

    getTime() {

    }

    getHour() {
        
    }
}

const newDate = new CustomDate('2019-02-04');

console.log(newDate);
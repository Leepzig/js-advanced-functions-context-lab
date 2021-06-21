/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


const createEmployeeRecord = (arr) => {
    const employee = {
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return employee
}

const createEmployeeRecords = (arrOfArrs) => {
    return arrOfArrs.map(record => createEmployeeRecord(record))
}

const createTimeInEvent = (timeStamp) => {
    const time = timeStamp.split(" ")
    const event = {type:"TimeIn", hour: time[1], date: time[0]}
    console.log(this)
    //console.log(this.timeInEvents)
    console.log(typeof this.timeInEvents)
    //console.log(bpRecord)
    //this.timeInEvents.push(event)
}

const createTimeOutEvent = (timeStamp) => {
    const event = {type:"TimeOut", hour: time[1], date: time[0]} 
    this.timeOutEvents.push()
}
const hoursWorkedOnDate = (date) => {

}


let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
console.log(bpRecord)
let updatedBpRecord = createTimeInEvent.call(bpRecord, "2014-02-28 1400")
//let newEvent = updatedBpRecord.timeInEvents[0]






let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
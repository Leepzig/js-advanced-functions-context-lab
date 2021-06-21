/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(arr) {
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

function createEmployeeRecords(arrOfArrs) {
    return arrOfArrs.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(timeStamp) {
    const time = timeStamp.split(" ")
    const event = {type:"TimeIn", hour: parseInt(time[1]), date: time[0]}
    this.timeInEvents.push(event)
    return this
}

function createTimeOutEvent(timeStamp) {
    const time = timeStamp.split(" ")
    const event = {type:"TimeOut", hour: parseInt(time[1]), date: time[0]}
    this.timeOutEvents.push(event)
    return this
}
function hoursWorkedOnDate(date) {
    const inEvent = this.timeInEvents.find(event => event.date === date)
    const outEvent = this.timeOutEvents.find(event => event.date === date)
    return (outEvent.hour - inEvent.hour)/100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(array, name) {
    return array.find(employee => employee.firstName == name)
}

function calculatePayroll(array) {
    const totals = array.map(record => allWagesFor.call(record))
    return totals.reduce((total, element) => total + element)
}
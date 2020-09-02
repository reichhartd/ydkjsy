const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinute) {
    const twoDigitHoursRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
    if (!startTime.match(twoDigitHoursRegex)) {
        startTime = '0'.concat(startTime)
    }

    if (dayStart > startTime) {
        return false
    }

    const datePrefix = '1970-01-01T';
    const dateAppendix = ':00Z';
    const dayEndDate = new Date(datePrefix.concat(dayEnd).concat(dateAppendix))
    const startTimeDate = new Date(datePrefix.concat(startTime).concat(dateAppendix))
    if (dayEndDate <
        new Date(startTimeDate.getTime() + durationMinute * 60000)
       ) {
        return false
    }

    return true
}

console.log(false, scheduleMeeting("7:00", 15))
console.log(false, scheduleMeeting("07:15", 30))
console.log(true, scheduleMeeting("7:30", 30))
console.log(true, scheduleMeeting("11:30", 60))
console.log(true, scheduleMeeting("17:00", 45))
console.log(false, scheduleMeeting("17:30", 30))
console.log(false, scheduleMeeting("18:00", 15))

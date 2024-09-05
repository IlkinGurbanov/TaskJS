function calculateDaysBetweenDates(dateString1, dateString2) {
    const [day1, month1, year1] = dateString1.split('.').map(Number);
    const [day2, month2, year2] = dateString2.split('.').map(Number);
    const date1 = new Date(year1, month1 - 1, day1);
    const date2 = new Date(year2, month2 - 1, day2);
    
    const differenceMs = Math.abs(date2 - date1);
    
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceDays = Math.floor(differenceMs / millisecondsPerDay);
    
    return differenceDays;
}

const date1 = "10.04.2024";
const date2 = "25.04.2024";
const daysDifference = calculateDaysBetweenDates(date1, date2);
console.log("Number of days between the two dates:", daysDifference);

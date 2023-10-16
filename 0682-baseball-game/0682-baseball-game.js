/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const records = [];
    
    for (const operation of operations) {
        if (operation === "+") {
            const add = Number(records[records.length - 2]) + Number(records[records.length - 1]);
            records.push(add);
        } else if (operation === "D") {
            const double = Number(records[records.length - 1]) * 2;
            records.push(double);
        } else if (operation === "C") {
            records.pop();
        } else {
            records.push(Number(operation));
        }
        console.log(records)
    }
    
    const sum = records.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    
    return sum;
};
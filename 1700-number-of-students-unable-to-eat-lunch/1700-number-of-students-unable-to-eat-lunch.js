/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let loopNoProgress = 0;
    
    while (students.length && sandwiches.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            loopNoProgress = 0;
        } else {
            const student = students.shift();
            students.push(student);
            loopNoProgress++;
        }
        
        if (loopNoProgress === students.length) {
            break;
        }
    }
    
    return students.length;
};
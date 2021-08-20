let myRoutine = {
    morning: 'Maths',
    afternoon: 'Coding',
    eveing: 'Walking',
    late_evening: 'Reading',
    add_task: function () {
        console.log(this);
        console.log(this.morning);
    }
}

console.log(myRoutine.add_task());
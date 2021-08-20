let student  = {
    maths: 85,
    physics: 90,
    chem: 82,
    total: function(){
        let totalMarks = this.maths+this.physics+this.chem;
        console.log(totalMarks)
    }
}
console.log(student.total());
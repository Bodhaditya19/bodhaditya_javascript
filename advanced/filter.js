/**
 * The filter() method " creates an array " filled with
 *  all array elements that pass a test (provided by a function).
 */

let ages = [50, 42, 76, 32];
console.log(ages.filter(checkAdult));

function checkAdult(ages) {
    return ages >= 50;
}
/**
 * Another Method
 */

console.log(ages.filter(function (ages) {
    return ages >= 50;
}
)
)

/**
 * Arrow Function Method
 */
console.log(ages.filter((ages) => {
    return ages >= 50;
}
)
)

/**
 * Filter Method On Array of Objects
 */

let myBlog = [
    {
        title: 'Vaccine Shortage',
        authorName: 'Bodhaditya Mukherjee',
        description: 'Blog Description',
        isDone: true,
    },
    {
        title: 'Global Warming',
        authorName: 'Bodhaditya Mukherjee',
        description: 'Blog Description',
        isDone: true,
    },
    {
        title: 'My Day',
        authorName: 'Bodhaditya Mukherjee',
        description: 'Blog Description',
        isDone: false,
    }
]

console.log(myBlog.filter((myBlog) => {
    return myBlog.isDone === true;
}
)
)
let myBlog =     {
    title:          'Vaccine Shortage',
    authorName:     'Bodhaditya Mukherjee',
    description:    'Blog Description',
    isDone:         true,
}
// To access a field objectName.key
//console.log('\n Title:-'+myBlog.title+ '\nAuthor:- '+ myBlog.authorName+'\nDescription:- '+myBlog.description+'\n');

/*------------- Passing object as an argument -----------*/

let details = function(blogDesc){
    blogDesc.title = 'No Shortage'; // The orginal one is also getting changed
    console.log(blogDesc.title);
}
details(myBlog);
console.log(myBlog.title);
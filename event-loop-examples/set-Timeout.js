console.log("First console");
setTimeout(() => {
    console.log("Second console");
}, 0);
console.log("Third console");

/* The console follow up will be 
    first console
    third console
    second console.
    This happens because of the event loop that performs in which since the timeout function will take a longer time than consoling a text, that function is registered and it performs when that function has finished processing.
    Hence the third console will print before the second console.

    In other language, since setTimeout is an asynchronous function, it gets offloaded in nodeJS and goes back of the line.
*/
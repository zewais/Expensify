const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("This is my resolved data")
        reject("Something went wrong!")
    }, 5500)
    

})

console.log("before")

promise.then((data) => {
    console.log("1", data)
}).catch((error) => {
    console.log(error)
})


/*const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
}

const {name: publisherName = "Publisher Unknown"} = book.publisher;
console.log(publisherName);*/


//Array Descructuring.


const address = ["123 Mickey Mouse Ave.","Cornwall", "Ontario", "K00 00K"];

const [street, city, province, postalCode] = address;

console.log(street, city, province, postalCode);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"]

const [coffee, , medium] = item;

console.log(`the price for a medium ${coffee} is ${medium}`);
const transactions = [
    {
        id: 1,
        product: 'Laptop',
        amount: 1200,
        category: 'Electronics',
    },
    {
        id: 2,
        product: 'Headphones',
        amount: 80,
        category: 'Electronics',
    },
    {
        id: 3,
        product: 'T-shirt',
        amount: 20,
        category: 'Clothing',
    },
    {
        id: 4,
        product: 'Smartphone',
        amount: 800,

    },
    {
        id: 5,
        product: 'Sneakers',
        amount: 50,
        category: 'Footwear',
    },
    {
        id: 6,
        product: 'Camera',
        amount: 600,
        category: 'Electronics',
    },
    {
        id: 7,
        product: 'Jeans',
        amount: 40,
        category: 'Clothing',
    },
    {
        id: 8,
        product: 'Watch',
        amount: 300,
        category: 'Accessories',
    },
    {
        id: 9,
        product: 'Gaming Console',
        amount: 400,
        category: 'Electronics',
    },
    {
        id: 10,
        product: 'Dress Shoes',
        amount: 70,
        category: 'Footwear',
    },
    {
        id: 11,
        product: 'Tablet',
        amount: 500,
        category: 'Electronics',
    },
    {
        id: 12,
        product: 'Jacket',
        amount: 90,
        category: 'Clothing',
    },
    {
        id: 13,
        product: 'TV',
        amount: 1500,
        category: 'Electronics',
    },
    {
        id: 14,
        product: 'Skirt',
        amount: 30,
        category: 'Clothing',
    },
    {
        id: 15,
        product: 'Running Shoes',
        amount: 60,
        category: 'Footwear',
    },
    {
        id: 16,
        product: 'Printer',
        amount: 200,
        category: 'Electronics',
    },
    {
        id: 17,
        product: 'Hoodie',
        amount: 35,
        category: 'Clothing',
    },
    {
        id: 18,
        product: 'Fitness Tracker',
        amount: 100,
        category: 'Electronics',
    },
    {
        id: 19,
        product: 'Dress',
        amount: 80,
        category: 'Clothing',
    },
    {
        id: 20,
        product: 'Sandals',
        amount: 25,
        category: 'Footwear',
    },
    {
        id: 21,
        product: 'External Hard Drive',
        amount: 120,
        category: 'Electronics',
    },
    {
        id: 22,
        product: 'Polo Shirt',
        amount: 25,
        category: 'Clothing',
    },
    {
        id: 23,
        product: 'Wireless Earbuds',
        amount: 150,
        category: 'Electronics',
    },
    {
        id: 24,
        product: 'Dress Pants',
        amount: 50,
        category: 'Clothing',
    },
    {
        id: 25,
        product: 'Backpack',
        amount: 70,
        category: 'Accessories',
    },
    {
        id: 26,
        product: 'Mouse',
        amount: 20,
        category: 'Electronics',
    },
    {
        id: 27,
        product: 'Sweater',
        amount: 45,
        category: 'Clothing',
    },
    {
        id: 28,
        product: 'Smartwatch',
        amount: 250,
        category: 'Electronics',
    },
    {
        id: 29,
        product: 'Formal Shirt',
        amount: 60,
        category: 'Clothing',
    },
    {
        id: 30,
        product: 'Slippers',
        amount: 15,
        category: 'Footwear',
    },

];

// Write a function calculateTotalSales that takes the transactions array as a 
// parameter and returns the total sales amount.

function calculateTotalSales(transactions) {
    let sum = 0;
    for (let i = 0; i < transactions.length; i++) {
        sum += transactions[i].amount
    }

    return sum
}
const totalSalesAmount = calculateTotalSales(transactions)
console.log('totalSalesAmount: ', totalSalesAmount);

// reduce method
function calculateTotalSalesByReduce(transactions) {
    let totalSales = transactions.reduce((prev, next) => {
        return prev + next.amount
    }, 0)
    return totalSales;
}
calculateTotalSalesByReduce(transactions)

// Create a function that takes in the movie dataset and a director's name as parameters. 
// It should return an array of movies directed by that director.

const movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Science Fiction",
        rating: 8.8,
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        genre: "Crime",
        rating: 9.2,
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        genre: "Crime",
        rating: 8.9,
    },
    {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        genre: "Drama",
        rating: 8.8,
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action",
        rating: 9.0,
    },
    {
        title: "Fight Club",
        director: "David Fincher",
        year: 1999,
        genre: "Drama",
        rating: 8.8,
    },
    {
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        year: 1999,
        genre: "Science Fiction",
        rating: 8.7,
    },
    {
        title: "Goodfellas",
        director: "Martin Scorsese",
        year: 1990,
        genre: "Crime",
        rating: 8.7,
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        year: 2003,
        genre: "Fantasy",
        rating: 8.9,
    },
    {
        title: "Inglourious Basterds",
        director: "Quentin Tarantino",
        year: 2009,
        genre: "War",
        rating: 8.3,
    },
    {
        title: "The Silence of the Lambs",
        director: "Jonathan Demme",
        year: 1991,
        genre: "Thriller",
        rating: 8.6,
    },
    {
        title: "Schindler's List",
        director: "Steven Spielberg",
        year: 1993,
        genre: "Biography",
        rating: 8.9,
    },
    {
        title: "The Departed",
        director: "Martin Scorsese",
        year: 2006,
        genre: "Crime",
        rating: 8.5,
    },
    {
        title: "The Social Network",
        director: "David Fincher",
        year: 2010,
        genre: "Biography",
        rating: 7.7,
    },
    {
        title: "Dilwale Dulhania Le Jayenge",
        director: "Aditya Chopra",
        year: 1995,
        genre: "Romance",
        rating: 8.1,
    },
    {
        title: "3 Idiots",
        director: "Rajkumar Hirani",
        year: 2009,
        genre: "Comedy",
        rating: 8.4,
    },
    {
        title: "Sholay",
        director: "Ramesh Sippy",
        year: 1975,
        genre: "Action",
        rating: 8.2,
    },
    {
        title: "Lagaan",
        director: "Ashutosh Gowariker",
        year: 2001,
        genre: "Drama",
        rating: 8.1,
    },
    {
        title: "Swades",
        director: "Ashutosh Gowariker",
        year: 2004,
        genre: "Drama",
        rating: 8.2,
    },
    {
        title: "Taare Zameen Par",
        director: "Aamir Khan",
        year: 2007,
        genre: "Drama",
        rating: 8.4,
    },
    {
        title: "Andaz Apna Apna",
        director: "Rajkumar Santoshi",
        year: 1994,
        genre: "Comedy",
        rating: 8.2,
    },
    {
        title: "Mughal-e-Azam",
        director: "K. Asif",
        year: 1960,
        genre: "Drama",
        rating: 8.4,
    },
    {
        title: "Gully Boy",
        director: "Zoya Akhtar",
        year: 2019,
        genre: "Drama",
        rating: 8.2,
    },
    {
        title: "Queen",
        director: "Vikas Bahl",
        year: 2013,
        genre: "Comedy-drama",
        rating: 8.2,
    },

];

function movieDirectorBy(movies, name) {

    const moviesName = movies.filter((item) => {
        return item.director === name;
    }).map((item) => {
        return item.title
    })
    return moviesName

}
const movieResult = movieDirectorBy(movies, "Zoya Akhtar")
console.log('movieResult: ', movieResult);


let moviesNameByTitle = []
function testMoviesDirector(movies, name) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].director === name) {
            const movieTitle = movies[i].title;
            moviesNameByTitle.push(movieTitle)
        }
    }
    return moviesNameByTitle

}

const result = testMoviesDirector(movies, "Zoya Akhtar")
console.log(result, "moviesName");


// 2. Function to Filter:

// Write a function filterTransactionsByCategory that takes the transactions 
// array and a category as parameters, and returns an array of 
// transactions belonging to the specified category.


function getTransactionDetails(transactions, category) {

    const transactionsDataByCategory = transactions.filter((item) => {

        return item.category === category;
    })
    return transactionsDataByCategory
}
const getDataByCategory = getTransactionDetails(transactions, "Electronics")
console.log('getDataByCategory: ', getDataByCategory);


// Write a function to filter all movies with ratings above 8.5

function filterTransactionByRating(movies) {
    const rating = movies.filter((item) => {

        return item.rating > 8.5;
    })
    return rating
}
const getRatingData = filterTransactionByRating(movies)
console.log('getRatingData: ', getRatingData);


// Function with Default Values:

// Write a function getTransactionDetails that takes a transaction object 
// as a parameter and logs the product name, amount, and category. 
// Use default values for category (set it to 'Other' if not provided).


function getTransactionDetailsDefault(transaction) {
    const { product, amount, category = 'Other' } = transaction;
    console.log(product, amount, category);
}
transactions.forEach((transaction) => {
    getTransactionDetailsDefault(transaction)
})

// Develop a function that lists all movies released after a given year. 
// The default year should be set to 2000 if no year is provided


function getAllmovies(movies, year = 2000) {

    const list = movies.filter((item) => {
        return item.year > year
    })
    console.log(list, "list");

}

getAllmovies(movies, 2010);

// Anonymous Function and Callback:

// Write a function calculateAverageAmount that 
// takes the transactions array and a callback 
// function as parameters. 
// The callback function should define the logic to extract the amount 
// from each transaction. The main function should use the callback to calculate
//  and return the average amount.


function calculateAverageAmount(transactions, extractAmountCallback) {
    const amounts = transactions.map(extractAmountCallback);
    const averageAmount = amounts.reduce((prev, next) => {
        return prev + next
    }, 0)
    return averageAmount;


}

const averageAmountResult = calculateAverageAmount(transactions, function (transaction) {

    return transaction.amount;
})
console.log('averageAmountResult: ', averageAmountResult);

// 5. IIFE (Immediately Invoked Function Expression):

// Use an IIFE to create a function that logs the number of 
// transactions in the dataset without explicitly calling it.

(function () {
    const result = transactions.map((item) => {

        return item;
    })
    console.log('result: ', result);
})(transactions);

// Write an IIFE that calculates and displays the average r
// ating of all the movies in the dataset.

(function () {
    const rating = movies.map((item) => {

        return item.rating;
    })
    console.log('rating: ', rating);
})(movies);

// 6. Pass-by-Value:

// Write a function updateTransactionAmount that takes a transaction 
// object and an updatedAmount parameter. Inside the function, 
// update the amount property of the transaction.
//  Check if the original transactions array is modified outside the function.

const updatedAmount=2000;

function updateTransactionAmount(transaction, updatedAmount){


}
transactions.forEach((transaction) => {
    updateTransactionAmount(transaction)
})

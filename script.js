// Global Variable used to store the quotes fetched from the API
var data;

// Colors Used
const colors = [
    "#4acf6e", "#55d4bf", 
    "#54c0de","#7186f0",
    "#9875eb","#e66565", 
    "#e36d9a","#d9e874", 
    "#e6bd6c", "#64d15a", 
    "#665858","#e6e1d1", 
    "#addbc7", "#b2ccdb"
]

// An arrow function used to get a quote randomly
const getQuote = () =>{

    // Generates a random number between 0 and the length of the dataset
    let index = Math.floor(Math.random()*data.length);

    // Generates a random number between 0 and the number of colors used
    let index2 = Math.floor(Math.random()*colors.length);

    // Stores the quote present at the randomly generated index
    let quote = data[index].text;

    // Stores the author of the respective quote
    let author = data[index].author;

    // Making the author anonymous if no author is present
    if(!author){
        author = "Anonymous"
    }

    // Setting the color of the author box
    document.getElementById("author").style.color=colors[index2];

    // Setting the color of the quote icon
    document.getElementById("quote").style.color=colors[index2];

    // Setting the color of the quote
    document.getElementById("text").style.color=colors[index2];

    // Setting the color of the twitter icon
    document.getElementById("tweet").style.color=colors[index2];

    // Setting the color of the button
    document.getElementById("new-quote").style.backgroundColor=colors[index2];

    // Setting the color of the background
    document.getElementById("body").style.backgroundColor=colors[index2];

    // Replacing the current quote with a new one
    document.getElementById("text").innerHTML= quote;

    // Replacing the current author with a new one
    document.getElementById("author").innerHTML = author;
}

// Fetching the quotes from the type.fit API using promises
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json(); 
    }) // Getting the raw JSON data
    .then(function(d) {
        this.data = d; // Storing the quotes internally upon successful completion of request
        
        // Displaying the quote When the Webpage loads
        getQuote() 

        
        let btn = document.getElementById("new-quote");

        // Adding an onclick listener for the button
        btn.addEventListener('click',()=>{

            // Displaying a new quote when the webpage loads
            getQuote()
        })
});
var quotes = [
    "\"The way to get started is to quit talking and begin doing.\"<br> - Walt Disney",
    "\"The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.\"<br> - Winston Churchill",
    "\"Don\'t let yesterday take up too much of today.\"<br> - Will Roger",
    "\"You learn more from failure than from success. Don\'t let it stop you. Failure builds characters.\"<br> - Unknown",
    "\"It\'s not whether you get knocked down, it\'s whether you get up.\"<br> - Vince Lombardi",
    "\"If you are working on something that you really care about, you don\'t have to be pushed.\"",
    "\"Failure will never overtake me if my determination to succeed is strong enough.\"<br> - Og Mandir",
    "\"We may encounter many defeats but we must not be defeated.\"<br> - Maya Angelou"
]

/* Elements within an array are retrieved by calling it's array index number. The first element of an array has an index of 0, every element
after that goes up by one. 

In order to retrieve a random quote from an array, we need to produce a random number every time the user clicks on the button.
Then, we would use that random number to retrieve a quote from the array place the quote onto the HTML document. 

Now we need to create newQuote() function that we will generate quotes from the array.
For this function, we need to generate a random whole number that ranges from 0 to the length of our quotes array. 

First, we call the Math.floor() function. The Math.floor() function takes in a parameter and rounds the number downward to the nearest integer.
For example, if we call Math.floor(5.7) it will return 5.

Secondly, we will pass in Math.random() as a parameter into Math.floor(). The Math.random() will generate a random decimal number between
0 and 1.

If we have this:

    var randomNumber = Math.floor(Math.random());

If we console log our randomNumber at this state, it will always return 0. 
This is because Math.random() will always be a decimal between 0 and 1 such as 0.4, 0.721, 0.98, and so on. 
Because we pass Math.random() into Math.floor() as a parameter, Math.floor() is always rounding down to the nearest decimal, 
therefore, every decimal between 0 and 1 will always revert back to 0.

To create our array index numbers, we need whole numbers, but we need random whole numbers. 
To generate random whole numbers and break away from only returning 0, we will need to take our random decimal and multiply it by a whole number.

Now we can get something like this:

    var randomNumber = Math.floor(Math.random() * 20);

 If we console log randomNumber, the results will be anywhere between 1 and 19. 
 Now I could use this current state of randomNumber to pull out a quote from the quotes array, 
 but it will only work if the array index number exist within the array, otherwise, an error will be thrown.

 For example:

    quote[14] will return undefined

To solve this problem, we need to only multiply Math.random() with the length of our quotes array. 
By doing this, we can add or remove as many strings from the array as we like.

    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
    }

Now we need a way to use the value of randomNumber to randomly retrieve a quote from the quotes array and place the quote onto the HTML document.

    document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];

We grab the button element and set innerHTML equal to our quotes array with our randomNumber variable passed as an array index number. 
Now the newQuote() function is complete. */

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}        
const data = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"Life is what happens when you're busy making other plans. -John Lennon","Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
"When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
"Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
"Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
"The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart. -Helen Keller",
"It is during our darkest moments that we must focus to see the light. -Aristotle",
"Whoever is happy will make others happy too. -Anne Frank",
"Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson", 
"You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
"Never let the fear of striking out keep you from playing the game. -Babe Ruth",
"Life is either a daring adventure or nothing at all. -Helen Keller",
"Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
"Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill",
"Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"If you really look closely, most overnight successes took a long time. -Steve Jobs",
"The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
"I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",
"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama"]

const colors = ["#4acf6e", "#55d4bf", "#54c0de", "#7186f0", "#9875eb", "#e66565", "#e36d9a", "#d9e874", "#e6bd6c", "#64d15a", "#665858", "#e6e1d1"
, "#addbc7", "#b2ccdb"]

let index = Math.floor(Math.random()*data.length);
let index2 = Math.floor(Math.random()*colors.length);

let temp = data[index].split("-");
let color = colors[index2];

let quote = temp[0];

let author = temp[1];

document.getElementById("author").style.color=colors[index2];
document.getElementById("quote").style.color=colors[index2];
document.getElementById("text").style.color=colors[index2];
document.getElementById("tweet").style.color=colors[index2];
document.getElementById("new-quote").style.backgroundColor=colors[index2];
document.getElementById("body").style.backgroundColor=colors[index2];
document.getElementById("text").innerHTML= quote;
document.getElementById("author").innerHTML = author;

let btn = document.getElementById("new-quote");

btn.addEventListener('click',()=>{

let index = Math.floor(Math.random()*data.length);
let index2 = Math.floor(Math.random()*colors.length);

let temp = data[index].split("-");

let quote = temp[0];

let author = "-"+temp[1];

document.getElementById("text").style.animation="text-box";
document.getElementById("author").style.color=colors[index2];
document.getElementById("quote").style.color=colors[index2];
document.getElementById("text").style.color=colors[index2];
document.getElementById("tweet").style.color=colors[index2];
document.getElementById("new-quote").style.backgroundColor=colors[index2];
document.getElementById("body").style.backgroundColor=colors[index2];
document.getElementById("text").innerHTML= quote;
document.getElementById("author").innerHTML = author;
})
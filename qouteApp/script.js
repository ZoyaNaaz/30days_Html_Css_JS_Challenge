const quote =document.getElementById("qoute");
const author =document.getElementById("author");

const api_url = "https://api.quotable.io/random?tags=technology";

async function getQuote(url){
    const response =  await fetch(url);
    let data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}
function tweet(){
    window.open("href=https://twitter.com/intent/tweet?text=" + quote.innerHTML,"Tweet Window","width=600, height=300");
}

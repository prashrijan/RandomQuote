const url = "https://api.quotable.io/random"
const qte = document.querySelector("#quote")
const btn = document.querySelector("#btn")

async function generateRandomQuote(url){
    try {
        qte.style.display = "block";
        qte.innerHTML = "Loading...."
        const response  = await fetch(url)
        const data = await response.json()
        const quote = data.content
        qte.innerHTML = quote
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click" , (e) => {
    generateRandomQuote(url)
})

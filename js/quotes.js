async function displayRandomQuote() {
    try {
        const response = await fetch('/json/quotes.json');
        const quotes = await response.json();

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        if(!quote) {
            console.log("null quote\n");
            return;
        }

        document.getElementById("quote").textContent = `"${quote.quote}"`;
        document.getElementById("quote-by").textContent = `- ${quote.by}`;
    } catch (error) {
        console.error('Error loading quotes:', error);
    }
}

displayRandomQuote();
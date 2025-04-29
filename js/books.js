async function loadBooks() {
    try {        
        const response = await fetch('https://muhvic.com/json/books.json');
        const books = await response.json();

        const table = document.getElementById("books-table").getElementsByTagName("tbody")[0];

        books.forEach(book => {
            const row = table.insertRow();

            const titleCell = row.insertCell(0);
            const authorCell = row.insertCell(1);
            const haveCell = row.insertCell(2);

            titleCell.textContent = book.title;
            authorCell.textContent = book.author;
            haveCell.textContent = book.have ? "Have" : "Want";
        });
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

loadBooks();
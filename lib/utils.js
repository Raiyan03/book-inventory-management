export const downLoadFile = (type, books) => {
    if (type === "json") {
        const jsonData = JSON.stringify(books, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "books.json";
        link.click();
    } else if (type === "csv") {
        let csvData = "Entry ID,Title,Author,Genre,Publication Date,Stock\n";
        books.forEach((book) => {
            csvData += `${book.entry_id},${book.title},${book.author},${book.genre},${new Date(book.publication_date).toLocaleDateString()},${book.stock}\n`;
        });
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "books.csv";
        link.click();
    }
} 
// Sample books in the library
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true }
  ];
  
  // Function to render books on the page
  function displayBooks() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; // Clear existing content
  
    books.forEach(book => {
      let bookDiv = document.createElement("div");
      bookDiv.classList.add("book");
  
      bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Status:</strong> ${book.isAvailable ? "Available" : "Borrowed"}</p>
        <button class="borrow" ${book.isAvailable ? "" : "disabled"} onclick="borrowBook(${book.id})">Borrow</button>
      `;
  
      libraryDiv.appendChild(bookDiv);
    });
  }
  
  // Function to borrow a book
  function borrowBook(bookId) {
    const book = books.find(book => book.id === bookId);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      displayBooks(); // Update the display
    }
  }
  
  // Initial display of books
  displayBooks();
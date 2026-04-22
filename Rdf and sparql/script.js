const rdfData = `
@prefix ex: <http://example.com/> .

ex:book1 ex:title "Harry Potter" .
ex:book1 ex:author "J.K. Rowling" .

ex:book2 ex:title "The Hobbit" .
ex:book2 ex:author "J.R.R. Tolkien" .
`;

function findAuthor() {
  const bookName = document.getElementById("bookName").value.trim();
  const result = document.getElementById("result");

  if (bookName === "") {
    result.innerHTML = "Please enter a book name";
    return;
  }

  // Split RDF data into lines
  const lines = rdfData.split("\n");

  let bookId = "";
  let author = "";

  // Find matching book
  lines.forEach(line => {
    if (line.includes('ex:title') && line.includes(`"${bookName}"`)) {
      bookId = line.split(" ")[0];
    }
  });

  // Find author of that book
  lines.forEach(line => {
    if (bookId !== "" && line.startsWith(bookId) && line.includes("ex:author")) {
      const match = line.match(/"(.*?)"/);
      if (match) {
        author = match[1];
      }
    }
  });

  if (author !== "") {
    result.innerHTML = `Author: ${author}`;
  } else {
    result.innerHTML = "Book not found";
  }
}
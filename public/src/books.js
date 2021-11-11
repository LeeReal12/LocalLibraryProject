function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let available = [];
  let borrowed = [];
  const status = [];
  books.forEach((book) => {
    const returned = book.borrows[0].returned;

    if (returned) {
      borrowed.push(book);
    } else {
      available.push(book);
    }
  });
  status.push(available);
  status.push(borrowed);
  return status;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((bookBorrowed) => {
      let account = accounts.find((account) => account.id === bookBorrowed.id);
      return { ...bookBorrowed, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

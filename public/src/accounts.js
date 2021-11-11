function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((NameA, NameB) =>
    NameA.name.last > NameB.name.last
      ? 1
      : NameB.name.last > NameA.name.last
      ? -1
      : 0
  );
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    book.borrows.forEach((borrowed) => {
      if (borrowed.id === account.id) {
        acc++;
      }
    });
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessed = [];
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
      possessed.push(book);
    }
  });
  possessed.forEach((book) => {
    let theAuthor = authors.find((person) => person.id === book.authorId);
    book["author"] = theAuthor;
  });
  return possessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

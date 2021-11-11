function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//use filter on me
function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter((book) => {
    return !book.borrows[0].returned;
  });
  return borrowedBooks.length;
}

//   let borrowedBooks = 0;
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].borrows[0].returned == false) borrowedBooks++;
//   }
//   return borrowedBooks;
// }

function popGenres(books) {
  let genreCount = {};
  books.forEach((book) => {
    if (genreCount[book.genre] != null) {
      genreCount[book.genre]++;
    } else {
      genreCount[book.genre] = 1;
    }
  });
  return genreCount;
}
function getMostCommonGenres(books) {
  let countBooks = popGenres(books);
  let result = [];
  for (let [bookName, num] of Object.entries(countBooks)) {
    result.push({
      name: bookName,
      count: num,
    });
  }
  result.sort((bookA, bookB) => bookB.count - bookA.count);
  return result.slice(0, 5);
}

function getMostPopularBooks(books, count = 5) {
  const borrowed = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  borrowed.sort((BookA, BookB) => BookB.count - BookA.count);
  return borrowed.slice(0, count);
}

function getMostPopularAuthors(books, authors) {
  let popAuthors = [];
  authors.forEach((author) => {
    let popAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        popAuthor.count += book.borrows.length;
      }
    });
    popAuthors.push(popAuthor);
  });
  return popAuthors.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

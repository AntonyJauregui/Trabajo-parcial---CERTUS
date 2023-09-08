// ES6 OOP classes

class Book {
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }
}


class UI {
  // function for UI class to add book to list;
  addBookToList(book) {
      const list = document.getElementById('book-list');
      // Create table row element
      const row = document.createElement('tr');
      // Insert columns
      row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a> </td>
      `;

      list.appendChild(row);
  }

  showAlert(message, className) {
      // create div
      const div = document.createElement('div');
      // Add classes
      div.className = `alert ${className}`;
      //Add alert text
      div.appendChild(document.createTextNode(message));
      // get parent
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      // Insert alert
      container.insertBefore(div, form);
      // Time out after 3 seconds
      setTimeout(() => {
          document.querySelector('.alert').remove();
      }, 3000);
  }

  deleteBook(target) {
      if (target.className === 'delete') {
          target.parentElement.parentElement.remove();
      }
  }

  clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
  }
}


// Local Storage class
class Store {

  // Get books from local storage
  static getBooks() {
      let books;
      if (localStorage.getItem('books') === null) {
          books = [];
      } else {
          books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
  }

  // Display books in UI
  static displayBooks() {
      const books = Store.getBooks();

      books.forEach(function (book) {
          const ui = new UI;
          // Add book to list
          ui.addBookToList(book);
      })
  }

  // Add book details to local storage
  static addBook(book) {
      const books = Store.getBooks();
      books.push(book);

      // Store to local storage
      localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
      const books = Store.getBooks();
      books.forEach(function (book, index) {
          if (book.isbn === isbn) {
              books.splice(index, 1);
          }
      });
      localStorage.setItem('books', JSON.stringify(books));
  }
}


// DOM Load event 
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event listeners for Add book
document.getElementById('book-form').addEventListener('submit',
  function (e) {
      // Get form values
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const isbn = document.getElementById('isbn').value;

      // Instantiate a book
      const book = new Book(title, author, isbn);

      // Instantiate UI object
      const ui = new UI();

      // Validate 
      if (title === '' || author === '' || isbn === '') {
          // Show Error alert
          ui.showAlert('Por favor rellenar bien los campos', 'error');
      } else {
          // Add book to list
          ui.addBookToList(book)

          // Show success alert
          ui.showAlert('Curso Añadido', 'success');
          // Add to local storage
          Store.addBook(book);

          // Clear UI fields
          ui.clearFields();
      }

      e.preventDefault();
  });

// Event listener for Delete    
document.getElementById('book-list').addEventListener('click', function (e) {
  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from local storage using ISBN number
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

  // Show alert
  ui.showAlert('Curso Removido', 'success');

  e.preventDefault();
})

window.onload = function() {

var borrar = document.getElementById('borrar');
borrar.addEventListener("click", borrando);}

  function borrando() {
      document.location.reload(true);
  }
let url = "https://books-backend.p.goit.global/books/top-books";
let url2 = "https://books-backend.p.goit.global/books/category-list";
let categoryUrl =
  "https://books-backend.p.goit.global/books/category?category=";

// Fetch Top Books
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    showBooks(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fetch Book Categories
async function fetchCategories(url2) {
  try {
    let response = await fetch(url2);
    let data = await response.json();
    displayCategories(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

let categories = document.querySelector("#type");

// Display Categories
function displayCategories(book) {
  categories.innerHTML = "";
  book.forEach((category) => {
    let p = document.createElement("p");
    p.textContent = category.list_name;
    categories.appendChild(p);
  });
}

let showBookContainer = document.querySelector(".all-book");

function showBooks(bookArray) {
  showBookContainer.innerHTML = "";
  bookArray.forEach((book) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book-container");

    bookDiv.innerHTML = `
            <h2>${book.list_name}</h2>
            <div class="book-card"></div>
            <button class="see-more" data-category="${book.list_name}">See more</button>
        `;

    showBookContainer.appendChild(bookDiv);

    let bookCard = bookDiv.querySelector(".book-card");
    book.books.forEach((bookItem) => {
      let bookImage = `<div class="book-item">
                <img src="${bookItem.book_image}" alt="${bookItem.title}" width="200" height="250" />
                <h3>${bookItem.title}</h3>
                <p>${bookItem.author}</p>
            </div>`;
      bookCard.innerHTML += bookImage;
    });

    // Add "See More" button functionality
    const seeMoreButton = bookDiv.querySelector(".see-more");
    seeMoreButton.addEventListener("click", async function () {
      const category = this.getAttribute("data-category");
      const formattedCategory = category.replaceAll(" ", "+");
      const res = await fetch(categoryUrl + formattedCategory);
      const data = await res.json();
      showBooksCategories(data);
    });
  });
}

// Dark Mode Toggle
document.querySelector(".toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Display Books for Selected Category
function showBooksCategories(bookArray) {
  showBookContainer.innerHTML = ""; // Clear previous books

  bookArray.forEach((bookItem) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card2");

    bookDiv.innerHTML = `
            <div>
                <img src="${bookItem.book_image}" alt="${bookItem.title}" width="200" height="250" />
                <h3>${bookItem.title}</h3>
                <p>${bookItem.author}</p>
            </div>
        `;

    showBookContainer.appendChild(bookDiv);
  });
}

fetchCategories(url2);
fetchData(url);

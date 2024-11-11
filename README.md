# Book App

The Book App allows users to search for books, view book details, and explore various genres. The app fetches data from an external API to provide a seamless browsing experience for book enthusiasts.

## Features
- **Search Books**: Find books by title or author.
- **Book Details**: View detailed information about each book, including description, author, and genre.
- **Genre Exploration**: Browse books by genre for more specific recommendations.
- **Responsive Design**: Optimized for various screen sizes and devices.

## Technologies Used
- **HTML** and **CSS**: For layout and styling.
- **JavaScript**: Handles interactions and data fetching.
- **API Integration**: Retrieves data from an external book API.

## Getting Started

### Prerequisites
Ensure you have the following:
- A modern web browser
- An active internet connection for API requests

### Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/niks1503/Book-App.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Book-App
   ```
3. **Open `index.html` in your browser** to launch the app.

## Usage
1. **Search**: Enter a book title or author in the search bar.
2. **Browse by Genre**: Use the genre selection options to explore books.
3. **View Details**: Click on a book to see detailed information in a popup.

## Code Overview

### Key Components
- **`fetchBooks(query)`**: Fetches a list of books based on search query.
- **`displayBooks(books)`**: Renders a list of books on the page.
- **`showBookDetails(book)`**: Displays detailed information for a selected book in a popup.

### API Integration
This app uses a public book API for real-time data:
- **Search Endpoint**: `https://books-backend.p.goit.global/books/category-list`

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

## License
This project is open-source and available under the MIT License.

## Live Demo
**[View the Book App](https://niks1503.github.io/Book-App/)**

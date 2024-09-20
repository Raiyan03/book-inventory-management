# **Book Inventory Management**

This is a web-based **Book Inventory Management** application that allows users to add, edit, and delete books from a centralized inventory. The application includes filtering and search functionalities based on book titles, authors, and genres. The app is optimized for mobile and desktop views with a responsive design and dark mode support.

---

### **Features**

- **Add, Edit, and Delete Books**: Users can manage their book inventory by adding new books, editing existing ones, or deleting books from the list.
- **Search**: Search functionality that allows filtering of books based on their title, author, or genre.
- **Filtering**: Filter books by multiple genres and authors using dynamic filtering.
- **Responsive Design**: The application is optimized for both desktop and mobile views.
- **Dark Mode**: Full dark mode compatibility for a comfortable viewing experience.
- **Export Options**: Users can export the list of books as either JSON or CSV for easy data management.

---

### **Live Demo**
[Live Link Here](#)

---

### **Video Demonstration**
[Video Link Here](#)

---

### **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/book-inventory-management.git
   cd book-inventory-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Open the App in the Browser**
   Visit `http://localhost:3000` in your browser.

---

### **Usage**

1. **Add Books**: Click the "Add New Book" button in the navbar to open the form and add book details such as title, author, genre, ISBN, stock, and publication date.
2. **Search Books**: Start typing in the search box, and books will be filtered dynamically as you type (works after 3 characters).
3. **Filter by Authors & Genres**: Use the genre and author filter buttons to narrow down the book inventory based on your selected options.
4. **Edit Books**: Click on the edit icon next to a book entry to modify its details.
5. **Delete Books**: Click the delete icon to remove a book from the inventory.
6. **Export Data**: Export the current inventory to JSON or CSV format using the export button in the navbar.

---

### **Features**

- **Add/Edit Book**:
  - Add new books to the inventory by filling out a form with details like title, author, genre, publication date, ISBN, and stock.
  - Edit existing book details in the modal by clicking on the edit button.

- **Search**:
  - Real-time search functionality that dynamically filters the list of books based on the title, author, or genre.

- **Filter by Authors & Genres**:
  - Multi-select filter functionality that allows filtering by one or more authors and genres.

- **Export Data**:
  - Export the current book inventory as a JSON or CSV file for easy data management.

- **Mobile Responsive Design**:
  - The app is designed to work seamlessly on mobile, tablet, and desktop devices.

---


### **API Endpoints**

- **POST /api/add-book**
  - Add a new book to the inventory.
  - Expects a JSON body with book details.

- **GET /api/books**
  - Fetch all books from the inventory.

---

### **Technologies Used**

- **Frontend**:
  - React.js
  - Next.js (for server-side rendering and API routes)
  - Tailwind CSS (for responsive design)
  
- **Backend**:
  - Next.js API Routes (for handling book data)
  
- **Database**:
  - Example uses SQL queries for data management (can be replaced with an actual database like PostgreSQL)

- **Axios**: For making API calls from the frontend.

---

### **Contributing**

Contributions, issues, and feature requests are welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---


### **Author**

- **Raiyan Anwar** - Developer

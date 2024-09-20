# **Book Inventory Management**

A web-based inventory management system for books that allows users to add, edit, delete, search, and filter books. The system also supports exporting book data to CSV or JSON format.

---

### **Tech Stack**

- **Frontend**: React.js, Next.js
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Hosted on Vercel)
- **Styling**: Tailwind CSS
- **Data Fetching**: Axios

---

### **Video Demo**

https://github.com/user-attachments/assets/710db4a0-fa35-40f7-89ee-0606a9bcb393

---

### **Live link**
[Click here](https://book-inventory-management-jade.vercel.app/)

### **Installation Instructions**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Raiyan03/book-inventory-management.git
   cd book-inventory-management
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up PostgreSQL**

   - Use the Vercel PostgreSQL platform for database setup: [Quick Start](https://vercel.com/docs/storage/vercel-postgres/quickstart)
   - After setting up the database, run the SQL file located in the root directory to create the required tables:

     ```bash
     \SQL FILES SET UP FILES\runscript.sql
     ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Access the App**

   Open your browser and navigate to `http://localhost:3000` to use the app.

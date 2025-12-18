# 📚 Moschino Reading List

A modern React application designed to manage a personal reading list. This project serves as a deep dive into **React Hooks**, **Context API**, and **State Management patterns** without external libraries like Redux.

built with **Vite**, **Bun**, and **React 19**.

---

## 🚀 Features

- **Dynamic Book Management:** Add and remove books from your reading list instantly.
- **Persistent Data:** Uses `localStorage` to save your list, so data remains safe after refreshing the page.
- **Global State Management:** Powered by React Context API to avoid prop-drilling.
- **Complex State Logic:** Implements `useReducer` for predictable state transitions.
- **Empty State Handling:** User-friendly interface when the list is empty.

## 🛠️ Tech Stack & Concepts

This project was built to practice and demonstrate advanced React concepts:

- **Core:** React 19, JavaScript (ES6+).
- **Build Tool:** Vite (initialized with Bun).
- **Styling:** CSS3 with Flexbox and responsive design principles.
- **Utilities:** `uuid` for unique key generation.

### 🧠 Key Concepts Applied

1.  **Context API:**

    - `BookContext`: Manages the list of books and CRUD operations.
    - _Architecture_: Uses a Provider pattern to wrap the application, allowing any component to access data.

2.  **Hooks Deep Dive:**
    - **`useReducer`**: Used instead of multiple `useState` calls to handle complex actions (`ADD_BOOK`, `REMOVE_BOOK`) in a centralized reducer file.
    - **`useContext`**: Consumes global state in components like `BookList` and `NewBookForm`.
    - **`useEffect`**: Monitors state changes to synchronize the book list with the browser's `localStorage`.
    - **`useState`**: Manages local form inputs (Controlled Components).

## 📂 Project Structure

```text
src/
├── components/
│   ├── BookDetails.jsx    # Renders individual book item
│   ├── BookList.jsx       # Consumes context and renders the list
│   ├── Navbar.jsx         # Displays dynamic book count
│   └── NewBookForm.jsx    # Form to dispatch 'ADD_BOOK' actions
├── context/
│   ├── AuthContext.jsx    # (Architecture layer) Authentication logic
│   ├── BookContext.jsx    # Main data provider with localStorage logic
│   └── ThemeContext.jsx   # (Architecture layer) Theming logic
├── reducers/
│   └── bookReducer.js     # Pure function handling state changes
├── App.jsx                # Component composition and Provider nesting
└── main.jsx               # Entry point
```

## ⚡ Getting Started

This project uses [Bun](https://bun.sh) as the package manager and runtime.

1. **Clone the repository**

```bash
git clone [https://github.com/your-username/reading-list-context.git](https://github.com/your-username/reading-list-context.git)
cd reading-list-context

```

2. **Install dependencies**

```bash
bun install

```

3. **Run the development server**

```bash
bun run dev

```

4. **Build for production**

```bash
bun run build

```

## 🎨 Future Improvements

- Re-enable the Theme Toggle UI (Logic already exists in `ThemeContext`).
- Implement the Login/Logout UI (Logic already exists in `AuthContext`).
- Add filtering options (e.g., Read vs Unread).

---

Made with 💜 learning React Context & Hooks.

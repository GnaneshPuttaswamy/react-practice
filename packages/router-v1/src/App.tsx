import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import NotFoundPage from "./components/NotFoundPage";
import BookLayout from "./components/BookLayout";

function App() {
  return (
    <>
      <Routes /**location="/books" */>
        <Route path="/" element={<h1>Currently in Home Section!!</h1>}></Route>
        <Route
          path="/books"
          element={<h1>Currently in Books section!!</h1>}
        ></Route>
        <Route
          path="/books/:id"
          element={<h1>Currently in Books section!!</h1>}
        ></Route>
      </Routes>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/books">Books</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */
}

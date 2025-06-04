import BookList from "./components/book/List.tsx";
import Navbar from "./components/Navbar.tsx";
import ThemeContextProvider from "./contexts/ThemeContext.tsx";
import ThemeToggle from "./components/ThemeToggle.tsx";
import AuthContextProvider from "./contexts/AuthContext.tsx";
import BookContextProvider from "./contexts/BookContext.tsx";
import BookForm from "./components/book/Form.tsx";

function App() {
  return (
      <div className="App">
          <ThemeContextProvider>
              <AuthContextProvider>
                  <Navbar />
                  <BookContextProvider>
                      <BookList />
                      <BookForm />
                  </BookContextProvider>
                  <ThemeToggle />
              </AuthContextProvider>
          </ThemeContextProvider>
      </div>
  )
}

export default App

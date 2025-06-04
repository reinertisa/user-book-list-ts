import {useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext.tsx";
import {BookContext} from "../../contexts/BookContext.tsx";
import BookDetails from "./Details.tsx";

export default function BookList() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light : dark;

    return books.length !== 0 ? (
            <div className="book-list" style={{color: theme.syntax, backgroundColor: theme.bg}}>
                <ul>
                    {books.map(book => <BookDetails key={book.id} book={book} />)}
                </ul>
            </div>
        ) : (
            <div className="empty">No books to read. Hello free time</div>
        )
}
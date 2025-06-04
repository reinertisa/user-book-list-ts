import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";
import {BookContext} from "../../contexts/BookContext.tsx";

type BookDetailsProps = {
    book: {
        title: string,
        author: string,
        id: string
    }
}

export default function BookDetails({book}: BookDetailsProps) {
    const {removeBook} = useContext(BookContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <li style={{background: theme.ui}} onClick={() => removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    )
}
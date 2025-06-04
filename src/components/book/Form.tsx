import React, {useState, useContext} from "react";
import {BookContext} from "../../contexts/BookContext.tsx";



export default function BookForm() {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const {addBook} = useContext(BookContext);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value);

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>): void => setAuthor(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addBook(title, author)
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" type="text" required={true} onChange={handleTitleChange} value={title} />

            <label htmlFor="author">Author: </label>
            <input id="author" type="text" required={true} onChange={handleAuthorChange} value={author} />

            <button type="submit">Add a book</button>
        </form>
    )
}
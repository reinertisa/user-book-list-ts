import React, {createContext, useState} from 'react';
import {v4 as uuid} from 'uuid';

type BookContextType = {
    books: Book[]
    addBook: (title: string, author: string) => void
    removeBook: (id: string) => void
}

const bookInitialValues: BookContextType = {
    books: [],
    addBook: (): void => {},
    removeBook: (): void => {}
}

export const BookContext = createContext(bookInitialValues);


type BookContextProviderProps = {
    children: React.ReactNode
}

type Book = {
    id?: string,
    title: string,
    author: string
}

export default function BookContextProvider({children}: BookContextProviderProps) {
    const [books, setBooks] = useState<Book[]>([]);

    const addBook = (title: string, author: string): void =>
        setBooks([...books, {title, author, id: uuid()}]);

    const removeBook = (id: string): void => setBooks(books.filter(book => book.id !== id));

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {children}
        </BookContext.Provider>
    )
}
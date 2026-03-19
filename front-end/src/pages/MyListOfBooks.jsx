import { useEffect, useState } from "react";
import { getAllBooks } from "../api";

function BooksList({book}){
    return(
        <div>

        <div className="books-header">
            <h3>{book.title}</h3>
            <div>
                <button>Edit</button> 
                <button>DELETE</button>
                </div>
        </div>
            <div>{book.author}</div>
        </div>
    )
}

export default function MyListOfBooks(){
    const [books,setBooks] = useState([])

    async function loadBooks() {
        const books = await getAllBooks();
        setBooks(books)
    }

    useEffect(()=>{
        loadBooks();
    },[])

    return(
        <div className="page">
             {/* <Header /> */}
            <div className="h-pad">
                <div className="books-header">
                    <h1>My Books</h1>
                    <button className="add-button" onClick={() => navigate('/new-books')}>+ Add more Books</button>
                </div>
                { books.map((book) => (
                    <BooksList key={book._id} book={book} />
                ))}
            </div>
        </div>
    )
    
}
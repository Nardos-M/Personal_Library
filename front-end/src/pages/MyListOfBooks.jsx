import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBooks } from "../api";

function BooksList({book}){
    return(
        <div>

        <div className="books-header">
            <h3>{book.title}</h3>
            <div>{book.author}</div>
            
            <div> </div>
            <div>
                <button>Edit</button> 
                <button>DELETE</button>
                </div>
        </div>
        </div>
    )
}

export default function MyListOfBooks(){
    const [books,setBooks] = useState([])
    const navigate = useNavigate();

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
                </div>
                {books.map((book) => (
                    <BooksList key={book._id} book={book} />
                ))}
                <button className="add-button" onClick={() => navigate('/new-books')}>+ Add more Books</button>
            </div>
        </div>
    )
    
}

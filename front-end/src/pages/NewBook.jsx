import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../api";

export default function NewBook() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [lender, setLender] = useState("");
  const [borrower, setBorrower] = useState("");
  const [borrowedDate, setBorrowedDate] = useState("");
  const [returnedDate, setReturnedDate] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await createBook({
        title,
        author,
        lender,
        borrower,
        borrowedDate,
        returnedDate,
      });
      navigate("/my-books");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page">
      <div className="h-pad">
        <div className="books-header">
          <h1>Add a New Book</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Title (req)
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Author
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Lender
              <textarea
                value={lender}
                onChange={(e) => setLender(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Borrower
              <textarea
                value={borrower}
                onChange={(e) => setBorrower(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Borrowed Date
              <input
                type="date"
                value={borrowedDate}
                onChange={(e) => setBorrowedDate(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Return Date
              <input
                type="date"
                value={returnedDate}
                onChange={(e) => setReturnedDate(e.target.value)}
              />
            </label>
          </div>

          {error && <p>{error}</p>}

          <button type="submit">Save Book</button>
          <button type="button" onClick={() => navigate("/my-books")}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
export async function getAllBooks(){
   const res =  await fetch("/api/books");
    return await res.json();
}

export async function createBook(book) {
    const res = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Failed to create book");
    }

    return await res.json();
}

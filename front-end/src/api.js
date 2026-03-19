export async function getAllBooks(){
   const res =  await fetch("/api/books");
    return await res.json();
}
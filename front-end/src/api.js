export async function getAllLoans(){
   const res =  await fetch("/api/loans");
    return await res.json();
}

export async function createLoan(loan) {
    const res = await fetch("/api/loans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loan),
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Failed to create book");
    }

    return await res.json();
}

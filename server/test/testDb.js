const dbUri = process.env.MONGO_URI

if (!(dbUri.includes('test') || dbUri.includes('Test'))) {
    throw new Error('Can only run tests against a "test" database '+ dbUri)
}

export * from '../models/db.js'

import { deleteAllBooks } from '../models/book.js';
import { disconnectDb } from '../models/db.js'

export async function cleanoutDatabase() {
    await deleteAllBooks()
}

beforeEach(async () => {
    await cleanoutDatabase()
})

afterAll(async () => {
    await disconnectDb()
})
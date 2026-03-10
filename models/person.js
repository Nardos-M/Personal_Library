import { connectDb } from "./db.js";

const mongoose = await connectDb();

const personSchema = new mongoose.Schema({
    name:String,
    contact:Number,
    email:{
        type:String
    }
});

//models
const Person = mongoose.model('person', personSchema, 'persons');

//crud functions
export async function createPeople(name,contact,email){
 const newPerson = await Person.create(name,contact,email)
 return newPerson;
}

export async function findPersonById(id){
    return await Person.findById({_id:id})
}

export async function updatePerson({_id,name,email,contact}){
    await Person.updateOne({_id}, {name,contact,email});
    return Person.findPersonById(_id);
}

export async function deletePerson(id){
    return await Person.deleteOne(id);
}

export async function deleteAllPeople(){
    return await Person.deleteMany();
}
import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
  import { Task } from '../models/Task';

//TODO :)
class BookService {
    constructor() {
        this.collection = 'books';
    }

    static async fetchBooks() {}
    static async createBook() {}
    static async updateBook() {}
    static async deleteBook() {}
    
}

const service = new BookService();
export default service;
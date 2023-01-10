import axios from 'axios';

export default class BookApi {
    static booksUrl = 'http://localhost:3001/books';

    static getAllBooks() {
        console.log(this.booksUrl);
        return new Promise((resolve, reject) => {
            axios.get(this.booksUrl)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }

    static addBook(newtitle, newyear, newprice) {

        const newBook = {
            title: `${newtitle}`,
            year: `${newyear}`,
            price: `$${newprice}`
        }
        return new Promise((resolve, reject) => {
            axios.post(this.booksUrl, newBook)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
            axios.get(this.booksUrl)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });

    }
}
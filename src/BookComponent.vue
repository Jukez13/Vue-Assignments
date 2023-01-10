<template>
    <div>
        <h2>{{ title }}</h2>

        <div v-if="books && books.length">
            <table border="1">
                <thead>
                    <tr>
                        <th align="left">Title</th>
                        <th align="left">Publication Year</th>
                        <th align="left">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book) in books" :key="book.id">
                        <td>
                            <router-link :to="{ name: 'BookDetails', params: { title: book.title } }">
                                {{ book.title }}
                            </router-link>
                        </td>
                        <td>{{ book.year }}</td>
                        <td>{{ book.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else-if="isloading">
            <p class="loading">Loading Book data from the server, please wait!</p>
        </div>
        <div v-else>
            <h3 class="error">No book data available</h3>
        </div>
        <br />
        <button @click="addnewBook()">Add Book</button>
    </div>
</template>

<script>
import BookApi from './data/BookApi';
export default {
    name: 'BookComponent',
    data() {
        return {
            title: 'Books List',
            books: [],
            isloading: true,

        };
    },
    mounted() {
        this.getAllBooks();
    },
    methods: {
        getAllBooks() {
            BookApi.getAllBooks()
                .then((data) => {
                    this.books = data;
                })
                .catch((error) => {
                    console.log(error.message);
                })
                .finally(() => {
                    this.isloading = false;
                })
        },
        addBook(newtitle, newyear, newprice) {
            BookApi.addBook(newtitle, newyear, newprice)
                .then(() => this.getAllBooks())
                .catch((error) => console.log(error.message));
        },
        addnewBook() {
            this.$router.push({ name: 'AddBook' });
        }

    },

};
</script>

<style scoped>
h2 {
    color: darkcyan;
}

td {
    color: blue;
}

thead {
    color: darkmagenta;
}

tbody {
    color: blue;
}

label {
    color: red;
}

button {
    color: rgba(0, 0, 255, 0.768);
    background-color: rgb(204, 234, 253);
    border-radius: 3px;
    border: 2px solid;
    border-color: rgb(159, 209, 240);
}
</style>
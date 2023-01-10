<template>
    <div>
        <h1>{{ title }}</h1>

        <h2>Books List</h2>

        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th align="left">Title</th>
                        <th align="left">Publication Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in books" :key="index">
                        <td>
                            <input type="text" v-model="book.title" />
                        </td>
                        <td>
                            <input type="text" v-model="book.year" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <br /> <br />
        <label>Enter book title:</label>
        <input type="text" v-model="books.title" @input="input1(books.title)" />
        <label>Enter Publication year:</label>
        <input type="text" v-model="books.year" @input="input2(books.year)" />

        <br /> <br />
        <button @click="addNewRow()">Add Book </button>
    </div>
</template>


<script>
export default {
    name: "MyComponent",
    data() {
        return {
            title: "Demonstration of directives and data binding",
            books: [
                {
                    title: 'MongoDB in Action',
                    year: 2011,
                },
                {
                    title: 'JavaScript:The Good Parts',
                    year: 2008,
                },
            ],
        };
    },

    methods: {
        addNewRow() {
            this.books.push({
                title: this.books.title,
                year: this.books.year,

            });

        },
        input1(btitle) {
            this.books.title = btitle;
        },
        input2(byear) {
            this.books.year = byear;
        }

    },


};

</script>
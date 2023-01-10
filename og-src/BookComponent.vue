<template>
    <div>
        <h2>{{ title }} - {{ bookcat }}</h2>

        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th align="left">Title</th>
                        <th align="left">Publication Year</th>
                        <th align="left">Price</th>
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
                        <td>
                            <input type="text" v-model="book.price" />
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
        <label>Enter Price</label>
        <input type="text" v-model="books.price" @input="input3(books.price)" />

        <br /> <br />
        <button @click="addNewRow() ; submitData()">Add Book </button>
    </div>
</template>


<script>
export default {
    name: "BookComponent",
    props: {
        bookcat: String,
    },
    data() {
        return {
            title: "Books List",
            books: [
                {
                    title: 'MongoDB in Action',
                    year: 2011,
                    price: '$38',
                },
                {
                    title: 'JavaScript:The Good Parts',
                    year: 2008,
                    price: '$21',
                },
            ],
        };
    },

    methods: {
        addNewRow() {
            this.books.push({
                title: this.books.title,
                year: this.books.year,
                price: '$' + this.books.price,
            });
        },
        input1(btitle) {
            this.books.title = btitle;
        },
        input2(byear) {
            this.books.year = byear;
        },
        input3(bprice) {
            this.books.price = bprice;
        },
        submitData() {
            this.$emit("passData", this.books.title + ',' + this.books.year + ',$' + this.books.price);
        },


    },
    filters: {
        currency(value, symbol) {
            return symbol + " " + value;
        },
    },


};

</script>

<style scoped>
h2 {
    color: darkcyan;
}

thead {
    color: mediumvioletred;
}

td {
    color: blue;
}

label {
    color: #F33A6A;
}

button {
    color: blue;
    background-color: aliceblue;
}

input {
    color: blue;
}
</style>
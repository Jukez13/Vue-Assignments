<template>
    <div>
        <h2>{{ title }}</h2>
        <h3>{{ bookName }}</h3>
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
                    <tr>

                    </tr>
                </tbody>
                <!-- <tbody>
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
                </tbody> -->
            </table>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    props: {
        bname: String,
        byear: Number,
        bprice: String,
        cname: String,
    },
    data() {
        return {
            title: 'Employee List',
        };
    },
};
</script>
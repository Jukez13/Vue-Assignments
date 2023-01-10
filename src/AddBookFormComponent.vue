<template>
    <div>
        <h2>{{ title }}</h2>
        <form @submit.prevent="onSubmit" @input="setDirty()" novalidate="true">
            <p>
                <label for="name">Enter book title:</label>
                <input id="name" v-model="name" required />
                <span id="error" v-if="errors && errors.name">{{ errors.name }}</span>
            </p>

            <p>
                <label for="year">Enter publication year:</label>
                <input id="year" v-model="year" required />
            </p>

            <p>
                <label for="price">Enter price:</label>
                <input id="price" v-model="price" required />
            </p>

            <p>
                <button type="submit" v-bind:disabled="formInvalid">Submit</button>
            </p>
        </form>
    </div>
</template>

<script>
import BookApi from './data/BookApi';
export default {
    name: 'AddBookFormComponent',
    beforeRouteLeave(to, from, next) {
        if (this.dirty && !this.submitted) {
            const response = confirm('Are your sure want to leave ?');
            next(response);
        }
        else {
            next(true);
        }
    },
    data() {
        return {
            title: 'Add Book Form',
            name: 'null',
            year: '',
            price: '',
            submitted: false,
            formInvalid: true,
            dirty: false,
            errors: null,
        };
    },
    methods: {
        setDirty() {
            this.dirty = true;
        },
        checkError(name) {
            this.errors = {
                name: null,
            };
            if (!name) {
                this.errors.name = 'Name required';
            }
            else if (name.length < 3) {
                this.errors.name = 'Name should have minimum 3 characters';
            }
            if (this.errors.name) {
                this.formInvalid = true;
                return true;
            }
            this.formInvalid = false;
            return false;
        },
        onSubmit() {
            console.log(`IsDirty ${this.dirty}`);
            if (this.checkError(this.name)) return;
            BookApi.addBook(this.name, this.year, this.price)
                .then(() => this.getAllBooks())
                .catch((error) => console.log(error.message));
            this.submitted = true;
            this.$router.push({ name: 'Books' });
        },

    },
    watch: {
        name(newVal) {
            this.checkError(newVal);
        },
    },
};
</script>

<style scoped>
#error {
    color: red;
}

input {
    background-color: rgb(216, 239, 247);
    border: 1px solid rgb(118, 185, 227);
    padding: 2px;
}

input:focus {
    background-color: white;
}

button {
    background-color: rgb(216, 239, 247);
    border: 1px solid rgb(118, 185, 227);
    color: black;
    padding: 2px 5px;
    font-weight: 500;
}
</style>
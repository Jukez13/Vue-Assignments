<template>
    <div>
        <h2>{{ title }}</h2>
        <div>
            <label>Title: </label>
            {{ booktitle }}
        </div>
        <br /> <br />
        <button @click="goBack()">Back</button>
    </div>
</template>

<script>
const authenticated = true;
export default {
    name: 'BookDetailsComponent',
    beforeRouteEnter(to, from, next) {
        if (authenticated) {
            const response = confirm('Are your sure want to view the details ?');
            next(response);
        } else {
            next(true);
        }
    },
    data() {
        return {
            title: 'Book Details',
        };
    },
    computed: {
        booktitle() {
            const { title } = this.$route.params; //Es2015
            return title;
        },
    },
    methods: {
        goBack() {
            this.$router.push({ name: 'Books' });
        },
    },
};
</script>

<style scoped>
label {
    color: blue;
    font-weight: bold;
    font-size: larger;
}
</style>
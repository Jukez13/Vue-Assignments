<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!-- <tool v-for="tool in tools" :data="tool" :key="tool.id"></tool> -->
    <!-- let test = {
    id: 1,
    title: 'Title',
    description: 'Description'
    };
    
    export default {
    data() {
    return {
    tools: [
    test
    ]
    }
    }, -->
    <MyComponent v-for="book in books" :data="book" :key="book.bookname" />
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue'
let books = {
  bookname: 'JavaScript: The Good Parts',
  year: 2008,
  price: '21',

  // books: [
  //   {
  //     bookname: 'MongoDB in Action',
  //     year: 2011,
  //     price: '38',
  //   },
  //   {
  //     bookname: 'JavaScript: The Good Parts',
  //     year: 2008,
  //     price: '21',
  //   },
  // ],
}
export default {
  name: 'App',
  components: {
    MyComponent,
  },
  data() {
    return {
      title: 'Demonstration of passing data between components, styles demo',

    };
  },
};
</script>
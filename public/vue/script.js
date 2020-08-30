const counter = {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    increment() {
      this.value++;
    },
  },
  template: `
    <button @click="increment()">Current value: {{ value }}</button>`,
};

const increment = {
  components: {
    counter,
  },
  template: `
    <section>
      <h2>IncrementApp&trade; in Vue:</h2>
      <counter></counter>
    </section>
  `,
};

const app = new Vue({
  el: "#root",
  components: {
    increment,
  },
});

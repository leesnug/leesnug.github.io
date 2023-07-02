/* var app = new Vue({
      el: '#root',
      template: `<button @click="onSwitch()">{{isOpen ? '关' : '开'}}</button>`,
      data: {
        isOpen: false
      },
      methods: {
        onSwitch() {
          this.isOpen = !this.isOpen;
        }
      }
    }); */
const app = {
  data() {
    return {
      isOpen: false,
    };
  },
  template: `<button @click="onSwitch()">{{isOpen ? 'MVVM：关' : 'MVVM：开'}}</button>`,
  methods: {
    onSwitch() {
      this.isOpen = !this.isOpen;
    },
  },
};
Vue.createApp(app).mount("#root3");

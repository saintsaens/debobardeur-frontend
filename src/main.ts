import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios';


createApp(App).mount('#app');

async function postData() {
  try {
    const response = await axios.post(url, {message: "blabla"});
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}

postData();
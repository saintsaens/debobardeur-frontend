import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios';


createApp(App).mount('#app');

async function postData(text: string) {
  try {
    const response = await axios.post(url, {message: text});
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}


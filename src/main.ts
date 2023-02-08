import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios';


createApp(App).mount('#app');

export async function postData(text: string) {
  try {
    const response = await axios.post(url, {message: text});
    console.log(response);
    const data = response.data;

    return data;

  } catch (error) {
    console.log(error);
  }
}
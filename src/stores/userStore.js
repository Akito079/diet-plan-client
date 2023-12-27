import axios from "axios";
import { defineStore } from "pinia";
import {ref,computed} from "vue";
import AuthService from "@/services/AuthService";
export const userStore = defineStore('userStore',()=>{
  const user = ref([]);
  const errorArray = ref(null);
  async function getUser(){
    try {
      const response = await AuthService.getUser();
      user.value = response.data
    } catch (error) {
      errorArray.value = response.data.message;
    }
  }
return {user,getUser}
})
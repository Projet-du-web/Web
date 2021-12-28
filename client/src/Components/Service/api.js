import React from 'react';
import axios from 'axios';

const usersUrl = 'http://localhost:5000';

export const postRegister = async (user) => {
    console.log(user);
    const config = {
        headers: {
          "Content-Type": 'application/json',
        },
      };
      try {
        const { data } = await axios.post(`${usersUrl}/register`, user, config);
        localStorage.setItem('myToken', data.token);
        return data;
      }catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
         }
         this.handleAxiosError(error);
     }
}


export const postLogin = async (user) => {
    console.log(user);
    const config = {
        headers: {
          "Content-Type": 'application/json',
        },
      };

      try {
        const { data } = await axios.post(`${usersUrl}/login`, user, config);
        localStorage.setItem('myToken', data.token);
        return data;
      }catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
         }
         this.handleAxiosError(error);
     }
}
    
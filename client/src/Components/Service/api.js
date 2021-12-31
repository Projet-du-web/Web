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
        window.location.replace('/Dashboard-admin');
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
        localStorage.setItem('user',JSON.stringify(data.payload.user));
        return data;
      }catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
         }
     }
}



export const getUsers = async () => {
  const config = {
      headers: {
        "Content-Type": 'application/json',
      },
    };
    try {
      const { data } = await axios.get(`${usersUrl}/getUsers`, config);
      return data;
    }catch (error) {
      if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
       }
   }
}

export const DeleteUser = async (id) => {
  const config = {
      headers: {
        "Content-Type": 'application/json',
      },
    };
    try {
      const { data } = await axios.delete(`${usersUrl}/deleteUser/${id}`, config);
      window.location.replace('/Dashboard-admin');
      return data;
    }catch (error) {
      if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
       }
   }
}

export const postRessource = async (state) => {
  const config = {
      headers: {
        "Content-Type": 'application/json',
      },
    };
    try {
      const { data } = await axios.post(`${usersUrl}/create_ressource`,state, config);
      window.location.replace('/Responsable-ressource');
      return data;
    }catch (error) {
      if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
       }
   }
}

export const getRessource = async () => {
  const config = {
      headers: {
        "Content-Type": 'application/json',
      },
    };
    try {
      const { data } = await axios.get(`${usersUrl}/getRessource`, config);
      return data;
    }catch (error) {
      if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
       }
   }
}


export const getRessourceId = async (id) => {
  const config = {
      headers: {
        "Content-Type": 'application/json',
      },
    };
    try {
      console.log("Front get :",id)
      const { data } = await axios.get(`${usersUrl}/getRessourceId/${id}`,config);
      console.log(data);
      return data;
    }catch (error) {
      if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
       }
   }
}





   
    

import axios from 'axios';

const api = axios.create({
    baseURL: "https://back-end-2.herokuapp.com",
    
});

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    signup: async (password,email,cpf,name) => {
        let result = await api.post('/user/signup',{password,email,cpf,name});
        let json = await result.data;

        return json;
    },
    signin:async (password,cpf) => {
        const result = await api.post('/user/signin',{password,cpf});
        const json = await result.data;

        return json;

    },

    info: async (token)=>{
        let result = await api.post('/user/info',{token});
        let json = await result.data;

        return json;
    },
    consultCpf: async (cpf)=>{
        const result = await api.post('/consult',{cpf});
        const json = await result.data;

        return json;

    },
    consultEmail: async (email)=>{
        const result = await api.post('/consult',{email});
        const json = await result.data;

        return json;

    },
    editName: async (token, name)=>{
        console.log('user api ',name)
        let result = await api.put('/user/editAction',{token,name});
        let json = await result.data;
        console.log('API: ',json);
        return json;
    },
    editEmail: async (token, email)=>{
        console.log('user api ',email)
        let result = await api.put('/user/editAction',{token,email});
        let json = await result.data;
        console.log('API: ',json);
        return json;
    },
    editPassword: async (token, password)=>{
        console.log('user api ',password)
        let result = await api.put('/user/editAction',{token,password});
        let json = await result.data;
        console.log('API: ',json);
        return json;
    }
}
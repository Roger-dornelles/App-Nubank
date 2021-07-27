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

    info: async ()=>{
        let result = await api.get("/user/info",{});
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

    }
}
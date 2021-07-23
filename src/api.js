import axios from 'axios';

const api = axios.create({
    baseURL: "https://back-end-2.herokuapp.com",
    //baseURL:"http://localhost:3005"
});

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    signup: async (name,email,cpf,password) => {




        let result = await api.post('/user/signup',{name,email,cpf,password });

        let json = await result.data;
    
        console.log("JSON RESULTADO: ",json)
        return json;
    },

    info: async ()=>{
        let token = "$2a$10$iQoeQy0dgY9Er.Egwdsf6OLNY2Qc4zYzUTqrPOkv/.Q0RWX8LzdFi"
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        let result = await api.get("/user/info",{token});
        let json = await result.data;

        return json;
    }
}
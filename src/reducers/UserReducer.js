/* eslint-disable default-case */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const initialState = {
    name: '',
    cpf:'',
    email: '',
    password:'',
    newCpf:''
};

const UserReducer = (state=initialState, action) => {

    switch(action.type){
        case 'SET_CPF':
            return {...state, cpf: action.payload.cpf};
        break;

        case 'SET_EMAIL':
            return { ...state, email: action.payload.email};
        break;

        case 'SET_PASSWORD':
            return { ...state, password: action.payload.password};
        break;

        case 'SET_NAME':
            return { ...state, name: action.payload.name};

        case 'REMENBER_CPF':
            return { ...state, newCpf: action.payload.newCpf};
        break;
    }

    return state;
};

export default UserReducer;
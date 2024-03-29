import * as Yup from "yup";

export const SchemaValidationCpf = Yup.object().shape({
    cpf:Yup.string().required('Cpf Obrigatorio').min(11,'Cpf invalido.').max(11,'Cpf invalido.'),
   
});

export const SchemaValidationEmail = Yup.object().shape({
    email:Yup.string().required('E-mail obrigatorio').email('E-mail invalido')
});

export const SchemaValidationPassword = Yup.object().shape({

    password:Yup.string().required('Senha Obrigatoria').min(6,"minimo 6 caracters").max(20,'maximo 20 caracters')
});

export const SchemaValidationName = Yup.object().shape({
    name: Yup.string().required("Nome Obrigatorio").min(2, 'Nome precisa ter mais de 2 caracteres'),
  });


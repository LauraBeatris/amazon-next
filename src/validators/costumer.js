import * as Yup from 'yup';

export default Yup.object().shape({
    fullname: Yup.string()
        .min(5, 'The full name needs to have more than 5 letters')
        .required('Full name is required'),
    phone: Yup.string()
        .matches(/^[0-9]{9}$/g, 'Please, type a valid phone number')
        .required('Phone is required'),
    email: Yup.string()
        .email('Please, type a valid email')
        .required('Email is required'),
    birth: Yup.date('Please, type a valid birth date'),
});

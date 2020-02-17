import * as Yup from 'yup';

export default Yup.object().shape({
    payment: Yup.object().shape({
        card: Yup.string().required(),
        number: Yup.number().required(),
        method: Yup.string().required(),
    }),
});

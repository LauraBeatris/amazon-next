import * as Yup from 'yup';

export default Yup.object().shape({
    city: Yup.object().required(),
    state: Yup.object().required(),
});

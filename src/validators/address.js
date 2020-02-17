import * as Yup from 'yup';

export default Yup.object().shape({
    address: Yup.object().shape({
        street: Yup.string('Invalid street name').required(
            'Please, provide the name of the street'
        ),
        zipcode: Yup.number('Invalid zipcode').required('Phone is required'),
        district: Yup.string('Invalid district name').required(
            'Please, provide the name of the district'
        ),
        state: Yup.string('Invalids state name').required(
            'Please, provide a state name'
        ),
    }),
});

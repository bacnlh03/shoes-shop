import * as yup from 'yup';

const checkoutSchema = yup.object().shape({
  name: yup.string()
    .required('Please enter your name'),
  address: yup.string()
    .required('Please enter your address'),
  phone: yup.string()
    .required('Please enter your phone')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Please enter a valid phone number'
    )
});

export default checkoutSchema;
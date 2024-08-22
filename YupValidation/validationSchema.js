import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email('Invalid Email Address')
    .required('Username/Email is required'), // Adjusted the error message
  password: Yup.string()
    .min(8, 'At least 8 characters are required') // Adjusted the error message
    .required('Password is required'),
});



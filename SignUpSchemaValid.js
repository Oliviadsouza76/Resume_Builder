import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character',
    ) // Regex for password
    .required('Password is required'),
  mobileNumber: Yup.string()
    .matches(/^[+]?[0-9]{10,15}$/, 'Mobile Number is not valid') // Regex for mobile number
    .required('Mobile Number is required'),
});

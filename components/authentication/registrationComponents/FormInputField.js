import { TextField,Box } from "@material-ui/core";
import { Field } from 'formik';
export const FormInputField = ({name,label,type="text",error,helperText})=>(
    <Box mb={3}>
        <Field as={TextField}
        name={name}
        label={label}
        variant="outlined"
        type={type}
        fullWidth
        error={error}
        helperText={helperText}>
        </Field>
    </Box>
)
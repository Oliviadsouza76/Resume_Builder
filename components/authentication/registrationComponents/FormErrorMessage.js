import { Box, Typography } from "@material-ui/core";

export const FormErrorMessage = ({message}) =>(
    message?(
        <Box mb={3}>
            <Typography color="error" >{message}</Typography>
        </Box>
    ):null
);
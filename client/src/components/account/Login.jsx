import { Box, TextField, Button, styled } from '@mui/material';

const Component = styled(Box)`
  width: 400px;
`



const Login = () => {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    
    return(
       <Component>
        <img src= {imageURL} alt='login'/>
        <TextField variant="standard" />
        <TextField variant="standard" />
        <Button variant ="contained">Login</Button>
        <Button>Create an account</Button>
       </Component>
    )
}

export default Login;

import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:  linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
    center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size:cover;   
    position:fixed;
    
    `;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color:transparent;
`;
const Title = styled.h1`
    font-size:25px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction:column;
    width:350px;
`;
const Input = styled.input`
    margin: 20px 10px 0px 0px;
    flex : 1;
    padding: 5px;
    border-radius:2px;
    border:2px solid lightgray;
`;

const Link = styled.a`
    font-size: 12px;
    font-weight: 200;
    margin: 5px 0px;
    text-decoration:underline;
    cursor: pointer;
    
`;

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    color: white;
    transition: all 0.5s ease;
    margin-top:10px;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>Login</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>               
                    
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login

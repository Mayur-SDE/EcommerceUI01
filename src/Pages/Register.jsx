
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:  linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
    center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size:cover;   
    
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
    flex-wrap:wrap;
`;
const Input = styled.input`
    margin: 20px 10px 0px 0px;
    flex : 1;
    min-width : 40%;
    padding: 10px;
`;
const Aggrement = styled.span`
    font-size:12px;
    font-weight: 300;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    color: white;
    transition: all 0.5s ease;
`;







const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="Firstname"/>
                    <Input placeholder="Lastname"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Aggrement>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></Aggrement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register

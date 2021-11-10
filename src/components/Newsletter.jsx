import { Send } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #fcf5f4;
    flex-direction:column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing:2px;
    font-style:italic;

`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 0.5px solid lightgray;
`;
const Input = styled.input`
    border:none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    background-color: teal;
    border: none;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Update Your Email for timely Updates.</Desc> 
            <InputContainer>
                <Input type="Email" placeholder= "Enter Email"/>
                <Button>
                    <Send style={{color:"black", fontSize:25}}/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter

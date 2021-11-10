import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: lightgray;
`;
const Left = styled.div`
    padding: 20px;
    flex:1;
    display: flex;
    flex-direction:column;
`;

const Logo = styled.h1`
    font-size: 25px;
    font-weight: 600;
    margin-left:10px;
`;
const Desc = styled.p`
    font-size: 15px;
    font-weight: 400;
    margin: 20px 20px;
`;
const SocialContainer = styled.div`
    display: flex;
    cursor: pointer;
    
    
`;
const SocailIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    background-color: ${props=>props.color};
    

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;
const Center = styled.div`
    flex:1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex:1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    cursor: pointer;
`;

const Footer = () => {

    return (
        <Container>
            <Left>
                <Logo>ShoppingADDA.</Logo>
                <Desc>
                    Shopping is experience of happing buying is art of collection. Therefore Happyness required good quality and production. So Shop at ShoppingADDA.
                </Desc>
                <SocialContainer>
                    <SocailIcon color="#3b5998">
                        <Facebook />
                    </SocailIcon>
                    <SocailIcon color="#bd081c">
                        <Instagram />
                    </SocailIcon>
                    <SocailIcon color="#55acee">
                        <Twitter />
                    </SocailIcon>
                    <SocailIcon color="#bd081c">
                        <Pinterest />
                    </SocailIcon>
                </SocialContainer>
            </Left>
            <Center>

                <Title>USEFULL LINKS</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>                
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem> <Room style = {{marginRight:"10px"}}/>
                    Mata Nagar chowk Area hospital Chandrapur
                </ContactItem>
                <ContactItem> <Phone style = {{marginRight:"10px"}}/> 91-837-437-5500
                </ContactItem>
                <ContactItem>
                  <MailOutline style = {{marginRight:"10px"}}/>  contact@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>

        </Container>
    )
}

export default Footer;

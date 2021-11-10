import { Badge } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 55px;
    margin-top:2px;
        
`;

const Wrapper = styled.div`
    align-items: center;
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    background-color: #f5efef;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Languages = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid grey;
    align-items: center;
    display: flex;
    margin-left: 30px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
`
const Input = styled.input`
    border:none;
    margin-right:2px;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.div`
    font-weight: bold;
    font-size:20px;
    font-weight:800;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItems = styled.div`
    font-size: 12px;
    cursor: pointer;
    margin-left: 125px;

`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Languages>EN</Languages>
                <SearchContainer>
                <Input type ="searchbar" placeholder = "Search Me"/>
                <Search style={{color:"grey", fontSize:25}}/>
                </SearchContainer>
                </Left>
                <Center><Logo>ShoppingADDA.</Logo></Center>
                <Right>
                <MenuItems>Register</MenuItems>
                <MenuItems>Sign In</MenuItems>
                <MenuItems>
                <Badge badgeContent={4} color="success">
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
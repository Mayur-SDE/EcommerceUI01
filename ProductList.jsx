import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const ProductList = () => {
    return (
        <Container>
           <Announcement />
           <Navbar /> 
           <Footer />
           
        </Container>
    )
}

export default ProductList

import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position:relative;
`;
const Image = styled.img`
    width: 100%;
    height:100%;
    object-fit:cover;
`;
const Info = styled.div`
    top: 0;
    left: 0;
    position:absolute;
    width: 100%;
    height: 100%;
    align-items:center;
    display: flex;;
    justify-content:center;
    flex-direction:column;
`;
const Title = styled.h1`
    color:white;
    margin-bottom: 10px;
`;
const Button = styled.button`
    font-size:20px;
    background-color:transparent;
    color:white;
    padding: 10px;
    cursor: pointer;
    font-weight: 700;
`;


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem

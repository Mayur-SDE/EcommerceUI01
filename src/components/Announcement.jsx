import { Block, Brightness1 } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
   height:40px;
   background-color:#0b140f;
   color:white;
   display:flex;
   align-items:center;
   font-weight: 500;
   justify-content:center;
   font-size: 16px;

`

const Announcement = () => {
    return (
        <Container>
            <h3>SUPER DEAL! Free shipping on Order Over <i>₹500</i></h3>           
        </Container>
    )
}

export default Announcement

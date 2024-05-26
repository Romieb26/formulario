import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #686afa;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:hover {
        background-color: rgb(244, 152, 238);
    }
`;

function Button(props){
    return(
        <ButtonStyled onClick={props.onClick}>Resgistrar Producto</ButtonStyled>
    )
}

export default Button;
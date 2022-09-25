import React from "react";
import styled from "styled-components";

const Menu = styled.div`
background-color: blue;
width: 10vh;
height: 15vh;
display: flex;
justify-content: column;
`

const Dropdown = ({open}) => {
    if (open) {
        return (
            <Menu />
        )
    }
}

export default Dropdown;
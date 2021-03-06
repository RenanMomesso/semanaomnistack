import React from 'react';
import styled from 'styled-components/native';


const ListaItemSwipe = styled.TouchableHighlight`
height:50px;
width:100%;
background-color:#FF0000;
justify-content:center;
`;

const ListaItemIcon = styled.View `
width:20px;
height:20px;
background-color:white;
justify-content:center;
margin-left:10px;

`;

export default (props) => {
    return(
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
            <ListaItemIcon></ListaItemIcon>
        </ListaItemSwipe>

    );
}
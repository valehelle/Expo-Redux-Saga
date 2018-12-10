import React from 'react';
import { Title, StyledImage } from './style'
import { Main, Center } from '../Styled'
import { Button } from 'react-native'

export const HomeComponent = ({ handleAlert, text }) => {
    return(
    <Main>
        <Center>
            <StyledImage
                resizeMode="contain"
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/RHB_Logo.svg/1200px-RHB_Logo.svg.png'}}
            />
            <Title>{text}</Title>
            <Button onPress={ handleAlert } title="Press Me"/>
        </Center>
    </Main>
    )
}


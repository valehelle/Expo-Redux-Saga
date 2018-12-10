import styled from 'styled-components';
import { View } from 'react-native'

export const Main = styled(View)`
    flex: 1;
    background-color: ${props => props.theme.background}
`;

export const Center = styled(View)`
    flex:1;
    align-items: center;
    justify-content: center;
`
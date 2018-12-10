import React from 'react';
import { StyledScrollView } from './style'
import { Main } from '../Styled'

import { ExpoLinksView } from '@expo/samples';

export const LinkComponent = () => {
    return(
    <Main>
        <StyledScrollView>
            <ExpoLinksView />
        </StyledScrollView>
    </Main>
    )
}
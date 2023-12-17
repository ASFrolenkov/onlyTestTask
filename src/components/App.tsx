import React from 'react';
import styled from 'styled-components';

import Content from './Content';
import BackgroundWrapper from './BackgroundWrapper';

const AppComponent = styled.div`
    height: 100%;
    width: 100%;

    background: #f4f5f9;

    display: grid;
    grid-template-columns: repeat(24, 1fr);

    @media (max-width: 426px) {
        display: block;
    }
`

//основное наполнеие в блоке content
const App = () => {
    return (
        <AppComponent>
            <BackgroundWrapper>
                <Content/>
            </BackgroundWrapper>
        </AppComponent>

    )
}

export default App
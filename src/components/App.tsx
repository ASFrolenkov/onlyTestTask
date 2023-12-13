import React from 'react';
import styled from 'styled-components';

import Content from './Content';
import BackgroundWrapper from './BackgroundWrapper';

const App = () => {
    const App = styled.div`
        height: 100%;
        width: 100%;

        background: #f4f5f9;

        display: grid;
        grid-template-columns: repeat(24, 1fr);
    `

    return (
        <App>
            <BackgroundWrapper>
                <Content/>
            </BackgroundWrapper>
        </App>

    )
}

export default App
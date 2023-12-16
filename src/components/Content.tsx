import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import CenterContent from './CenterContent';
import Circle from '../UI/Circle';
//import NewCircle from '../UI/NewCircle';

const ContentComponent = styled.section`
    position: relative;
    width: 100%;
    height: 100%;

    padding:170px 40px 104px 80px;
`

const Content = () => {
    return (
        <ContentComponent>
            <Title>Исторические даты</Title>
            <CenterContent>
                <Circle/>
            </CenterContent>
        </ContentComponent>
    )
}

export default Content
import React from 'react';
import styled from 'styled-components';

import CircleComponent from '../UI/CircleComponent';

const Content = () => {
    const Title = styled.h1`
        position: relative;

        font-size: 56px;
        line-height: 67px;
        color: #42567a;

        margin-top: 170px;
        margin-left: 80px;

        width: 353px;

        &:before {
            content: '';
            position: absolute;
            top: 7px;
            left: -80px;

            border-left: 6px solid #3877EE;
            border-image: linear-gradient(180deg, #3877EE, #EF5DA8);
            border-image-slice: 1;

            height: 120px;
        }
    `

    const Content = styled.div`
        position: relative;
    `

    return (
        <>
            <Title>Исторические даты</Title>
            <CircleComponent/>
        </>
    )
}

export default Content
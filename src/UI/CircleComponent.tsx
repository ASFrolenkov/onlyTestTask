import React from 'react'
import styled from 'styled-components'

const CircleComponent = () => {
    const CircleComponent = styled.div`
        position: absolute;
        top: 215px;
        left: 50%;
        transform: translateX(-50%);


        width: 530px;
        height: 530px;

        border: 1px solid rgba(66,86,122, 0.2);
        border-radius: 100%;

        transform-origin: center center;
    `
    const SingleComponent = styled.div`
        width: 10px;
        height: 10px;
        background-color: #000;

        border-radius: 100%;

        position: relative;
    `

    return (
        <CircleComponent>
            <SingleComponent/>
        </CircleComponent>
    )
}

export default CircleComponent
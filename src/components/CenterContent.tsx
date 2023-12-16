import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const CenterWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(480px - 265px);

    width: 530px;
    height: 530px;
`

const CenterContent:FC<PropsWithChildren> = ({children}) => {


     return (
        <CenterWrapper>
            {children}
        </CenterWrapper>
    )
}

export default CenterContent
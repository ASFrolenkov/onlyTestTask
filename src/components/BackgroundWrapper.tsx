import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const BackgroundWrapper: FC<PropsWithChildren> = ({children}) => {
    const borderColor = '#42567A'

    const ContentWrapper = styled.div`
        grid-column: 5 / 23;
        
        position: relative;
    `
    const VerticalLines = styled.div`
        position: absolute;

        left: 0;
        border-left: 1px solid ${borderColor};
        border-right: 1px solid ${borderColor};
        opacity: 0.2;

        height: 100%;
        width: 100%;

        &:after {
            content: '';
            position: absolute;
            left: 0;

            border-right: 1px solid ${borderColor};

            height: 100%;
            width: 50%;
        }

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 480px;

            border-bottom: 1px solid ${borderColor};
            
            width: 100%;
        }
    `

    return (
        <>
            <ContentWrapper>
                <VerticalLines/>
                {children}
            </ContentWrapper>
        </>

    )
}

export default BackgroundWrapper
import React from 'react'
import styled from 'styled-components'
import arrow from '../icons/arrow.svg';
import arrowMobile from '../icons/arrowMobile.svg'

const Wrapper = styled.div`
    width: 120px;

    @media (max-width: 426px) {
        width: auto;
    }
`
const Counter = styled.div`
    font-size: 14px;
    color: #42567A;
    line-height: 24px;

    @media (max-width: 426px) {
        line-height: inherit;
    }
`
const ArrowWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 18px;

    @media (max-width: 426px) {
        margin-top: 6px;
        gap: 8px;
    }
`

const ArrowBtn = styled.button<{$active: boolean}>`
    background: none;
    border: none;
    height: 50px;

    opacity: ${props => props.$active ? '1' : '0.5'};

    cursor: ${props => props.$active ? 'pointer' : 'default'};

    transition: 0.25s;

    border-radius: 100%;

    &>.imgMobile {
        display: none;
    }

    &:nth-child(2) {
        transform: scale(-1, 1);
    }

    &:hover {
        background: ${props => props.$active ? 'white' : 'none'};
    }

    @media (max-width: 426px) {
        height: 25px;

        &>.imgDesktop {
            display: none;
        }

        &>.imgMobile {
            display: block;
        }
    }
`

const addZero = (counter: number) => {
    if (counter < 10) {
        return '0' + counter
    }
    return counter
}

const Navigation = ({currentElemNumber, dataLength, setCurrElem}: {currentElemNumber: number, dataLength: number, setCurrElem: React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <Wrapper>
            <Counter>{addZero(currentElemNumber)}/{addZero(dataLength)}</Counter>

            <ArrowWrapper>
                <ArrowBtn 
                    $active={currentElemNumber !== 1}
                    onClick={() => {
                        if (currentElemNumber > 1) {
                            setCurrElem(currentElemNumber - 1)
                        }
                    }}>
                    <img src={arrow} className='imgDesktop' alt="left-arrow" />
                    <img src={arrowMobile} className='imgMobile' alt="left-arrow" />
                </ArrowBtn>

                <ArrowBtn
                    $active={currentElemNumber !== dataLength}
                    onClick={() => {
                        if (currentElemNumber < dataLength) {
                            setCurrElem(currentElemNumber + 1)
                        }
                    }}>
                    <img src={arrow} className='imgDesktop' alt="right-arrow" />
                    <img src={arrowMobile} className='imgMobile' alt="left-arrow" />
                </ArrowBtn>
            </ArrowWrapper>
        </Wrapper>
    )
}

export default Navigation
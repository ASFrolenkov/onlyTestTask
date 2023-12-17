import React, { useState } from 'react';
import styled from 'styled-components';

import Title from './Title';
import CenterContent from './CenterContent';
import Circle from '../UI/Circle';
import Navigation from '../UI/Navigation';

import fakeApi from '../fakeApi/fakeApi.js';
import Posts from './Posts';

const ContentComponent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    padding:170px 160px 104px 80px;

    @media (max-width: 426px) {
        padding: 59px 20px 32px;
    }
`
const ArrowContainer = styled.div`
    position: relative;

    display: inline-block;

    margin-top: 393px;

    @media (max-width: 426px) {
        position: absolute;

        margin-top: 398px;
    }
`
const PostsConteiner = styled.div`
    margin-top: 53px;
    position: relative;

    @media (max-width: 426px) {
        margin-top: 20px;
    }
`
const Divider = styled.div`
    display: none;
    @media (max-width: 426px) {
        display: block;

        width: 100%;
        margin-top: 185px;

        border-bottom: 1px solid #C7CDD9;
    }
`

const Bullets = styled.div`
    display: none;

    margin: 127px auto 0;
    @media (max-width: 426px) {
        display: flex;
        justify-content: space-between;

        width: 86px;
    }
`
const BulletBtn = styled.button<{$active: boolean}>`
    display: none;
    @media (max-width: 426px) {
        display: block;

        width: 6px;
        height: 6px;

        border: none;
        border-radius: 100%;

        background: #42567A;

        opacity: ${props => props.$active ? '1' : '0.4'}
    }
`

const Content = () => {
    //сюда переадем индекс элемента + 1, чтобы ничего не сломалось начинаем с первого элемента
    const [currElem, setCurrElem] = useState(1);

    const currentDataElem = fakeApi.find((elem: {id: number}) => elem.id === currElem);

    return (
        <ContentComponent>
            <Title>Исторические даты</Title>
            <CenterContent>
                <Circle data={fakeApi} currElem={currElem} setCurrElem={setCurrElem}/>
            </CenterContent>

            <ArrowContainer>
                <Navigation currentElemNumber={currElem} dataLength={fakeApi.length} setCurrElem={setCurrElem}/>
            </ArrowContainer>

            <Divider/>

            <PostsConteiner>
                <Posts data={currentDataElem}/>
            </PostsConteiner>

            <Bullets>
                {fakeApi.map((elem: {id: number}, index: number) => {
                    return (
                        <BulletBtn 
                            $active={elem.id === currElem}
                            onClick={() => {
                                setCurrElem(index + 1)
                            }}/>
                    )
                })}
            </Bullets>
        </ContentComponent>
    )
}

export default Content
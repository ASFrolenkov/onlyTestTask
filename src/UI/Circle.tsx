import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getDeg } from '../helpers/getDeg';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

import fakeApi from '../fakeApi/fakeApi.js';

const CircleWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    border: 1px solid rgba(66,86,122, 0.2);
    border-radius: 100%;
    z-index: 1;
`
const Center = styled.div`
    position: relative;

    width: 56px;
    height: 56px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const ItemBtn = styled.button<{$x:number, $y:number, $active: boolean}>`
    position: absolute;

    cursor: pointer;

    width: 56px;
    height: 56px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;

    //262 + 2
    left: ${props => props.$x + 'px'};
    bottom:  ${props => props.$y + 'px'};

    &>span {
        font-size: ${props => props.$active ? '20px' : '0px'};
        line-height: 30px;
        color: #42567A;
        z-index: 1;
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: center center;

        background: ${props => props.$active ? '#F4F5F9' : '#42567A'};
        border: ${props => props.$active ? '1px solid rgba(48,62,88, 0.5)' : 'none'};
        width: ${props => props.$active ? 'calc(100% - 1px)' : '6px'};
        height: ${props => props.$active ? 'calc(100% - 1px)' : '6px'};
        border-radius: 100%;

        transition: 0.3s;
    }

    &:hover>span {
        font-size: 20px;
    }

    &:hover:after {
        width: calc(100% - 1px);
        height: calc(100% - 1px);

        background: #F4F5F9;
        border: 1px solid rgba(48,62,88, 0.5);
    }
`
const Title = styled.span`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #42567A;

    position: absolute;

    top: 13px;
    left: 421px;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const DateWrapper = styled.div`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;

    font-size: 200px;
    font-weight: 700;
    line-height: 160px;
    letter-spacing: -4px;
`
const PrevYear = styled.p`
    color: #5D5FEF;
    position: relative;
    right: 67px;
    bottom: 12px;
`
const NextYear = styled.p`
    color: #EF5DA8;
    position: relative;
    left: 26px;
    bottom: 12px;
`

const CircleComp = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const arrOfId = fakeApi.map((elem: {id: number}) => elem.id)
//radius 262 + 2  2px - бордеры по бокам
const radius = 264;
const arc = 2 * Math.PI * (1 / fakeApi.length);

const tl = gsap.timeline();
const dateTl = gsap.timeline();

const getYear = (currentId: number) => {
    const result = {
        prevYear: 0,
        nextYear: 0
    }

    fakeApi.forEach((elem: {id: number, prevYear: number, nextYear: number}) => {
        if (elem.id === currentId) {
            result.nextYear = elem.nextYear;
            result.prevYear = elem.prevYear;
        }
    })

    return result;
}

const Circle = () => {
    const circle = useRef(null);
    const dateRef = useRef(null);
    const prevYearRef = useRef(null);
    const nextYearRef = useRef(null);


    //Стейт прокинуть из компонента выше и соединить с стрелками 
    const [activeId, setActiveId] = useState(1);

    const {prevYear, nextYear} = getYear(activeId);


    const {contextSafe} = useGSAP({dependencies: [activeId]});
    const clickHandler = contextSafe((elem : number) => {
        //очищаем анимацию, чтобы не стакалась
        gsap.killTweensOf([circle.current, '.item', prevYearRef.current, nextYearRef.current])

        setActiveId(() => elem);
        const {elemIndex, isRight} = getDeg(elem, arrOfId)
        const deg = elemIndex*(360/arrOfId.length);

        if (isRight) {
            //right side
            tl.to(circle.current, {rotation: -deg, duration: 0.8, ease: 'power1.inOut'})
                .to('.item', {rotation: deg, duration: 0.8, ease: 'power1.inOut'}, '<')
                .fromTo('.title', {opacity: 0}, {opacity: 1, duration: 1})
        } else {
            //left side
            tl.to(circle.current, {rotation: deg, duration: 0.8, ease: 'power1.inOut'})
                .to('.item', {rotation: -deg, duration: 0.8, ease: 'power1.inOut'}, '<')
                .fromTo('.title', {opacity: 0}, {opacity: 1, duration: 1,})
        }

        const nextYearState = getYear(elem);
        dateTl.fromTo(prevYearRef.current, {
            textContent: prevYear
        }, {
            textContent: nextYearState.prevYear,
            duration: 1,
            snap: {
                textContent: 1
            },
        }, 0).play(0)
        dateTl.fromTo(nextYearRef.current, {
            textContent: nextYear
        }, {
            textContent: nextYearState.nextYear,
            duration: 1,
            snap: {
                textContent: 1
            },
        }, 0).play(0)
    });

    const currentData = fakeApi.find((elem: {id: number}) => {
        return elem.id === activeId
    });

    return (
        <CircleComp>
            <CircleWrapper ref={circle}>
                <Center>
                    <div>
                        {fakeApi.map((elem: {id: number, title: string}, index: number) => {
                            const angle = (index * arc) + 1.15; // +1 чтобы немного изменить ориентацию
                            const x = radius * Math.cos(angle);
                            const y = radius * Math.sin(angle);

                            return (<ItemBtn 
                                        $x={x} 
                                        $y={y} 
                                        $active={activeId === elem.id} 
                                        key={elem.id} //в elem попадает уникальный id
                                        onClick={() => {clickHandler(elem.id)}}>
                                        <span className='item'>{elem.id}</span>
                                    </ItemBtn>)
                        })}
                    </div>
                </Center>
            </CircleWrapper>

            {<Title className='title'>{currentData.title}</Title>}

            <DateWrapper ref={dateRef}>
                <PrevYear ref={prevYearRef}>
                    {prevYear}
                </PrevYear>
                <NextYear ref={nextYearRef}>
                    {nextYear}
                </NextYear>
            </DateWrapper>
        </CircleComp>
    )
}

export default Circle
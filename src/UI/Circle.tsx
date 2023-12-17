import React, { useState, useRef, FC } from 'react'
import styled from 'styled-components'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const CircleWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    border: 1px solid rgba(66,86,122, 0.2);
    border-radius: 100%;
    z-index: 1;

    @media (max-width: 426px) {
        display: none;
    }
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
        transition: font-size 0.25s;
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

    @media (max-width: 426px) {
        left: -140px;
        top: 50px;
    }
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

    @media (max-width: 426px) {
        font-size: 56px;
        letter-spacing: -1px;
    }
`
const PrevYear = styled.p`
    color: #5D5FEF;
    position: relative;
    right: 67px;
    bottom: 12px;

    @media (max-width: 426px) {
        right: 17px
    }
`
const NextYear = styled.p`
    color: #EF5DA8;
    position: relative;
    left: 26px;
    bottom: 12px;

    @media (max-width: 426px) {
        left: 8px;
    }
`

//высота и ширина зависят от родительскиого компонента
const CircleComp = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const tl = gsap.timeline();

const getDeg = (index: number, arr: number[]) => {
    const leftHalfArr = arr.slice(0, arr.length/2);
    const rightHalfArr = arr.slice(arr.length/2).reverse();

    let isRightSide = false;

    if (rightHalfArr.find((elem) => elem === index)) {
        isRightSide = true;
    }

    return {
        elemIndex: isRightSide ? rightHalfArr.indexOf(index) + 1 : leftHalfArr.indexOf(index),
        isRightSide
    }
}

interface IData {
    id: number,
    title: string,
    prevYear: number,
    nextYear: number
}

const savedYear = {
    state: {
        savedPrevYear: 0,
        savedNextYear: 0,
        inited: false,
    },
    getSavedYear(): {savedPrevYear: number, savedNextYear: number, inited: boolean} {
        return this.state;
    },
    setSavedYear(savedPrevYear: number, savedNextYear: number) {
        this.state = {
            savedPrevYear,
            savedNextYear,
            inited: true,
        }
    }
}

//radius 262 + 2  2px - бордеры по бокам
//радиус расположения элементов по окружности
const Circle:FC<{data: IData[], radius?: number, currElem: number, setCurrElem: React.Dispatch<React.SetStateAction<number>>}> = ({data, radius = 264, currElem, setCurrElem}) => {
    const arc = 2 * Math.PI * (1 / data.length);
    const arrOfId = data.map((elem: {id: number}) => elem.id);

    const circle = useRef(null);
    const dateRef = useRef(null);

    //получение года из date
    const getYear = (currentId: number) => {
        const result = {
            prevYear: 0,
            nextYear: 0,
        }
    
        data.forEach((elem: {id: number, prevYear: number, nextYear: number}) => {
            if (elem.id === currentId) {
                result.nextYear = elem.nextYear;
                result.prevYear = elem.prevYear;
            }
        })
    
        return result;
    }


    const {prevYear, nextYear} = getYear(currElem);

    useGSAP(() => {
       //очищаем анимацию, чтобы не стакалась

       const {savedNextYear, savedPrevYear, inited} = savedYear.getSavedYear();

       const {elemIndex, isRightSide} = getDeg(currElem, arrOfId)
       const deg = elemIndex*(360/arrOfId.length);

       if (isRightSide) {
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

        if (inited) {
            gsap.from('.prevYear', {
                textContent: savedPrevYear,
                duration: 1,
                snap: {
                    textContent: 1
                },
            });
            
            gsap.from('.nextYear', {
                textContent: savedNextYear,
                duration: 1,
                snap: {
                    textContent: 1
                },
            });
        }

        savedYear.setSavedYear(prevYear, nextYear)

    }, [currElem, arrOfId])

    const currentData = data.find((elem: {id: number}, index) => {
        return index + 1 === currElem
    });

    return (
        <CircleComp>
            <CircleWrapper ref={circle}>
                <Center>
                    <div>
                        {data.map((elem: {id: number, title: string}, index: number) => {
                            const angle = (index * arc) + 1.15; // +1. чтобы немного изменить ориентацию
                            const x = radius * Math.cos(angle);
                            const y = radius * Math.sin(angle);

                            return (<ItemBtn 
                                        $x={x} 
                                        $y={y} 
                                        $active={currElem === index + 1} 
                                        key={elem.id} //в elem попадает уникальный id
                                        onClick={() => {
                                            //clickHandler(index + 1)
                                            setCurrElem(index + 1)
                                        }}>
                                        <span className='item'>{index + 1}</span>
                                    </ItemBtn>)
                        })}
                    </div>
                </Center>
            </CircleWrapper>

            {<Title className='title'>{currentData.title}</Title>}

            <DateWrapper ref={dateRef}>
                <PrevYear className='prevYear'>
                    {prevYear}
                </PrevYear>
                <NextYear className='nextYear'>
                    {nextYear}
                </NextYear>
            </DateWrapper>
        </CircleComp>
    )
}

export default Circle
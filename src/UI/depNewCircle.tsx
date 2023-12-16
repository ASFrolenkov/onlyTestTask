import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getDeg } from '../helpers/getDeg';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin);

const arrOfItems =[1,2,3,4,5,6,7,8],
    numItems = arrOfItems.length,
    itemStep = 1 / numItems,
    wrapProgress = gsap.utils.wrap(0, 1),
    snap = gsap.utils.snap(itemStep),
    wrapTracker = gsap.utils.wrap(0, numItems),
    tracker = {
        item: 0
    },
    itemsArray = Array.prototype.filter.call(arrOfItems, function (_:any, index: number) {
        console.log('itemsArr')
        return index + 1;
    });

const tl = gsap.timeline({paused: true, reversed: true})

const CircleWrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Circle = styled.circle`
    fill: none;
    stroke: #42567A;
    stroke-linecap: round;
    stroke-width: 0.1;
    stroke-opacity: 0.3;
`
const Item = styled.div<{$active: boolean}>`
    position: absolute;

    cursor: pointer;

    width: 56px;
    height: 56px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;

    &>span {
        font-size: ${props => props.$active ? '20px' : '0px'};
        line-height: 30px;
        color: #42567A;
        z-index: 1;

        transition: 0.25s;
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

const moveWheel = (amount: number) => {
    console.log(amount);
    gsap.to(tl, {
        progress: snap(tl.progress() + amount),
        modifiers: {
            progress: wrapProgress
        }
    })
}

const onClickHandler = (index: number, elem: number, setActive: React.Dispatch<React.SetStateAction<number>>) => {
    const current = tracker.item;
    console.log('current', current);

    if (index === current) {
        return;
    }

    const diff = current - index; // -1 

                //1 < 3
    //console.log(Math.abs(diff) < (numItems / 2))
    if (Math.abs(diff) < (numItems / 2)) {
                    //-1 * 1/6
        moveWheel(diff * itemStep);
    } else {
        let amt = numItems - Math.abs(diff);

        if (current > index) {
            moveWheel(amt * itemStep);
        } else {
            moveWheel(amt * -itemStep);
        }
    }

    setActive(() => elem);
}

const NewCircle = () => {
    const [active, setActive] = useState(1);

    useGSAP(() => {
        console.log(document.querySelectorAll('.item'));
        gsap.set('.item', {
            //@ts-ignore
            motionPath: {
                path: '#circlePath', 
                align: '#circlePath',
                alignOrigin: [0.5, 0.5],
                //@ts-ignore
                end: i => i / numItems
            },
        })

        tl.to('.wrapper', {
            rotation: 360,
            transformOrigin: 'center',
            duration: 1,
            ease: 'none'
        })
        tl.to('.item', {
            rotation: '-=360',
            transformOrigin: 'center',
            duration: 1,
            ease: 'none'
        }, 0)
        tl.to(tracker, {
            item: numItems,
            duration: 1,
            ease: 'none',
            modifiers: {
                item(value) {
                    console.log('numItems: ', numItems, ' MathRound: ', Math.round(value))
                    console.log(wrapTracker(numItems - Math.round(value)))
                    return wrapTracker(numItems - Math.round(value))
                }
            }
        }, 0)
    })

    return (
        <>
            <CircleWrapper className='wrapper'>
                {arrOfItems.map((elem, index) => {
                    return (
                        <Item 
                            className='item' 
                            key={elem}
                            onClick={() => {onClickHandler(index, elem, setActive)}}
                            $active={elem === active}>
                            <span>
                                {elem}
                            </span>
                        </Item>
                    )
                })}
                <svg viewBox='0 0 100 100'>
                    <Circle cx={50} cy={50} r={50}/>
                    <path id='circlePath' d="M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0" fill='none'/>
                </svg>
            </CircleWrapper>
        </>
    )
}

export default NewCircle
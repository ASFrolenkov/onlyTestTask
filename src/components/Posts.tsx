import React, { useRef } from 'react'
import { IData } from '../interface/IData'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import styled from 'styled-components';
import blueArrow from '../icons/blueArrow.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import 'swiper/css';
import '../css/swiper.css';


const Title = styled.h3`
    font-size: 25px;
    line-height: 30px;
    color: #3877EE;
    font-weight: 400;
    font-family: 'Bebas Neue', sans-serif;

    @media (max-width: 426px) {
        font-size: 16px;
        line-height: 19px;
    }
`

const Descr = styled.p`
    height: 90px;
    font-size: 20px;
    line-height: 30px;
    color: #42567A;
    max-width: 400px;
    margin-top: 15px;

    @media (max-width: 426px) {
        font-size: 14px;
        line-height: 20px;
        height: 80px;
    }
`
const SwipeBtnPrev = styled.button`
    cursor: pointer;

    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(-1, 1);
    left: -60px;


    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 100%;
    border: none;
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.10);

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 426px) {
        display: none;
    }
`

const SwipeBtnNext = styled.button`
    cursor: pointer;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: calc(-40px - 80px);


    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 100%;
    border: none;
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.10);

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 426px) {
        display: none;
    }
`

const Posts = ({data}: {data: IData}) => {
    const {content} = data;
    const wrapperRef = useRef(null);

    useGSAP(() => {
        gsap.from(wrapperRef.current, {
            opacity: 0,
            y: 20,
            duration: 1.5,
        })
    }, [content])

    return (
        <div ref={wrapperRef}>
            <SwipeBtnPrev className='swiperPrev'>
                <img src={blueArrow} alt="left-arrow"/>
            </SwipeBtnPrev>
            <Swiper
                modules={[Navigation]}
                spaceBetween={80}
                breakpoints={{
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 25
                    },
                    1440: {
                        slidesPerView: 'auto',
                        spaceBetween: 80
                    }
                }}
                navigation={{
                    nextEl: '.swiperNext',
                    prevEl: '.swiperPrev'
                }}>
                {content.map((elem: {year: number, descr: string}, index: number) => (
                    <SwiperSlide className='swiperSlide' key={index}>
                        <Title>{elem.year}</Title>
                        <Descr>{elem.descr}</Descr>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SwipeBtnNext className='swiperNext'>
                <img src={blueArrow} alt="left-arrow"/>
            </SwipeBtnNext>
        </div>

    )
}

export default Posts
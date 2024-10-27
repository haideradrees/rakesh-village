import { useState, useRef } from 'react';
import { Carousel, Dropdown, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import Image from 'next/image';
import BackgroundMusicPlayer from '@/components/BackgroundMusicPlayer';

export default function Index() {

    return (
        <div className='frame'>
            <div className='video-bg'>
                <video autoPlay loop muted>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                <a className="pulseWrapper1" target='_blank'>
                    <div className="fixedCircle"></div>
                    <div className="pulseLoader"></div>
                </a>
                <a className="pulseWrapper2" target='_blank'>
                    <div className="fixedCircle"></div>
                    <div className="pulseLoader"></div>
                </a>
                <a className="pulseWrapper3" href="https://home.rakeshvillage.fun/" target='_blank'>
                    <div className="fixedCircle"></div>
                    <div className="pulseLoader"></div>
                </a>
            </div>
            <div className='scoll-right'>
                <span>Scroll</span>
                <div className="arrow-box">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </div>
            </div>
            <BackgroundMusicPlayer />
        </div>
    );
}

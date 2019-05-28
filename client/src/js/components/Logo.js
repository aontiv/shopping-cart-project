import React from 'react';

const Logo = () => (
    <div className='logo container mt-4'>
        <div className='row justify-content-center'>
            <svg className='col-8 col-md-6 col-xl-4' height='100%' width='100%' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 400">
                <defs>
                    <linearGradient id="b">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset=".396" stopColor="#916f6f"/>
                        <stop offset="1"/>
                    </linearGradient>
                    <linearGradient id="a">
                        <stop offset="0" stopColor="#f60"/>
                        <stop offset=".497" stopColor="#5f8dd3"/>
                        <stop offset="1" stopColor="#fff"/>
                    </linearGradient>
                    <linearGradient id="e" x1="-329.599" x2="-329.599" y1="-330.942" y2="-61.491" gradientTransform="translate(579.6 175.702)" gradientUnits="userSpaceOnUse" xlinkHref="#a"/>
                    <linearGradient id="d" x1="-329.599" x2="-329.599" y1="-330.942" y2="-63.849" gradientTransform="translate(579.6 175.702)" gradientUnits="userSpaceOnUse" xlinkHref="#b"/>
                </defs>
                <path className="nighttime" fill="url(#d)" d="M250-155.24A202.24 202.24 0 0 0 47.76 47a202.24 202.24 0 0 0 11.643 66.92l.635-.275 41.59-53.755 30.66 38.325L237.83-40.935l34.198 55.424L288.538.928l83.137 112.618 25.353-39.505 43.83 39.164A202.24 202.24 0 0 0 452.24 47 202.24 202.24 0 0 0 250-155.24zm190.857 268.445a202.24 202.24 0 0 1-.02.056l.066-.015z" transform="translate(0 203)"/>
                <path className="daytime" fill="url(#e)" d="M250-155.24A202.24 202.24 0 0 0 47.76 47a202.24 202.24 0 0 0 11.643 66.92l.635-.275 41.59-53.755 30.66 38.325L237.83-40.935l34.198 55.424L288.538.928l83.137 112.618 25.353-39.505 43.83 39.164A202.24 202.24 0 0 0 452.24 47 202.24 202.24 0 0 0 250-155.24zm190.857 268.445a202.24 202.24 0 0 1-.02.056l.066-.015z" transform="translate(0 203)"/>
                <path d="M132.288 301.215l79.976-75.979 25.566-63.171zM59.403 316.92l36.832-29.132 4.93-24.846-41.762 53.977M371.675 316.546l26.32-24.093-.967-15.412zM228.774 277.712l29.48-34.198 6.487 12.972 17.099-22.406-16.51 32.43-7.665-14.152z"/>
            </svg>
        </div>
    </div>
);

export default Logo;

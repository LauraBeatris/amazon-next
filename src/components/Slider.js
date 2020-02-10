import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Product from '~/components/Product';

function SampleNextArrow(props) {
    const { className, style, onClick, to } = props;
    return (
        <button
            className={`${className} button button--text button--icon cursor-pointer`}
            style={{
                ...style,
                display: 'block',
                right: '5px',
                position: 'absolute',
                zIndex: 1000,
            }}
            onClick={onClick}
            aria-label={to}
        >
            <FontAwesomeIcon icon={faArrowRight} color="#000000" size="sm" />
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick, to } = props;
    return (
        <button
            className={`${className} button button--text button--icon cursor-pointer`}
            style={{
                ...style,
                display: 'block',
                left: '5px',
                position: 'absolute',
                zIndex: 1000,
            }}
            onClick={onClick}
            aria-label={to}
        >
            <FontAwesomeIcon icon={faArrowRight} color="#000000" size="sm" />
        </button>
    );
}

export default function SliderComponent({ productList, type }) {
    const settings = {
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        speed: 500,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {productList[type].map(product => (
                <Product product={product} key={product.id} />
            ))}
        </Slider>
    );
}

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Product from '~/components/Product';

function SampleNextArrow({ className, style, onClick }) {
    return (
        <button
            className={`${className} lg:right-5 button button--text button--icon cursor-pointer`}
            style={{
                ...style,
            }}
            type="button"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faArrowRight} color="#000000" size="sm" />
        </button>
    );
}

SampleNextArrow.defaultProps = {
    className: null,
    style: null,
    onClick: null,
};

SampleNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape(),
    onClick: PropTypes.func,
};

function SamplePrevArrow({ className, style, onClick }) {
    return (
        <button
            type="button"
            className={`${className} right-5 lg:right-0 button button--text button--icon cursor-pointer`}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faArrowRight} color="#000000" size="sm" />
        </button>
    );
}

SamplePrevArrow.defaultProps = {
    className: null,
    style: null,
    onClick: null,
};

SamplePrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape(),
    onClick: PropTypes.func,
};

export default function SliderComponent({ productList, type }) {
    const settings = {
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        speed: 500,
        infinite: true,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="next" />,
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

SliderComponent.propTypes = {
    productList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
};

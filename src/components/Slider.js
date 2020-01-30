import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default class SliderGlide extends Component {
    constructor(props) {
        super(props);
        this.state = { id: null };
        this.arrowRef = createRef();
    }

    componentDidMount() {
        // Generated random id
        this.setState(
            { id: `glide-${Math.ceil(Math.random() * 100)}` },
            this.initializeGlider
        );
    }

    componentDidUpdate(prevProps) {
        const { options } = this.props;
        if (options.startAt !== prevProps.options.startAt) {
            this.slider.go(`=${options.startAt}`);
        }
    }

    initializeGlider() {
        const { id } = this.state;
        const { options } = this.props;

        this.slider = new Glide(`#${id}`, options);
        this.slider.mount();
    }

    render() {
        const { id } = this.state;
        const {
            children,
            customizeTitle,
            hasBullets,
            negativeArrows,
        } = this.props;

        return (
            <>
                <div
                    id={id}
                    className="overflow-x-hidden relative w-full"
                    style={{
                        userSelect: 'none',
                        maxWidth: '100vw',
                    }}
                >
                    {!negativeArrows && children.length > 1 && (
                        <div className="glide__arrows" data-glide-el="controls">
                            <button
                                className="glide__arrow glide__arrow--left rounded-full md:ml-4 w-10 h-10 flex justify-center items-center p-0 border"
                                data-glide-dir="<"
                                title={customizeTitle || 'Veja mais ofertas!'}
                                ref={this.arrowRef}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    style={{ width: '12px' }}
                                />
                                <span className="hidden">Anterior</span>
                            </button>
                            <button
                                className="glide__arrow glide__arrow--right arrow-position arrow-position--left  rounded-full md:mr-4 w-10 h-10 flex justify-center items-center p-0 border"
                                data-glide-dir=">"
                                title={customizeTitle || 'Veja mais ofertas!'}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    style={{ width: '12px' }}
                                />
                                <span className="hidden">Próximo</span>
                            </button>
                        </div>
                    )}
                    <div
                        className="glide__track w-full relative"
                        data-glide-el="track"
                    >
                        <div className="glide__slides">
                            {children.map((slide, index) => {
                                return React.cloneElement(slide, {
                                    key: index,
                                    className: `glide__slide ${slide.props.className}`,
                                });
                            })}
                        </div>
                    </div>
                    {hasBullets && (
                        <div
                            className="bottom_bullets flex justify-center mt-4"
                            id="bullets"
                            data-glide-el="controls[nav]"
                        >
                            {children.map((slide, index) => {
                                return (
                                    <button
                                        key={index}
                                        className="bucket h-4 w-4 rounded-full border mx-1 border-red-500 "
                                        data-glide-dir={`=${index}`}
                                        title={index}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </>
        );
    }
}

SliderGlide.defaultProps = {
    options: {},
    customizeTitle: null,
    hasBullets: false,
};

SliderGlide.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    options: PropTypes.shape(),
    customizeTitle: PropTypes.string,
    hasBullets: PropTypes.bool,
};

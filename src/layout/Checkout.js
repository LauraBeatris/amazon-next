import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Progress from '~/components/Progress';

export default function CheckoutLayout({ step }) {
    const progressWidth = useMemo(() => step.order * 300, [step.order]);
    return (
        <div className="flex flex-col w-full">
            <Progress width={progressWidth} order={step.order} />
            <h1 className="text-gray-800 mt-2 text-2xl font-bold">
                {step.title}
            </h1>
        </div>
    );
}

CheckoutLayout.propTypes = {
    step: PropTypes.shape({
        title: PropTypes.string,
        order: PropTypes.number,
    }).isRequired,
};

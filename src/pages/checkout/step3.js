import React from 'react';

import CheckoutLayout from '~/layout/Checkout';
import ApplicationLayout from '~/layout';

export default function CheckoutThirdStep() {
    return (
        <ApplicationLayout>
            <CheckoutLayout step={{ order: 3, title: 'Payment' }} />
        </ApplicationLayout>
    );
}

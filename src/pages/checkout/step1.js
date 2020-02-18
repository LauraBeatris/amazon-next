import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';
import { useRouter } from 'next/router';

import costumerSchema from '~/validators/costumer';

import CheckoutLayout from '~/layout/Checkout';
import ApplicationLayout from '~/layout';
import FormGroup from '~/components/FormGroup';
import Button from '~/components/Button';
import Progress from '~/components/Progress';
import { submitStepRequest } from '~/store/modules/checkout/actions';

export default function CheckoutFirstStep() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { products } = useSelector(state => state.cart);
    const initialData = useSelector(state => state.checkout.costumer);
    const [formSubmit, setSubmitForm] = useState(false);

    const stepInfo = { order: 1, title: 'Costumer Info' };

    function handleSubmit(data) {
        setSubmitForm(true);
        return dispatch(submitStepRequest({ costumer: data }, 'step2'));
    }

    useEffect(() => {
        if (products.length < 1) {
            alert(
                'Your cart is empty. You have to add a product to proceed with the checkout steps'
            );
            router.push({ pathname: '/' });
        }
    }, [products.length, router]);

    return (
        <ApplicationLayout className="lg:pr-0 lg:py-0">
            <CheckoutLayout step={stepInfo}>
                <Progress
                    width={`${stepInfo.order * 25}%`}
                    order={stepInfo.order}
                />

                <Form
                    onSubmit={handleSubmit}
                    initialData={initialData}
                    schema={costumerSchema}
                    className="flex flex-col justify-center"
                >
                    <div className="flex flex-col bg-white py-2 pr-2 mt-5 relative">
                        <FormGroup
                            name="fullname"
                            label="Full Name"
                            submitted={formSubmit}
                        />
                        <FormGroup
                            name="phone"
                            label="Phone"
                            submitted={formSubmit}
                        />
                        <FormGroup
                            name="email"
                            label="Email"
                            submitted={formSubmit}
                        />

                        <Button
                            type="submit"
                            className="lg:w-1/2 w-full px-2 py-3 mt-5"
                        >
                            Next
                        </Button>
                    </div>
                </Form>
            </CheckoutLayout>
        </ApplicationLayout>
    );
}

import React from 'react';
import { Form, Scope } from '@rocketseat/unform';

import costumerSchema from '~/validators/costumer';

import CheckoutLayout from '~/layout/Checkout';
import ApplicationLayout from '~/layout';
import FormGroup from '~/components/FormGroup';
import Button from '~/components/Button';
import Progress from '~/components/Progress';

export default function CheckoutSecondStep() {
    function handleSubmit(data, { resetForm }) {
        console.log(data);
        resetForm();
    }

    const stepInfo = { order: 3, title: 'Payment' };

    return (
        <ApplicationLayout className="lg:pr-0 lg:py-0">
            <CheckoutLayout step={stepInfo}>
                <Progress
                    width={`${stepInfo.order * 25}%`}
                    order={stepInfo.order}
                />

                {/* TODO -> initialValues from Redux Store */}
                <Form
                    onSubmit={handleSubmit}
                    schema={costumerSchema}
                    className="flex flex-col justify-center"
                >
                    <div className="flex flex-col bg-white py-2 pr-2 mt-5 relative">
                        <Scope path="address">
                            <FormGroup name="card" label="Card" />
                            <FormGroup name="method" label="Method" />
                            <FormGroup name="number" label="District" />
                        </Scope>

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

import React from 'react';

import ApplicationLayout from '~/layout';

export default function Success() {
    return (
        <ApplicationLayout>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-2xl text-gray-800 font-bold">
                    Order Successfuly Done!
                </h1>
                <p className="font-light text-gray-600 mt-2 mb-5">
                    Now you'll receive an email with the informations about it
                </p>

                <img
                    src="/static/success.png"
                    alt="Success"
                    title="Successfull order"
                    aria-label="Success"
                />
            </div>
        </ApplicationLayout>
    );
}

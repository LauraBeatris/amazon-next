import React from 'react';

import CheckoutLayout from '~/layout/Checkout';
import ApplicationLayout from '~/layout';

export default function CheckoutFirstStep() {
    return (
        <ApplicationLayout>
            <CheckoutLayout step={{ order: 1, title: 'Costumer Info' }} />

            <div>
                <form>
                    <div className="flex flex-col bg-white p-2 relative">
                        <label className="text-4xs text-gray-700">Name</label>
                        <input
                            className="text-gray-800 rounded relative"
                            name="name"
                            placeholder="Digite seu nome"
                        />
                    </div>
                </form>
            </div>
        </ApplicationLayout>
    );
}

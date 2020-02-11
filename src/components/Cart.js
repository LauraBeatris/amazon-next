import React from 'react';

export default function Cart() {
    return (
        <div className="h-full bg-gray-200 flex flex-col justify-between">
            <div className="py-8 px-5">
                <h1 className="text-2xl font-bold text-gray-500">
                    You're Buying
                </h1>
            </div>
            <div className="flex flex-col bg-gray-300 p-5">
                <ul className="w-full">
                    <li className="flex flex-row justify-between text-gray-600 mb-2">
                        Products Count <span className="text-gray-800">8</span>
                    </li>
                    <li className="flex flex-row justify-between text-gray-600 mb-2">
                        Products Cost{' '}
                        <span className="text-gray-800">$8,110</span>
                    </li>
                    <li className="flex flex-row justify-between text-gray-600 mb-4">
                        Shipping Cost <span className="text-gray-800">$50</span>
                    </li>
                    <li className="flex flex-row justify-between text-xl text-gray-600 mb-4">
                        Total Cost{' '}
                        <strong className="text-gray-800">$8,160</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}

import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '~/layout';
import Cart from '~/components/Cart';
import Button from '~/components/Button';

export default function CartPage() {
    const router = useRouter();

    function handleSubmit() {
        return router.push({ pathname: '/checkout/step1' });
    }

    return (
        <Layout style={{ padding: 0 }}>
            <div className="w-full flex flex-col h-full lg:flex-row">
                <div className="lg:w-2/3 w-full flex flex-col justify-between pt-8 pb-10 px-12">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-3xl text-gray-500 mb-10">
                            Make Order
                        </h1>

                        <div className="flex flex-col lg:flex-row">
                            <img
                                src="/static/map.png"
                                alt="Map"
                                aria-label="Map"
                                className="rounded lg:mr-8 mr-0"
                                title="That's just a map for test (At least, for now)"
                            />
                            <ul className="flex flex-col">
                                <li>
                                    <span className="block text-gray-500">
                                        Shipping Date
                                    </span>
                                    <span className="text-gray-800">
                                        Tomorrow, 12AM - GPM
                                    </span>
                                </li>
                                <li className="mt-5 flex flex-row items-end">
                                    <div>
                                        <span className="block text-gray-500">
                                            Shipping Address
                                        </span>
                                        <span className="text-gray-800">
                                            5643, Higland, Geordia Dr
                                        </span>
                                    </div>
                                    <button
                                        className="transition-colors duration-300 hover:text-blue-600 text-blue-500 outline-none border-none ml-4 font-bold border-none"
                                        type="button"
                                    >
                                        Edit
                                    </button>{' '}
                                </li>
                                <li className="mt-5">
                                    <span className="block text-gray-500">
                                        Delivery To
                                    </span>
                                    <div className="flex flex-row items-center mt-1">
                                        <img
                                            src="/static/user.jpg"
                                            alt="User"
                                            aria-label="User"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <strong className="ml-2 text-gray-800">
                                            {' '}
                                            Laura Beatris{' '}
                                        </strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-8 w-full flex flex-col lg:flex-row justify-between pr-5">
                        <div className="flex flex-col justify-start">
                            <span className="text-gray-600">Credit Card</span>
                            <strong className="text-gray-800">
                                {' '}
                                * * * * 9870
                            </strong>
                        </div>
                        <button
                            className="transition-colors duration-300 hover:bg-gray-300 hover:text-blue-600 bg-gray-200 text-blue-500 outline-none border-none ml-4 p-5 font-bold border-none"
                            type="button"
                        >
                            Edit
                        </button>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-between pr-5">
                        <Link href="/">
                            <div className="transition-colors cursor-pointer duration-300 flex flex-row items-center text-gray-400 hover:text-gray-500">
                                <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    size="lg"
                                    className="items-center mr-2"
                                />
                                <span className="text-xl">
                                    Back to products list
                                </span>
                            </div>
                        </Link>

                        <Button
                            className="py-5 px-8"
                            handleClick={handleSubmit}
                            title="Goto checkout"
                        >
                            Goto checkout
                        </Button>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:flex flex-col hidden h-full">
                    <Cart />
                </div>
            </div>
        </Layout>
    );
}

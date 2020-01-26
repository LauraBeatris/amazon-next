import React from 'react';
import { useRouter } from 'next/router';

export default function User() {
    const router = useRouter();
    const { user } = router.query;
    return <div>user {user && user}</div>;
}

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navigator from '@/components/navigator';
function ProfileDynamicPage() {
    const router = useRouter();
    return (
        <>
        <Navigator/>
        </>
    )
}

export default ProfileDynamicPage;

'use server';
import { cookies } from 'next/headers';
import { encrypt } from './encryption';

export async function createCookie(membership_id:string)
{
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 1 week

    const session = encrypt(JSON.stringify({ membership_id, expires }));
    cookies().set('session', session, { expires, httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/' });
}
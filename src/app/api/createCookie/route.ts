import { createCookie } from '@/app/functions/createCookie';

export async function POST(req:Request) {
    try{
        const { membership_id } = await req.json();
        await createCookie(membership_id)
        return new Response(JSON.stringify({ message: 'Cookie set successfully' }), { status: 200 });
    }
   catch (err) {
    return new Response(JSON.stringify({ message: err}), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
    });
}
}

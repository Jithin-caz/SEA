'use server';
import { getEmailFromCookie } from '@/app/functions/getEmailFromCookie';


export async function GET() {
    // Retrieve the session cookie
    try{
        const membership_id=await getEmailFromCookie()
        return new Response(JSON.stringify({ membership_id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  
    catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error(String(error));
        }
      }
    // Return the decoded session data
   
}

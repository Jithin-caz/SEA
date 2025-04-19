import { createCookie } from "@/app/functions/createCookie";
//@ts-ignore
import clientPromise from "@/lib/mongodb";

export async function POST(req: any, res: any) {
  //@ts-ignore
  const client = await clientPromise;
  const db =await client.db("mainDB");
  const { membership_id, password } = await req.json();
  if(!membership_id || !password)
  {
    return new Response(
        JSON.stringify({
          message: `membership_id or password not given. provided email is ${membership_id} and password is ${password}`,
        }),
        {
          status: 300,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  }
  console.log(`member is ${membership_id} password is ${password}`)
  const member =await db.collection("members").findOne({membership_id:membership_id,password:password});
  console.log(member);
  if (member) {
    createCookie(membership_id)
    return new Response(
      JSON.stringify({
        message: "login success",
        member:member
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "member does'nt exist",
      }),
      {
        status: 300,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

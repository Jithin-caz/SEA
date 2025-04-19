//@ts-ignore
import clientPromise from "@/lib/mongodb";

export async function POST(req: any, res: any) {
  
  try{
    //@ts-ignore
  const client = await clientPromise;
  const db =await client.db("mainDB");
  const { membership_id, password,oldPassword } = await req.json();
  if(!membership_id || !password || !oldPassword)
    {
      return new Response(
          JSON.stringify({
            message: `membership_id or password or old password not given not given. provided email is ${membership_id}, password is ${password} and old password is ${oldPassword}`,
          }),
          {
            status: 300,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    }
  if(oldPassword==password)
  {
    return new Response(
        JSON.stringify({
          message: `old password and new password cant be same`,
        }),
        {
          status: 350,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  }
  
  console.log(`member is ${membership_id} password is ${password} old password is ${oldPassword}`)
  const response =await db.collection("members").updateOne({ membership_id: membership_id,password:oldPassword},
    {$set:{password:password}}
  );
  console.log(response);
    return new Response(
      JSON.stringify({
        message: "password changed succesfully",
        member:response
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    ); 
}
catch (err) {
    return new Response(
        JSON.stringify({
          message: err,
        }),
        {
          status: 469,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
}
}

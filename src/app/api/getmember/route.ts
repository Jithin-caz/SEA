//@ts-ignore
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const membership_id = searchParams.get('membership_id');
    
    //@ts-ignore
    const client = await clientPromise;
    const db = await client.db("mainDB");
    
    let result;
    if (membership_id) {
      // If membership_id is provided, find specific member
      result = await db.collection("members").findOne({ membership_id: membership_id });
      
      if (!result) {
        return new Response(
          JSON.stringify({
            message: "Member not found",
          }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    } else {
      // If no membership_id, get all members
      result = await db.collection("members").find({}).toArray();
    }

    return new Response(
      JSON.stringify({
        message: "Success",
        data: result
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

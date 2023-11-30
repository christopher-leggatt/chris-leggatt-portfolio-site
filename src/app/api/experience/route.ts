import connectDB from "@/lib/connect-db";
import { getExperience } from "@/lib/experience-db";
import { NextResponse, NextRequest } from "next/server";
import { createErrorResponse } from "@/lib/utils";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { experience, error } = await getExperience();

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      experience,
    };

    return NextResponse.json(json_response);

    // res.status(200).json({ experience });
  } catch (error: any) {    
    return createErrorResponse(error.message, 500);
  }
}

// export async function GET(NextRequest) {
//   try {
//     const experience = await Experience.find();

// return NextResponse.json({ experience }, { status: 200 });
//   } catch (error) {
// return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }

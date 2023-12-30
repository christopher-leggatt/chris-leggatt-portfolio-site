import connectDB from "@/lib/connect-db";
import { getToolbox } from "@/lib/toolbox-db";
import { NextResponse, NextRequest } from "next/server";
import { createErrorResponse } from "@/lib/utils";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { toolbox, error } = await getToolbox();

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      toolbox,
    };
    // Creates a new NextResponse with the JSON data and set the Cache-Control header to 0 seconds,
    // so that the response is never cached.
    return new NextResponse(NextResponse.json(json_response).body, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=0",
      },
    });
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
}

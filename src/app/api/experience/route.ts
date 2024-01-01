import connectDB from "@/lib/connect-db";
import { getExperience } from "@/lib/experience-db";
import { NextResponse, NextRequest } from "next/server";
import { createErrorResponse } from "@/lib/utils";

export const dynamic = 'force-dynamic';

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
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
}

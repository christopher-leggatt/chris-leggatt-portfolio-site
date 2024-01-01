import connectDB from "@/lib/connect-db";
import { getChangelog } from "@/lib/changelog-db";
import { NextResponse, NextRequest } from "next/server";
import { createErrorResponse } from "@/lib/utils";

export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { changelog, error } = await getChangelog();

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      changelog,
    };

    return NextResponse.json(json_response);
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
}

import connectDB from "@/lib/connect-db";
import { getToolbox } from "@/lib/toolbox-db";
import { NextResponse, NextRequest } from "next/server";
import { createErrorResponse } from "@/lib/utils";

export const dynamic = "force-dynamic";

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

    return NextResponse.json(json_response);
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
}

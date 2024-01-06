import { NextRequest, NextResponse } from "next/server";
import mql from "@microlink/mql";
import { createErrorResponse } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { status, data } = await mql(
      req.nextUrl.searchParams.get("url") as string,
      {
        screenshot: true,
        // @ts-ignore
        overlay: {
          background:
            "linear-gradient(225deg, #F472B6 0%, #7A96FC 50%, #26F0C0 100%)",
          browser: "dark",
        },
      }
    );

    let json_response = {
      status: "success",
      image: data?.screenshot?.url,
    };

    return NextResponse.json(json_response);
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
}

import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "thanarat",
    studentId: "640612090",
  });
};

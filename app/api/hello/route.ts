"use client";

import type { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
};

export async function GET(request: NextRequest): Promise<Response> {
  return Response.json({ name: "John Doe" });
}

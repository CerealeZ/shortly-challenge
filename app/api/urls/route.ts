import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search")
  const url = new URL("https://api.shrtco.de/v2/shorten")
  if (!search) {
    return NextResponse.json({ url: null }, { status: 400 })
  }

  url.searchParams.append("url", search)
  try {
    const { result, ok } = await (await fetch(url.href)).json()
    return NextResponse.json(
      {
        url: result?.full_short_link ?? null,
        original: result?.original_link ?? null,
      },
      { status: ok ? 200 : 400 }
    )
  } catch {
    return NextResponse.json({ url: null }, { status: 500 })
  }
}

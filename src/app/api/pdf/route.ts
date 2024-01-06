import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = req.url
  const search = new URL(url).search
  const urlParams = new URLSearchParams(search)
  const downloadFileUrl = urlParams.get('download')

  try {
    const fileResponse = await fetch(downloadFileUrl!)

    if (!fileResponse.ok) {
      throw new Error(`Failed to fetch the PDF. Status: ${fileResponse.status}`)
    }

    const pdfBuffer = await fileResponse.arrayBuffer()
    const headers = new Headers(req.headers)
    headers.set('Content-Type', 'application/pdf')
    const response = new NextResponse(Buffer.from(pdfBuffer), {
      headers,
      status: 200
    })

    return response
  } catch (error) {
    console.error('Error fetching the PDF:', error)
    NextResponse.error()
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'World';

    const response = {
      success: true,
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store', // disable caching for dynamic responses
      },
    });
  } catch (error) {
    console.error('GET /api error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

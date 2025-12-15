import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const envPassword = process.env.ADMIN_PASSWORD;
    console.log('[Auth] Password length received:', password?.length);
    console.log('[Auth] Env password exists:', !!envPassword);
    console.log('[Auth] Env password length:', envPassword?.length);
    console.log('[Auth] Match:', password === envPassword);

    // Check if password matches
    if (password === envPassword) {
      // Create response with auth cookie
      const response = NextResponse.json({ success: true });

      // Set secure HTTP-only cookie
      response.cookies.set('admin-auth', password, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

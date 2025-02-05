import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  return NextResponse.redirect('https://bookonline24.ru/hosteltihiy');
}

// Этот middleware будет работать для всех страниц
export const config = {
  matcher: '/:path*',
};

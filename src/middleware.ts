import createMiddleware from 'next-intl/middleware';
import {NextFetchEvent, NextMiddleware, NextRequest} from 'next/server';

export default withExtraMiddleware(
  createMiddleware({
    locales: ['en', 'de'],
    defaultLocale: 'en'
  })
);

function withExtraMiddleware(next: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // Step 1: Potentially change the incoming request
    request.headers.set('x-test', 'test');

    // Step 2: Call the nested next-intl middleware
    const response = next(request, event);

    return response;
  };
}
 
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
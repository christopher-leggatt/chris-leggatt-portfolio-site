import { NextRequest, NextResponse } from "next/server";
import mql from "@microlink/mql";
import { createErrorResponse } from "@/lib/utils";

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





still no difference. im going to give you the workflow log, from install dependencies and build, to ssh and deploy:

added 519 packages, and audited 520 packages in 15s

150 packages are looking for funding run npm fund for details

found 0 vulnerabilities

chris-leggatt-portfolio-site@0.1.0 build next build

⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache 
▲ Next.js 14.0.4

Environments: .env
Creating an optimized production build ... ✓ Compiled successfully Linting and checking validity of types ... Collecting page data ... Generating static pages (0/11) ...

Generating static pages (2/11)

Generating static pages (5/11) Fetching toolbox data... Fetching toolbox data... ✅ New connection established ✅ New connection established ✅ New connection established Toolbox: { _id: new ObjectId('656b8a8c0475c272753ecd13'), site: [ { url: 'https://nextjs.org/', title: 'Next.js', types: [Array], description: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.' },

... the proper data

] Rendering Toolbox component...

Generating static pages (8/11) 🚀 Using cached connection 🚀 Using cached connection

1m 29s Run appleboy/ssh-action@master

...

725e56:183f385243fc41a68385da6727695b1b ======CMD====== cd ~/repos/chris-leggatt-portfolio-site/ git pull origin main npm ci npm run build pm2 restart all ======END====== err: From github.com:christopher-leggatt/chris-leggatt-portfolio-site err: * branch main -> FETCH_HEAD err: c4fea1a..76ed4b7 main -> origin/main out: Updating c4fea1a..76ed4b7 out: Fast-forward out: src/app/toolbox/page.tsx | 131 +++++++++++++++++++++++------------------------ out: 1 file changed, 63 insertions(+), 68 deletions(-) 

▲ Next.js 14.0.4 out: - Environments: .env.production out: Creating an optimized production build ... out: ✓ Compiled successfully out: Linting and checking validity of types ... out: Collecting page data ... out: Generating static pages (0/11) ... out: Generating static pages (2/11) out: Generating static pages (5/11) out: ✅ New connection established out: 🚀 Using cached connection out: 🚀 Using cached connection out: 🚀 Using cached connection out: 🚀 Using cached connection out: Generating static pages (8/11) out: Fetching toolbox data... out: 🚀 Using cached connection out: Fetching toolbox data... out: 🚀 Using cached connection out: Toolbox: { out: _id: new ObjectId('656ba1fe0475c272753ecd17'), out: completed: [ out: { out: title: 'Portfolio Site is Live!', out: description: "I'm excited to unveil my portfolio site for the first time! The site features a clean, modern design, built with...

the wrong data

out: } out: Toolbox Software: undefined out: Rendering Toolbox component... out: ✓ Generating static pages (11/11) out: Finalizing page optimization ... out: Collecting build traces ... out: Route (app) Size First Load JS out: ┌ ○ / 4.68 kB 89.3 kB out: ├ ○ /_not-found 875 B 82.8 kB out: ├ ○ /about 2.59 kB 100 kB out: ├ λ /api/Changelog 0 B 0 B out: ├ λ /api/experience 0 B 0 B out: ├ λ /api/link-preview 0 B 0 B out: ├ λ /api/meetup 0 B 0 B out: ├ λ /api/toolbox 0 B 0 B out: ├ ○ /changelog 909 B 149 kB out: ├ ○ /meetup 137 B 82.1 kB out: ├ ○ /projects 1.74 kB 99.3 kB out: └ ○ /toolbox 1.01 kB 98.6 kB out: + First
Load JS shared by all 81.9 kB out: ├ chunks/938-b278b89c3fdddf61.js 26.7 kB out: ├ chunks/fd9d1056-5ff1e0d59d9839e4.js 53.3 kB out: ├ chunks/main-app-b91c5913dfc6e9be.js 220 B out: └ chunks/webpack-c7f0ce07b80a6977.js 1.73 kB out: ○ (Static) prerendered as static content out: λ (Dynamic) server-rendered on demand using Node.js out: Use --update-env to update environment variables out: [PM2] Applying action restartProcessId on app [all](ids: [ 0 ]) out: [PM2] portfolio ✓ out:

i need you to think on this carefully. consult nextjs documentation online, as well as searching online to see if anyone else has had similar problems. i need to know why i get the proper data during one part of the workflow, then the wrong data during the other part, and just generally what the solution to this problem is.
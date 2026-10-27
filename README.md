# GroupFit on Vercel

This is the Next.js deployment of GroupFit, preserving the responsive UI and existing application backend.

- Frontend and API gateway: Vercel / Next.js
- Event database, scoped guest sessions, invitations and private generated media: existing Cloudflare-backed GroupFit Site
- Backend authorization: server-only `GROUPFIT_BACKEND_TOKEN`, configured as a sensitive Vercel environment variable
- Provider: YouCam, configured on the existing backend when ready

Use `npm install`, `npm run dev`, and `npm run build`. A local `.env.local` may contain the server-only backend token; it is ignored. Keep all deployments protected with Vercel Authentication to preserve the original private audience. Each member still needs an event invitation and a scoped guest session. The gateway only forwards the three explicit GroupFit API routes and does not expose the service credential to the browser.

Existing events are retained in the backend. Browser guest cookies from the old hostname are not transferred to the Vercel hostname: use your current invitation to join from the new URL. The original app stays available at its existing URL.

Vercel Functions impose request-body size limits. For large YouCam photos, image compression or a direct-upload flow may be needed before generation is enabled. Live try-on remains unconfigured until the user supplies a provider key on the backend.

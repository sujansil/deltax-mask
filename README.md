# DeltaX — three-stage maintenance mask (LOCAL ONLY)

This is a standalone static HTML/CSS/JS website. **Not deployed; no Azure/Nginx/Docker/database/backend changes have been made.**

## Local preview

```bash
cd deltax-mask-v3
python3 -m http.server 8080
```

Visit:

- `http://localhost:8080/` — stage 1, exhausted developer, rotating jokes, **small glowing Enter DeltaX** near bottom.
- `http://localhost:8080/caught/` — stage 2, humorous debug crime scene, rotating visitor jokes, **Flee the crime scene**.
- `http://localhost:8080/register/` — stage 3, tired developer's cute registration plea and Synergy invitation.

The stage-3 page is a **registration call-to-action**, not a working registration form or external registration link. Add the real authorized registration URL after it is provided. Avoid promising an actual URL until confirmed.

All pages use local WebP artwork; no third-party scripts, font requests, or analytics. `script.js` contains the editable joke pools. `styles.css` retains the original stage-1 styling with a short addendum.

## Critical production safety requirements (integration NOT implemented)

**A static page or redirect does not secure any round.** Before enabling in production, inspect the actual Azure Nginx `nginx -T` output with header secrets redacted, SSL server blocks, frontend/API/media/websocket paths and precedence, and alternate hostnames. Build `sudo deltax-site hide|show|status` against that exact config. Nginx should:

- Show stage 1 for the public homepage while hidden; only intentional `/caught/` and `/register/` mask pages remain accessible.
- Serve stage 2 on *any direct visitor attempt* to R1/R2/R3 frontend paths, including admin/asset routes and guessed links.
- Block all live round APIs, auth, WebSockets, uploads, media, admin endpoints, and other sensitive entry points at the server (503/403); **never proxy ordinary requests to the real services when hidden**.
- Preserve the existing private `X-R2-Rehearsal` route to the distinct test backend only for correctly authenticated rehearsal traffic. A header name alone is not authentication; preserve existing secret-value checks and consider IP restrictions. Reject guesses and invalid values.
- Leave live and rehearsal backend containers, scoring logic, PostgreSQL, Redis, and Docker untouched and running.
- Implement an atomic reversible Nginx include/symlink switch: `nginx -t`, rollback on validation failure, reload only on success, and truthful `status`. Verify both states and direct-link/API bypass tests.

This ZIP **does not include a generic live-ready Nginx toggle**. Do not deploy it without first inspecting your actual Nginx site files.

Stage 3: the bold **Synergy** in the footnote links to https://synergy.iiitb.ac.in/ (new tab).


Update: the "Another excuse" and "Another accusation" buttons were removed. Jokes still rotate automatically on every full page refresh / revisit.

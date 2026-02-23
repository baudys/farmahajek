# Vercel Firewall Rules for Bot/Scan Mitigation

This runbook documents the Vercel-side controls required by the edge-request reduction plan.

## Scope

- Block invalid API scans: `/api/*`
- Block invalid numeric blog paths: `/blog/{number}`
- Keep valid content routes working, including `/blog/{slug}`
- Keep allowlisted numeric slug routes working (currently `/blog/2024`)

## Rules

1. Add a Firewall rule:
- Condition: `Request path starts with /api/`
- Action: `Block`

2. Add a Firewall rule:
- Condition: `Request path matches regex ^/blog/(?!2024/?$)[0-9]+/?$`
- Action: `Block`

3. Add redirect rule (if not already active from app config):
- Source: `/index`
- Destination: `/`
- Type: permanent redirect

## Monitoring

After rules are enabled, check these metrics for 24-48 hours:

1. Request count by path pattern:
- `/api/*`
- `/blog/[0-9]+`

2. Top bot names and user agents by blocked requests.

3. 4xx rate trend:
- Should increase for blocked scan routes.
- Should stay stable for valid site routes.

4. Valid content verification:
- `/blog/voda-v-zime` and other slug pages return 200.

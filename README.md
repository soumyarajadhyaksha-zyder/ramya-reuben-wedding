# Goa Beach Wedding

A tropical, cinematic wedding invitation built from the supplied project plan.

## Run
```bash
npm install
npm run dev
```

Routes:
- `/` landing page
- `/invite/the-wedding` invitation
- `/rsvp/demo` six-step RSVP prototype
- `/admin` dashboard prototype

## Backend
The UI is ready to connect to Supabase. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`, then wire the tables described in the project plan: guests, rsvp_responses, events, guest_events, rsvp_event_responses, messages, wedding_settings.

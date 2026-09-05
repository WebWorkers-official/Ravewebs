// Central place for externally-configurable links and endpoints.
// Set these in a local .env file (see .env.example). Anything left
// unset is handled gracefully in the UI instead of breaking.

export const config = {
  bookingUrl: import.meta.env.VITE_BOOKING_URL as string | undefined,
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL as string | undefined,
  email: 'info@ravewebs.in' as string | undefined,
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL as string | undefined,
  contactApiUrl: import.meta.env.VITE_CONTACT_API_URL as string | undefined,
}

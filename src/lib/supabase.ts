import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export interface Enquiry {
  type: 'quote' | 'inquiry'
  // quote
  service_type?: string
  budget?: string
  description?: string
  timeline?: string
  // inquiry
  name?: string
  email?: string
  message?: string
}

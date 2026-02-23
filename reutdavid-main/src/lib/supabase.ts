import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fjtoxmrosqzgjhesfrui.supabase.co'
const supabaseKey = 'sb_publishable_KHMadU4tUB03eyCG8kzEAA_pOdYVgw5'

export const supabase = createClient(supabaseUrl, supabaseKey)

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vhwfyzvbaaltberopzxr.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZod2Z5enZiYWFsdGJlcm9wenhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNTM5NTksImV4cCI6MjA0MzkyOTk1OX0
    .Be30eBiVEENnZ4N8np5czHYniqEZYEoq0R1Y_y06eWw'
const supabase = createClient(supabaseUrl, supabaseKey)

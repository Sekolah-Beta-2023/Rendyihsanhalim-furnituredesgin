// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hjdustasxoxkemutqaao.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZHVzdGFzeG94a2VtdXRxYWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxMzE4ODcsImV4cCI6MjAxMTcwNzg4N30.nT3AVB4bbRV-re1DaiqELelj7qh54UMdWXW5pFaaBGM';

export const supabase = createClient(supabaseUrl, supabaseKey);

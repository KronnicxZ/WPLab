import { createClient } from "@supabase/supabase-js"

// Estas variables de entorno ya están configuradas en tu proyecto Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Crear un cliente de Supabase para el lado del cliente
export const createClientComponentClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Crear un cliente de Supabase para el lado del servidor
export const createServerComponentClient = () => {
  return createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  })
}

// Tipos para la base de datos
export type UserProgress = {
  id: string
  user_id: string
  module_id: number
  lesson_id: number
  completed: boolean
  score: number
  created_at: string
  updated_at: string
}

export type UserProfile = {
  id: string
  user_id: string
  display_name: string
  avatar_url: string | null
  streak_days: number
  xp_points: number
  created_at: string
  updated_at: string
}

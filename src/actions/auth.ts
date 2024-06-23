'use server'

import { redirect } from 'next/navigation'

const REGISTER_URL = process.env.NEXT_PUBLIC_API_URL + '/api/register'

interface User {
  email: string
  password: string
  nombre: string
}

export async function register (data: User) {
  console.log(REGISTER_URL)
  const res = await fetch(REGISTER_URL, {
    method: 'POST',
    body: JSON.stringify({ ...data, apellido: '' }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    return {
        error: 'Error al registrar usuario'
    }
  }

  const json = await res.json()

  const mappedUser = {
    email: json.user.email ?? '',
    nombre: json.user.nombre ?? '',
    apellido: json.user.apellido ?? '',
    id: json.user._id ?? '',
    token: json.token ?? ''
  }
  console.log('User registered successfully', mappedUser)
  return mappedUser
}

const LOGIN_URL = process.env.NEXT_PUBLIC_API_URL + '/api/login'
export async function login (data: Pick<User, 'email' | 'password'>) {
  const res = await fetch(LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify({ ...data }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    return {
        error: 'Error al iniciar sesión'
    }
  }

  const json = await res.json()

  const mappedUser = {
    email: json.user.email ?? '',
    nombre: json.user.nombre ?? '',
    apellido: json.user.apellido ?? '',
    id: json.user._id ?? '',
    token: json.token ?? ''
  }
  console.log('User logged in successfully', mappedUser)
  return mappedUser
}
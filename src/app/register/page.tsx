"use client";
import { register } from '@/actions/auth';
import { Form } from '@/components/Form';
import { useUserContext } from '@/context/UserContext';
import { useLoading } from '@/hooks/useLoading';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegistrationPage() {
  const { isLoading, startLoading, finishLoading } = useLoading();  
  const { setUser} = useUserContext();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    const email = formValues.get('email') as string;
    const password = formValues.get('password') as string;
    const username = formValues.get('username') as string;

    setError(null);
    
    if (!email || !password || !username) {
      setError('Todos los campos son requeridos');
      return;
    }
    
    startLoading();
    console.log('Iniciando el proceso de registro con:', email, username, password);

    const newUser = {
      email,
      nombre: username,
      password,
    };
    

    try {
      // Crea us  uario en Firebase Authentication
      const user = await register(newUser);
      console.log('Usuario registrado con éxito', user);
      if ('error' in user) {
        setError(user.error)
        return;
      }
      
      setUser(user);
      router.push('/');
      // Redirige al usuario a la página de inicio de sesión

    } catch (error) {
     setError('Error al registrar usuario')
    } finally {
      finishLoading();
    }
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">¿Eres nuevo en Blog Yucateco? 🙀</h1>
        <Form
          title="Regístrate"
          onSubmit={handleSubmit}
          description="Bax onda ne. Regístrate pelana."
        >
          <div className="my-[10px] flex flex-col gap-4">
            <Form.Input
              label="Correo"
              name="email"
              placeholder="Ingresa tu correo..."
            />
            <Form.Input
              label="Nombre de usuario"
              name="username"
              placeholder="Ingresa tu nombre de usuario..."
            />
            <Form.Input
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña..."
            />
          </div>

          <Form.SubmitButton buttonText="Crear cuenta" isLoading={isLoading} />

          <Form.Footer
            description="¿Ya tienes cuenta?"
            textLink="Inicia Sesión"
            link="/" 
          />
        </Form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}

'use client';

import { login } from '@/actions/auth';
import { Form } from '@/components/Form';
import { useUserContext } from '@/context/UserContext';
import { useLoading } from '@/hooks/useLoading';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { finishLoading, isLoading, startLoading } = useLoading();
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      alert('Por favor, ingresa tu correo y contraseña');
      return;
    }

    startLoading();
    try {
      const user = await login({ email, password });

      if ('error' in user) {
        alert('Error al iniciar sesión');
        return;
      }

      setUser(user);
      router.push('/');
      
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión");
    }
    finishLoading();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="form-container">
        <h1 className="text-3xl font-bold text-center mb-6">Bienvenido a Blog Yucateco 😸</h1>
        <Form
          title="Inicia Sesión"
          onSubmit={handleSubmit}
          description=""
        >
          <div className="my-[10px] flex flex-col gap-4">
            <Form.Input
              label="Correo"
              name="email"
              placeholder="Ingresa tu correo..."
            />
            <Form.Input
              placeholder="Ingresa tu contraseña..."
              label="Contraseña"
              name="password"
              type="password"
            />
          </div>
          <Form.SubmitButton buttonText="Iniciar Sesión" isLoading={isLoading} />
          <Form.Footer
            description="¿Aún no tienes cuenta?"
            textLink="Regístrate"
            link="/register"
          />
        </Form>
      </div>
    </div>
  );
}


import { Form } from '@/components/Form';
import { useAuthFetch } from '@/hooks/useAuthFetch';
import { useLoading } from '@/hooks/useLoading';

export default function LoginPage() {
  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();

  const register = async (formData: any) => {
    startLoading();
    await authFetch({
      endpoint: 'register',
      redirectRoute: '/home',
      formData,
    });
    finishLoading();
  };

  return (
    <>
    <h1 className="text-3xl font-bold text-center mb-6">¿ Eres nuevo en Blog Yucateco? 🙀</h1>
    <Form
          title='Regístrate'
          onSubmit={register}
          description=''
        >
          <div className='my-[10px] flex flex-col gap-4'>
            <Form.Input
              label='Correo'
              name='email'
              placeholder='Ingresa tu correo...'
            />
            <Form.Input
              label='Nombre de usuario'
              name='username'
              placeholder='Ingresa tu nombre de usuario...'
            />
            <Form.Input
              placeholder='Ingresa tu contraseña...'
              label='Contraseña'
              name='password'
              type='password'
            />
            <Form.Input
              placeholder='Repite tu contraseña...'
              label='Confirmar contraseña'
              name='confirmPassword'
              type='password'
            />
          </div>
          <Form.SubmitButton buttonText='Crear cuenta' isLoading={isLoading} />
          <Form.Footer
            description='¿Ya tienes cuenta?'
            textLink='Inicia Sesión'
            link='/'
          />
        </Form>
    </>
  );
}

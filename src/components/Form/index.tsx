import { Footer, Input, SubmitButton } from './components';
import styles from './styles.module.scss';


interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  title: string;
  description?: string;
}


export function Form({ title, children, description,  ...props }: FormProps) {
  return (
      <form className={styles.form} {...props}>
        <div className={styles.descriptionContainer}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {children}
      </form>
  );
}

Form.Input = Input;
Form.Footer = Footer;
Form.SubmitButton = SubmitButton;

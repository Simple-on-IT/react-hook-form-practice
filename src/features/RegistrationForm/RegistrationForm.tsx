import { useForm } from "react-hook-form";
import { Title } from "../../shared/ui/Title/Title";
import styles from './RegistrationForm.module.scss';
import { Button } from "../../shared/ui/Button/Button";

interface PersonInfo {
  name: string;
  email: string;
  password: string;
}

export const RegistrationForm = () => {

  // useForm<PersonInfo>()

  return (
    <form
      // onSubmit={}
      className={styles.form}
      noValidate
      autoComplete="false"
    >

      <Title>Регистрация</Title>

      {/* Поле имени */}
      <fieldset className={styles.field}>
        <label htmlFor="name">Имя:</label>
        <input
          id="name"
          placeholder="Введите имя"
          className={styles.input}
        />
        {/* {errors.name &&
          <p
            className={styles.error}
            style={{ color: "red" }}
          >{errors.name.message}</p>
        } */}
      </fieldset>

      {/* Поле email */}
      <fieldset className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Введите email"
          className={styles.input}
        />
        {/* {errors.email && <p className={styles.error} style={{ color: "red" }}>{errors.email.message}</p>} */}
      </fieldset>

      {/* Поле пароля */}
      <fieldset className={styles.field}>
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          type="password"
          placeholder="Введите пароль"
          className={styles.input}
        />
        {/* {errors.password && <p className={styles.error} style={{ color: "red" }}>{errors.password.message}</p>} */}
      </fieldset>

      {/* Кнопка отправки */}
      <br />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
  );
}
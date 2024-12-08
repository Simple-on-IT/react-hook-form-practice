import styles from './MainPage.module.scss';
import MainImage from '../../../shared/images/image.png';
import { Image } from '../../../shared/ui/Image/Image';
import { RegistrationForm } from '@/features/RegistrationForm/RegistrationForm';

export const MainPage = () => {

  return (
    <div className={styles.pageContainer}>
      <Image className={styles.image} width={'200px'} src={MainImage} alt='Изображение страницы' />
      <RegistrationForm />
    </div>
  )
}
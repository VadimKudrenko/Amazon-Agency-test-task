import { Testimonial } from '../../../../types/Testimonial';
import { VITE_BASE_URL } from '../../../../utils/fetchClient';

import styles from './TestimonialCard.module.scss';

type Props = {
  testimonial: Testimonial;
};

export const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className={styles['testimonial-card']}>
      <div>
        <div className={styles['testimonial-card__company-logo-wrapper']}>
          <img
            className={styles['testimonial-card__company-logo']}
            src={`${VITE_BASE_URL}/${testimonial.companyLogoSrc}`}
          ></img>
        </div>
        <p className="main-text">{testimonial.text}</p>
      </div>
      <div className={styles['testimonial-card__person-wrapper']}>
        <div className="testimonial-card__person-photo-wrapper">
          <img
            className={styles['testimonial-card__person-photo']}
            src={`${VITE_BASE_URL}/${testimonial.personPhotoSrc}`}
          ></img>
        </div>
        <div className={styles['testimonial-card__person-info']}>
          <h3>{testimonial.personFullName}</h3>
          <p className="main-text main-text--black">
            {testimonial.personDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

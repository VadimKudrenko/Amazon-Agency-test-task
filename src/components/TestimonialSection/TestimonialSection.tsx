import { useEffect, useState } from 'react';

import { Testimonial } from '../../types/Testimonial';
import { getTestimonials } from '../../api/testimonials';

import { TestimonialsCarousel } from './components/TestimonialsCarousel';

export const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);

    getTestimonials()
      .then(setTestimonials)
      .catch(setErrorMessage)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <h1 className="main-text--centered">
            Voices of Success with Sales Fortuna
          </h1>
        </div>
        {isLoading && (
          <p className="main-text main-text--centered">Loading . . .</p>
        )}

        {errorMessage && (
          <p className="main-text main-text--black">{errorMessage}</p>
        )}

        {!isLoading && <TestimonialsCarousel testimonials={testimonials} />}
      </div>
    </section>
  );
};

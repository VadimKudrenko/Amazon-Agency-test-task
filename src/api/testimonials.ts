import { Testimonial } from '../types/Testimonial';
import { client } from '../utils/fetchClient';

export const getTestimonials = () => {
  return client.get<Testimonial[]>('/testimonials.json');
};

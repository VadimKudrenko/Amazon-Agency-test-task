/* eslint-disable import/no-extraneous-dependencies */
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';

import { Testimonial } from '../../../../types/Testimonial';
import { TestimonialCard } from '../TestimonialCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './TestimonialsCarousel.module.scss';

type Props = {
  testimonials: Testimonial[];
};

export const TestimonialsCarousel: React.FC<Props> = ({ testimonials }) => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      paginationRef.current &&
      swiperInstance.params.pagination &&
      typeof swiperInstance.params.pagination === 'object'
    ) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.params.pagination.clickable = true;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <div className={styles['testimonials-carousel-wrapper']}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={18}
        loop={true}
        pagination={false}
        navigation={{
          prevEl: '.testimonial-carousel__nav-prev-btn',
          nextEl: '.testimonial-carousel__nav-next-btn',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        onSwiper={swiper => setSwiperInstance(swiper)}
      >
        {testimonials.map(item => (
          <SwiperSlide
            key={item.id}
            className={styles['testimonials-carousel__slide']}
          >
            <TestimonialCard testimonial={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="testimonial-carousel__nav-prev-btn" />
      <button className="testimonial-carousel__nav-next-btn" />
      <div className="testimonial-carousel__pagination" ref={paginationRef} />
    </div>
  );
};

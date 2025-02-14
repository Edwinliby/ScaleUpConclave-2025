'use client';

import styles from './slider.module.css';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export default function LaptopSlider({ img }) {
    return (
        <Swiper
            spaceBetween={30}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className={styles.swiper}
        >
            {img.map((imageObj, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={imageObj.img}
                        alt={`highlight-${index}`}
                        className={styles.heroImage}
                        width={600}
                        height={600}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 18w'
                        loading='eager'
                        priority={index < 3}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
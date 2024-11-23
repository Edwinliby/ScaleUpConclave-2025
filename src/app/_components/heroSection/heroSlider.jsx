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
                delay: 3000,
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
                        width={1800}
                        height={1800}
                        loading="eager"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
'use client'

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Image from 'next/image';


export interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}

export interface GridGalleryProps {
  galleryID: string;
  images: Image[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ galleryID, images }) => {


  useEffect(() => {
    const lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    
    lightbox.init();

    return () => {
      lightbox.destroy();
      //lightbox = null;
    };
  }, [galleryID]);



  return (
    <div className="pswp-gallery grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          title='demo'
          className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <Image
            src={image.largeURL}
            alt="photo"
            width={image.width}
            height={image.height}
            className="object-cover w-full h-full"
          />
        </a>
      ))}
    </div>
  );
};

export default GridGallery;

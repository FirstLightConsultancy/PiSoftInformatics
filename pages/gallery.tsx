"use client"
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const tabs = [
  { id: 1, title: 'Tab 1', images: ['/images/img1.jpg', '/images/img2.jpg'] },
  { id: 2, title: 'Tab 2', images: ['/images/img3.jpg', '/images/img4.jpg'] },
  { id: 3, title: 'Tab 3', images: ['/images/img5.jpg', '/images/img6.jpg'] },
  { id: 4, title: 'Tab 4', images: ['/images/img7.jpg', '/images/img8.jpg'] },
  { id: 5, title: 'Tab 5', images: ['/images/img9.jpg', '/images/img10.jpg'] },
  { id: 6, title: 'Tab 6', images: ['/images/img11.jpg', '/images/img12.jpg'] },
  { id: 7, title: 'Tab 7', images: ['/images/img13.jpg', '/images/img14.jpg'] },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {tabs.find((tab) => tab.id === activeTab)?.images.map((src, index) => (
          <div key={index} className="w-full h-64 relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
            <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" className="transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

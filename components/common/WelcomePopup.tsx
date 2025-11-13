'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'welcome_popup_accepted';
const POLICY_LINK = '/docs/personal-data-policy.pdf'

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      const isAccepted = localStorage.getItem(STORAGE_KEY);
      if (!isAccepted) {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.body.style.overflow = isVisible ? 'hidden' : '';
  }, [isVisible, isMounted]);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm'>
      <div className='max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl'>
        <p className='text-lg font-semibold text-gray-900'>
          Я даю согласие на обработку персональных данных и подтверждаю, что ознакомился с положением
          об их обработке.
        </p>
        <a
          href={POLICY_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 inline-block text-sm font-semibold text-emerald-600 underline-offset-2 hover:underline'
        >
          Открыть положение
        </a>
        <button
          type='button'
          onClick={handleAccept}
          className='mt-6 w-full rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-500'
        >
          Принять
        </button>
      </div>
    </div>
  );
}

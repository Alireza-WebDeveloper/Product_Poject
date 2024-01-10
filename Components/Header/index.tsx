'use client';
import React from 'react';
import Link from 'next/link';
import ButtonLink from '../Ui/ButtonLink';
const Header = () => {
  return (
    <header className="fixed top-0 w-full  z-40 fadeComponent inset-x-0  backdrop-filter  dark:backdrop-brightness-50 backdrop-blur-[8px]">
      <div className="p-3 items-center flex lg:justify-around justify-between flex-wrap  bg-gray-100 dark:bg-gray-900">
        <span className="text-xl font-bold capitalize font-serif">
          web wizard
        </span>
        <section className="flex items-center gap-3">
          <ButtonLink href="/">home</ButtonLink>
          <ButtonLink href="/about">about</ButtonLink>
        </section>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Link from 'next/link';
interface ButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { className, children, href, ...restProps } = props;
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <button
        className={`
    capitalize text-black font-bold text-lg py-2 px-4 rounded
  active:translate-y-1
   transition-all duration-300 ease-in-out
   ${className}`}
        {...restProps}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;

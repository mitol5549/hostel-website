import Link from 'next/link';
import { FC } from 'react';

interface ContactLink {
  label: string;
  value: string;
}

interface ContactInfoProps {
  links: ContactLink[];
}

export const ContactInfo: FC<ContactInfoProps> = ({ links }) => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        {links.map((link, index) => (
          <Link href='/' key={`contact-link-${index}`} className='flex justify-between'>
            <p className='whitespace-nowrap medium-14'>{link.label}</p>
            <p>{link.value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

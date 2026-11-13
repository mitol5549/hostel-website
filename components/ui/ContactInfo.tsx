import { FC } from 'react';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  openInNewTab?: boolean;
}

interface ContactInfoProps {
  links: ContactLink[];
}

export const ContactInfo: FC<ContactInfoProps> = ({ links }) => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        {links.map((link, index) => (
          <a
            href={link.href}
            key={`contact-link-${index}`}
            className='flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4'
            target={link.openInNewTab ? '_blank' : undefined}
            rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
          >
            <p className='shrink-0 whitespace-nowrap medium-14'>{link.label}</p>
            <p className='min-w-0 break-words sm:text-right'>{link.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

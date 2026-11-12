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
            className='flex justify-between'
            target={link.openInNewTab ? '_blank' : undefined}
            rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
          >
            <p className='whitespace-nowrap medium-14'>{link.label}</p>
            <p>{link.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

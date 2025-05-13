import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: FC<SocialLinksProps> = ({ links }) => {
  return (
    <div>
      <h4 className='bold-18 mb-4'>Соцсети и мессенджеры</h4>
      <ul className='flex gap-4'>
        {links.map((link) => (
          <li key={link.name}>
            <Button
              isIconOnly
              as={Link}
              color='primary'
              href={link.url}
              target='_blank'
              variant='light'
              aria-label={link.name}
            >
              <Image src={link.icon} alt={link.name} width={48} height={48} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

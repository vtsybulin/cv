import { ComponentType, ReactElement } from 'react';
import { Button, Link } from '@nextui-org/react';
import { IconBaseProps } from 'react-icons';
import { FaLinkedinIn, FaSpotify, FaGithub } from 'react-icons/fa';

import ILink from '^/types/ILink';
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, SPOTIFY_PROFILE_URL } from '^/configs/common';

interface ISocialLink extends ILink {
  Icon: ComponentType<IconBaseProps>;
}

const links: ISocialLink[] = [
  {
    href: LINKEDIN_PROFILE_URL,
    label: 'Linkedin',
    Icon: FaLinkedinIn,
  },
  {
    href: GITHUB_PROFILE_URL,
    label: 'Github',
    Icon: FaGithub,
  },
  {
    href: SPOTIFY_PROFILE_URL,
    label: 'Spotify',
    Icon: FaSpotify,
  },
];

const SocialLinks = (): ReactElement => (
  <div className="flex flex-row gap-4">
    {links.map(({ href, label, Icon }: ISocialLink): ReactElement => (
      <Button
        key={label}
        as={Link}
        href={href}
        isIconOnly
        isExternal
        variant="light"
        aria-label={label}
      >
        <Icon className="size-6" />
      </Button>
    ))}
  </div>
);

export default SocialLinks;

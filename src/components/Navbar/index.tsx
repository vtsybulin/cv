'use client';

import React, { ReactElement } from 'react';
import {
  Navbar as NavbarBase,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle, NavbarMenu, ButtonProps, LinkProps,
} from '@nextui-org/react';
import { RxGithubLogo } from 'react-icons/rx';
import { UnionToIntersection } from 'type-fest';

import { makeAnchorHref } from '^/utils/routing';
import PageSection from '^/enums/PageSection';
import texts from '^/configs/texts';
import useToggle from '^/hooks/useToggle';
import ILink from '^/types/ILink';
import { GITHUB_PROFILE_URL } from '^/configs/common';

import ThemeDropdown from '../ThemeDropdown';

interface INavbarLink extends ILink, Omit<UnionToIntersection<ButtonProps & LinkProps>, 'href'> {}

const links: INavbarLink[] = [
  {
    label: texts.sections[PageSection.Experience].title,
    href: makeAnchorHref(PageSection.Experience),
  },
  {
    label: texts.sections[PageSection.Projects].title,
    href: makeAnchorHref(PageSection.Projects),
    variant: 'light',
  },
  {
    label: texts.sections[PageSection.ContactRequest].title,
    href: makeAnchorHref(PageSection.ContactRequest),
  },
  {
    label: texts.common.viewInGithub,
    href: GITHUB_PROFILE_URL,
    color: 'primary',
    variant: 'flat',
    startContent: <RxGithubLogo className="size-6" />,
    isExternal: true,
  },
];

const Navbar = (): ReactElement => {
  const [isMenuOpened, _unused, closeMenu, setIsMenuOpenedValue] = useToggle(false);

  return (
    <NavbarBase
      maxWidth="xl"
      isBlurred
      position="sticky"
      isMenuOpen={isMenuOpened}
      onMenuOpenChange={setIsMenuOpenedValue}
      classNames={{
        wrapper: 'px-4',
      }}
    >

      <NavbarContent
        className="sm:hidden"
        justify="end"
      >
        <NavbarItem className="mr-auto">
          <ThemeDropdown isDisabled={isMenuOpened} />
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpened ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden w-full gap-4 sm:flex"
        justify="end"
      >
        <NavbarItem className="mr-auto">
          <ThemeDropdown />
        </NavbarItem>

        {links.map(({ href, label, ...buttonProps }: ILink): ReactElement => (
          <NavbarItem key={href}>
            <Button
              as={Link}
              href={href}
              variant="light"
              {...buttonProps}
            >
              {label}
            </Button>
          </NavbarItem>
        ))}

      </NavbarContent>

      <NavbarMenu>
        {links.map(({ href, label, ...buttonProps }: ILink): ReactElement => (
          <NavbarItem key={href}>
            <Button
              as={Link}
              href={href}
              className="w-full"
              onClick={closeMenu}
              variant="light"
              {...buttonProps}
            >
              {label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </NavbarBase>
  );
};

export default Navbar;

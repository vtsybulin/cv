'use client';

import { ComponentType, Key, ReactElement, useCallback, useMemo } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, ButtonProps } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { RxMoon, RxSun, RxDesktop } from 'react-icons/rx';
import { IconBaseProps } from 'react-icons';

import Theme from '^/enums/Theme';
import texts from '^/configs/texts';

const iconMap: Record<Theme, ComponentType<IconBaseProps>> = {
  [Theme.Light]: RxSun,
  [Theme.Dark]: RxMoon,
  [Theme.System]: RxDesktop,
};

interface IThemeDropdownProps extends Partial<Pick<ButtonProps, 'isDisabled'>> {}

const ThemeDropdown = ({ isDisabled }: IThemeDropdownProps): ReactElement | null => {
  const { theme: currentTheme, setTheme } = useTheme();

  const handleSelectionChange = useCallback(
    (value: Key): void => {
      setTheme(value as Theme);
    },
    [setTheme],
  );

  const defaultSelectedKeys = useMemo(
    (): Set<Theme> => {
      if (!currentTheme) {
        return new Set();
      }

      return new Set([currentTheme as Theme]);
    },
    [currentTheme],
  );

  return (
    <Dropdown
      classNames={{
        content: 'min-w-fit w-fit',
      }}
    >
      <DropdownTrigger>
        <Button
          variant="flat"
          color="primary"
          isIconOnly
          isDisabled={isDisabled}
        >
          <RxSun className="size-4" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Select theme"
        selectionMode="single"
        color="primary"
        variant="flat"
        onAction={handleSelectionChange}
        defaultSelectedKeys={defaultSelectedKeys}
      >
        {Object.values(Theme).map((theme: Theme): ReactElement => {
          const Icon = iconMap[theme];

          return (
            <DropdownItem key={theme}>
              <div className="flex flex-row items-center gap-2">
                <Icon className="size-4" />

                {texts.theme[theme]}
              </div>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeDropdown;

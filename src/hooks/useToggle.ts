import { useMemo, useState } from 'react';

type TUseToggleResponse = [boolean, () => void, () => void, (value: boolean) => void];

const useToggle = (isDefaultToggled: boolean = false): TUseToggleResponse => {
  const [isToggled, setIsToggled] = useState<boolean>(isDefaultToggled);

  return useMemo(
    (): TUseToggleResponse => {
      const set = (): void => setIsToggled(true);
      const unset = (): void => setIsToggled(false);

      return [isToggled, set, unset, setIsToggled];
    },
    [isToggled],
  );
};

export default useToggle;

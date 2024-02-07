import { ComponentType, ReactElement } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from '@nextui-org/react';
import { IconBaseProps } from 'react-icons';
import { RxCheckCircled, RxExclamationTriangle } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

import Typography from '^/components/Typography';
import Status from '^/enums/Status';

interface IStatusModalProps extends Required<Pick<ModalProps, 'isOpen' | 'onOpenChange' | 'onClose'>>{
  status?: Status;
  title?: string;
  message?: string;
  closeButtonLabel: string;
}

const IconMap: Record<Status, ComponentType<IconBaseProps>> = {
  [Status.Success]: RxCheckCircled,
  [Status.Failure]: RxExclamationTriangle,
};

const StatusModal = ({ isOpen, onOpenChange, onClose, status, title, message, closeButtonLabel }: IStatusModalProps): ReactElement | null => {
  if (!status) {
    return null;
  }

  const Icon = IconMap[status];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        base: 'max-sm:max-w-full mx-4',
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <Typography
            variant="subtitle1"
            className="text-black dark:text-white"
          >
            {title}
          </Typography>
        </ModalHeader>

        <ModalBody className="flex flex-col items-center gap-8 text-center">
          <div
            className={twMerge('grid size-20 place-items-center rounded-full bg-primary shadow-2xl', classNames({
              'bg-orange-500': status === Status.Failure,
            }))}
          >
            <Icon
              className="size-10 text-white"
            />
          </div>

          <Typography variant="body1">
            {message}
          </Typography>
        </ModalBody>

        <ModalFooter>
          <Button
            color="secondary"
            variant="flat"
            onPress={onClose}
          >
            {closeButtonLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StatusModal;

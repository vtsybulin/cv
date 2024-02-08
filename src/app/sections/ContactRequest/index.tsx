'use client';

import { ReactElement } from 'react';
import { Button, Input, InputProps, Textarea, TextAreaProps, useDisclosure } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RxPaperPlane } from 'react-icons/rx';
import { useAction } from 'next-safe-action/hooks';

import Section from '^/components/Section';
import PageSection from '^/enums/PageSection';
import globalTexts from '^/configs/texts';
import Field from '^/enums/Field';
import { contactRequestFormSchema, ContactRequestFormSchema } from '^/schemas/contactRequestFormSchema';
import sendContactRequestEmail from '^/actions/sendContactRequestEmail';
import StatusModal from '^/components/StatusModal';

const fieldAdditionalPropsMap: Partial<Record<Field, TextAreaProps & InputProps>> = {
  [Field.Email]: {
    type: 'email',
    className: 'col-span-2 md:col-span-1',
  },
  [Field.Name]: {
    type: 'text',
    className: 'col-span-2 md:col-span-1',
  },
  [Field.Message]: {
    type: 'text',
    className: 'col-span-2',
  },
};

const texts = globalTexts.sections[PageSection.ContactRequest];

const ContactRequestSection = (): ReactElement => {
  const modalProps = useDisclosure({
    defaultOpen: true,
  });

  const { register, formState: { errors }, handleSubmit, reset } = useForm<ContactRequestFormSchema>({
    resolver: zodResolver(contactRequestFormSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const { status, result, execute } = useAction(sendContactRequestEmail, {
    onSettled: (): void => {
      reset();
      modalProps.onOpen();
    },
  });

  return (
    <Section
      id={PageSection.ContactRequest}
      title={texts.title}
    >
      <form
        onSubmit={handleSubmit(execute)}
        className="mx-auto grid w-full max-w-[40rem] grid-cols-2 flex-wrap gap-4 py-4 md:py-8 lg:py-12"
      >
        {Object.values([Field.Email, Field.Name, Field.Message]).map((name: Field): ReactElement => {
          const error = errors?.[name]?.message;
          const InputComponent = name === Field.Message ? Textarea : Input;

          return (
            <InputComponent
              key={name}
              size="md"
              variant="faded"
              label={globalTexts.field[name]}
              placeholder={texts.form.placeholder[name]}
              isInvalid={!!error}
              errorMessage={error}
              {...register(name)}
              {...fieldAdditionalPropsMap[name]}
            />
          );
        })}

        <Button
          isLoading={status === 'executing'}
          type="submit"
          className="col-span-2"
          color="primary"
          variant="flat"
          size="lg"
          endContent={<RxPaperPlane className="size-4 shrink-0" />}
        >
          {texts.form.submitButtonLabel}
        </Button>
      </form>

      <StatusModal
        {...modalProps}
        {...result.data}
        title={result.data?.status && globalTexts.status[result.data?.status]}
        closeButtonLabel={texts.form.closeButtonLabel}
      />
    </Section>
  );
};

export default ContactRequestSection;

import { ReactElement } from 'react';

import { ContactRequestFormSchema } from '^/schemas/contactRequestFormSchema';
import Typography from '^/components/Typography';

interface IContactRequestEmailTemplateProps {
  data: ContactRequestFormSchema;
}

const ContactRequestEmailTemplate = ({ data }: IContactRequestEmailTemplateProps): ReactElement => (
  <ul>
    <li>
      <Typography variant="body1">
        {data.email}
      </Typography>
    </li>

    <li>
      <Typography variant="body1">
        {data.name}
      </Typography>
    </li>

    <li>
      <Typography variant="body1">
        {data.message}
      </Typography>
    </li>
  </ul>
);

export default ContactRequestEmailTemplate;

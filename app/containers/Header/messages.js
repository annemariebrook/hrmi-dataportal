/*
 * Header Messages
 *
 * This contains all the text for the Header container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'hrmi.containers.Header';

export default defineMessages({
  language: {
    id: `${scope}.language`,
    defaultMessage: 'Language: ',
  },
  countries: {
    id: `${scope}.countries`,
    defaultMessage: 'Countries',
  },
  metrics: {
    id: `${scope}.metrics`,
    defaultMessage: 'Metrics',
  },
});

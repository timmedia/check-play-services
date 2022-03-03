import { registerPlugin } from '@capacitor/core';

import type { CheckPlayServicesPlugin } from './definitions';

const CheckPlayServices = registerPlugin<CheckPlayServicesPlugin>(
  'CheckPlayServices',
  {
    web: () => import('./web').then(m => new m.CheckPlayServicesWeb()),
  },
);

export * from './definitions';
export { CheckPlayServices };

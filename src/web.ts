import { WebPlugin } from '@capacitor/core';

import type {
  AvailabilityStatus,
  CheckPlayServicesPlugin,
} from './definitions';

export class CheckPlayServicesWeb
  extends WebPlugin
  implements CheckPlayServicesPlugin {
  async getAvailability(): Promise<{ status: AvailabilityStatus }> {
    throw this.unimplemented('Method nonsensical for web.');
  }

  async isAvailable(): Promise<{ available: boolean }> {
    throw this.unimplemented('Method nonsensical for web.');
  }
}

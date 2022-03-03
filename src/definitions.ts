export interface CheckPlayServicesPlugin {
  /**
   * Checks whether Google Play services are available, returns the status code.
   *
   * @since 1.0.0
   */
  getAvailability(): Promise<{ status: AvailabilityStatus }>;
  /**
   * Check that Google Play services are enabled.
   *
   * @since 1.0.0
   */
  isAvailable(): Promise<{ available: boolean }>;
}

export enum AvailabilityStatus {
  SUCCESS = 0,
  SERVICE_MISSING = 1,
  SERVICE_UPDATING = 18,
  SERVICE_VERSION_UPDATE_REQUIRED = 2,
  SERVICE_DISABLED = 3,
  SERVICE_INVALID = 9,
}

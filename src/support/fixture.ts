import { Page } from '@playwright/test';
import { Logger } from 'winston';

export const fixture = {
  // @ts-ignore
  page: undefined as Page,
  // @ts-ignore
  logger: undefined as Logger,
};

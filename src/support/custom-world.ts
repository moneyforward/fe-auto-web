import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import { APIRequestContext, BrowserContext, Page } from '@playwright/test';

export interface ICustomWorld extends World {
  debug: boolean;
  context?: BrowserContext;
  page?: Page;
  server?: APIRequestContext;
}

export class CustomWorld extends World implements ICustomWorld {
  debug: boolean = false;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);

import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    api_key: string;
    access_token: string;
    environment?: string;
  }
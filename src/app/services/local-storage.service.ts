import { Injectable, Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }

  storeToken(token: string) {
    this.storage.set('token', token);
  }

  storeNextUrl(next: string) {
    this.storage.set('nextUrl', next);
  }
  
  getNextUrl(): string {
    return this.storage.get('nextUrl');
  }
}

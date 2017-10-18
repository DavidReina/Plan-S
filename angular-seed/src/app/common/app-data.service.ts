import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {
  private _accessToken: string = "none";

  public set accessToken(accessToken: string) {
    this._accessToken = accessToken;
    localStorage.setItem('AT', accessToken);
  }

  public get accessToken(): string {
    if (!this._accessToken) {
      this._accessToken = localStorage.getItem('AT');
    }
    return this._accessToken;
  }

  constructor() { }

  public removeAccessToken() {
    this._accessToken = "none";
    localStorage.removeItem('AT');
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AddonsService {

  private readonly _serverAddonUrl: string = `${config.BASE_SERVER_URL}/addons`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Fetches all addons from the server.
   * @returns An observable of the response.
   */
  public fetchAllAddons = (): Observable<any> => {
    return this.httpClient.get(this._serverAddonUrl);
  };

}
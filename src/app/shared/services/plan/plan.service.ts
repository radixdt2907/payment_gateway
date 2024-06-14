import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { config } from 'src/app/config';
import { AddonsService } from '../addons/addons.service';
import AddonsModel from '../../models/addons.model';
import PlanModel from '../../models/plan.model';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private readonly _serverPlanUrl: string = `${config.BASE_SERVER_URL}/plan`;

  constructor(
    private httpClient: HttpClient,
    private addonService: AddonsService
  ) {}

  /**
   * Fetches all plans from the server.
   * @returns An observable of the response.
   */
  public fetchAllPlans = (): Observable<any> => {
    return combineLatest(
      this.httpClient.get(this._serverPlanUrl),
      this.addonService.fetchAllAddons()
    ).pipe(
      map(([planRes, addonsRes]) => {
        let plans: PlanModel[] = (planRes as any).plans ?? [];
        const addonsMap: Map<string, any> = new Map();

        (addonsRes.addons ?? []).forEach((addon: AddonsModel) => {
          addonsMap.set(addon.addon_code, addon);
        });

        plans = plans.map((plan: PlanModel) => {
          return {
            ...plan,
            addons: plan.addons.map(
              (addon: AddonsModel) => addonsMap.get(addon.addon_code) ?? addon
            ),
          };
        });

        return plans;
      })
    );
  };
}

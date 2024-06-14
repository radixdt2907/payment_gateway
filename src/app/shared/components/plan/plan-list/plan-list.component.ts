import { Component, Input } from '@angular/core';
import PlanModel from 'src/app/shared/models/plan.model';
import { CurrSelectedDataService } from 'src/app/shared/services/currSelectedData/curr-selected-data.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css'],
})
export class PlanListComponent {
  @Input('list') planList: PlanModel[] = [];

  constructor(private currSelectedData: CurrSelectedDataService) {}

  protected handlePlanCardClick = (plan: PlanModel): void =>
    this.currSelectedData.updatePlan(plan);
}

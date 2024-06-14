import { Component, Input } from '@angular/core';
import PlanModel from 'src/app/shared/models/plan.model';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css'],
})
export class PlanCardComponent {
 
  @Input() plan!: PlanModel;
}

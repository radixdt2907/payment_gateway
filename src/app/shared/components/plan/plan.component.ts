import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan/plan.service';
import PlanModel from '../../models/plan.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  constructor(private planService: PlanService) {}

  protected planList: PlanModel[] = [];

  ngOnInit(): void {
    this.loadPlans();
  }

  private loadPlans(): void {
    this.planService.fetchAllPlans().subscribe({
      next: (res) => {
        this.planList = res;
      },
      error: (error: any) => {
        console.error('Failed to load Plans ', error);
      },
    });
  }
}

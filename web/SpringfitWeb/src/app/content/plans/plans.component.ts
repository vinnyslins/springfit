import { Component, OnInit } from '@angular/core';
import { Plan, PlansService } from '../../services/plans.service'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})

export class PlansComponent implements OnInit {

  plans: Array<Plan>;

  constructor(private plansService: PlansService) { }

  ngOnInit() {
    this.GetPlans();
  }

  GetPlans() {
    this.plansService.GetPlans().subscribe(result => this.plans = result);
  }
}

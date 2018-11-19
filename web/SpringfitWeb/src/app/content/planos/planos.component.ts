import { Component, OnInit } from '@angular/core';
import { Plan, PlansService } from '../../services/plans.service'

@Component({
  selector: '.app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})

export class PlanosComponent implements OnInit {

  planos: Array<Plan>;

  constructor(private planos_service: PlansService) { }

  ngOnInit() {
    this.GetPlanos();
  }

  GetPlanos() {
    this.planos_service.GetPlanos().subscribe(result => this.planos = result);
  }
}

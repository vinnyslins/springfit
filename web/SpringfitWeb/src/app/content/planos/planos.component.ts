import { Component, OnInit } from '@angular/core';
import { Plano, PlanosService } from '../../services/planos.service'

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})

export class PlanosComponent implements OnInit {

  planos: Array<Plano>;

  constructor(private planos_service: PlanosService) { }

  ngOnInit() {
    this.GetPlanos();
  }

  GetPlanos() {
    this.planos_service.GetPlanos().subscribe(result => this.planos = result);
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  title : string = 'Springfit';
  slogan: string = 'Pois ser fit é um estilo de vida.';

  constructor(private userService : UsersService) { }

  ngOnInit() {
  }

}

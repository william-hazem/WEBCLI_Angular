import { Component } from '@angular/core';
import { HerosapiService } from '../heros/herosapi.service';
import { Hero } from '../heros/heros';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  heros: Hero[];
  constructor(private service: HerosapiService) {
    this.heros = [];
  }

  ngOnInit() {
    this.service.list().subscribe(dados => this.heros = dados);
  }
}

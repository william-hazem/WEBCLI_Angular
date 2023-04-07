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
  isListed = false;
  constructor(private service: HerosapiService) {
    this.heros = [];
  }

  ngOnInit() {
    // this.service.list().subscribe(dados => this.heros = dados);
  }
  
  show() {
    this.service.list().subscribe(dados => this.heros = dados);
    this.isListed = true;
  }
  hide() {
    this.isListed = false;
    
  }
}

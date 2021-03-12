import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HeroesService,Heroe} from '../../services/heroe.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = []

  constructor(private heroService:HeroesService, private router:Router) {
    console.log("contructor")
   }


  ngOnInit(): void {
    // se ejecuta una ves renderizada la web
    console.log("onInit")
    this.heroes = this.heroService.getHeroes()
    console.log(this.heroes)
  }

  verHeroe(id:number){
    console.log(id)
    this.router.navigate(["/heroe",id])
  }
}

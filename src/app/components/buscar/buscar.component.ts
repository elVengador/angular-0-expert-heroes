import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HeroesService,Heroe} from '../../services/heroe.service'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes:Heroe[]=[]
  term:string=""
  
  constructor(private activatedRoute:ActivatedRoute,
              private heroeService:HeroesService
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.term = params["term"]
      this.heroes = this.heroeService.buscarHeroes(this.term)
    })
    
    
  }

}

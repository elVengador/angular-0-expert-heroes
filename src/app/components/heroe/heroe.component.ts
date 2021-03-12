import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {HeroesService,Heroe} from '../../services/heroe.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe
  constructor(private activatedRoute:ActivatedRoute,
              private heroesServices:HeroesService
    ) { 
    this.activatedRoute.params.subscribe(params=>{
      const idx = params["id"]
      this.heroe = heroesServices.getHeroe(idx)
    })
  }

  ngOnInit(): void {
  }
  
}

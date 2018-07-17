import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AquariumService }  from '../../services/aquarium-service/aquarium.service';

import { Aquarium } from '../../models/aquarium';

@Component({
  selector: 'app-aquarium-detail',
  templateUrl: './aquarium-detail.component.html',
  styleUrls: ['./aquarium-detail.component.css']
})
export class AquariumDetailComponent implements OnInit {
  @Input() aquarium: Aquarium;

  constructor(private route: ActivatedRoute,
    private aquariumService: AquariumService,
    private location: Location) { }

    ngOnInit(): void {
      this.getAquarium();
    }
    
    getAquarium(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.aquariumService.getAquarium(id)
        .subscribe(aquarium => this.aquarium = aquarium);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.aquariumService.updateAquarium(this.aquarium)
      .subscribe(() => this.goBack());
    }
}

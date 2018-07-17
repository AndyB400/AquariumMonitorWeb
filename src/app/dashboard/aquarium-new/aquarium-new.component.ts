import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { AquariumService }  from '../../services/aquarium-service/aquarium.service';
import { Aquarium } from '../../models/aquarium';

@Component({
  selector: 'app-aquarium-new',
  templateUrl: './aquarium-new.component.html',
  styleUrls: ['./aquarium-new.component.css']
})
export class AquariumNewComponent implements OnInit {
  aquarium: Aquarium;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private aquariumService: AquariumService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.aquariumService.updateAquarium(this.aquarium)
    .subscribe((result) => {
      if(result)
        this.toastr.success('', 'Saved Successfully');
      else
        this.toastr.error('Unable to add aquarium', 'Error');
     });
  }
}

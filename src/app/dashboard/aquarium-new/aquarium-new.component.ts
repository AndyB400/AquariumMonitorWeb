import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

import { AquariumService } from '../../_services/aquarium-service/aquarium.service';
import { IAquarium } from '../../_models/aquarium';

@Component({
  selector: 'app-aquarium-new',
  templateUrl: './aquarium-new.component.html',
  styleUrls: ['./aquarium-new.component.css']
})
export class AquariumNewComponent implements OnInit {
  aquarium: IAquarium;

  newAquariumForm: FormGroup

  regexpatterns = {
    upTo9999: '[0-9]{1,4}'
  }

  name: FormControl = new FormControl('', [Validators.required, Validators.maxLength(100)])
  typeName: FormControl = new FormControl('Marine')
  volume: FormControl = new FormControl('', [Validators.pattern(this.regexpatterns.upTo9999)])
  actualVolume: FormControl = new FormControl('', [Validators.pattern(this.regexpatterns.upTo9999)])
  officialVolume: FormControl = new FormControl('', [Validators.pattern(this.regexpatterns.upTo9999)])
  height: FormControl = new FormControl('', [Validators.pattern(this.regexpatterns.upTo9999)])
  width: FormControl = new FormControl('', [Validators.pattern(this.regexpatterns.upTo9999)])
  length: FormControl = new FormControl('', [Validators.pattern(this.regexpatterns.upTo9999)])
  notes: FormControl = new FormControl('', [Validators.maxLength(4000)])

  constructor(private route: ActivatedRoute,
    private aquariumService: AquariumService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newAquariumForm = new FormGroup({
      name: this.name,
      volume: this.volume,
      typeName: this.typeName,
      actualVolume: this.actualVolume,
      officalVolume: this.officialVolume,
      height: this.height,
      width: this.width,
      length: this.length,
      notes: this.notes
    })
  }

  cancel() {
    this.router.navigate(['/home'])
  }

  save(formValues) {
    
    let aquarium: IAquarium = {
      id: undefined,
      url: undefined,
      created: undefined,
      userId: undefined,
      name: formValues.name,
      typeName: formValues.typeName,
      actualVolume: formValues.actualVolume ? +formValues.actualVolume : undefined,
      officalVolume: formValues.officalVolume ? +formValues.officalVolume : undefined,
      volumeUnitName: formValues.volumeUnitName ? formValues.volumeUnitName : undefined,
      height: formValues.height ? +formValues.height : undefined,
      width: formValues.width ? +formValues.width : undefined,
      length: formValues.length ? +formValues.length : undefined,
      dimensionUnitName: formValues.dimensionUnitName,
      notes: formValues.notes,
      rowVersion: undefined
    }
    console.log(aquarium);

    this.aquariumService.addAquarium(aquarium)
      .subscribe((result) => {
        if (result){
          this.toastr.success('', 'Created Successfully');          
          this.router.navigate(['/aquarium/' + result.id])
        }
        else
          this.toastr.error('Unable to add aquarium', 'Error');
      });
  }
}

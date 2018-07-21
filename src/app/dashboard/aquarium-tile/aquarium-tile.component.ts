import { Component, OnInit, Input } from '@angular/core';
import { IAquarium } from '../../_models/aquarium';

@Component({
  selector: 'aquarium-tile',
  templateUrl: './aquarium-tile.component.html',
  styleUrls: ['./aquarium-tile.component.css']
})
export class AquariumTileComponent implements OnInit {
  @Input() aquarium: IAquarium;

  constructor() { }

  ngOnInit() {
  }
}

import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AquariumService } from "../_services/aquarium-service/aquarium.service";

@Injectable()
export class AquariumExistsActivator implements CanActivate {
  constructor(private router: Router, private AquariumService:AquariumService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    // Uses !! to cast to boolean
    const aquariumExists = !!this.AquariumService.getAquarium(route.params['id']);

    if(! aquariumExists)
        this.router.navigate(['/aquariumNotFound']);

    return aquariumExists;
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";

import { AquariumService } from "../../_services/aquarium-service/aquarium.service";
import { Aquarium } from "../../_models/aquarium";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";

@Component({
  selector: "app-aquarium-detail",
  templateUrl: "./aquarium-detail.component.html",
  styleUrls: ["./aquarium-detail.component.css"]
})
export class AquariumDetailComponent implements OnInit {
  @Input() aquarium: Aquarium;
  deleteConfirmmodalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private aquariumService: AquariumService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getAquarium();
  }

  getAquarium(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.aquariumService
      .getAquarium(id)
      .subscribe(aquarium => (this.aquarium = aquarium));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.aquariumService.updateAquarium(this.aquarium).subscribe(result => {
      if (result)
        this.toastr.error(`Unable to save aquarium. ${result}`, "Error");
      else
        this.toastr.success("", "Saved Successfully");

    });
  }

  delete(): void {
    console.log("Deleting...");
    this.aquariumService.deleteAquarium(this.aquarium).subscribe(result => {

      if (result)
        this.toastr.error(`Unable to delete aquarium. ${result}`, "Error");
      else
        this.location.back();
    });
  }

  openDeleteConfirmModal() {
    const initialState = {
      title: "Delete Aquarium",
      message: `Are you sure you want to delete Aqaurium: ${
        this.aquarium.name
        }?`
    };

    this.deleteConfirmmodalRef = this.modalService.show(DeleteModalComponent, {
      initialState
    });

    this.deleteConfirmmodalRef.content.onClose.subscribe(result => {
      if (result) {
        this.delete();
      }
    });
  }
}

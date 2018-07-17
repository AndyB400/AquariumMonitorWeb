import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { Subject } from "rxjs";

@Component({
  selector: "delete-modal",
  templateUrl: './delete-modal.component.html',
})
export class DeleteModalComponent implements OnInit {
  title: string;
  message: string;
  closeBtnName: string;

  public onClose: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
  }

  public onConfirm(): void {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }
  public onCancel(): void {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}

import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: "app-update-dialog",
  templateUrl: "./update-dialog.component.html",
  styleUrls: ["./update-dialog.component.css"],
})

export class UpdateDialogComponent {

	constructor(
		public dialogRef: MatDialogRef<UpdateDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) {}

	public onNoClick(): void {
		this.dialogRef.close();
	}

}




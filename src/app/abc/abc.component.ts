import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../data.service";
import {UpdateDialogComponent} from "./update-dialog/update-dialog.component";

@Component({
	selector: "app-abc",
	templateUrl: "./abc.component.html",
	styleUrls: ["./abc.component.css"],
})

export class AbcComponent implements OnInit {

	public name: string;
	public food: string;
	public comment: string;
	public items: any[];

	constructor(
		public dialog: MatDialog,
		private data: DataService,
	) {
		this.query();
	}

	public ngOnInit(): void {
		this.query();
	}

	public onChange() {
		this.data.insert({food: this.food, name: this.name, comment: this.comment}, (result) => {
			if (result.code === 0) {
				this.query();
			}
		});
	}

	public onDelete(id: string) {
		this.data.delete(id, (result) => {
			if (result.code === 0) {
				this.query();
			}
		});
	}

	public onUpdate(id: string): void {
		this.data.get(id, (result) => {
			if (result.code === 0) {

				const dialogRef = this.dialog.open(UpdateDialogComponent, {
					width: "60vw",
					data: result.value,
				});

				dialogRef.afterClosed().subscribe((result) => {
					const id = result._id;
					const update = { $set: {food: result.food, name: result.name, comment: result.comment}};
					this.data.update(id, update, (result) => {
						if (result.code === 0) {
							this.query();
						}
					});
				});

			}
		});
	}

	public query() {
		this.data.query({}, (result) => {
			if (result.code === 0) {
				this.items = result.value;
			}
		});
	}

}



import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

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
		private snackbar: MatSnackBar,
		private data: DataService,
	) {
		this.query();
	}

	public ngOnInit(): void {
		this.query();
	}

	public onChange(): void {
		try {
			this.data.insert({food: this.food, name: this.name, comment: this.comment}, (result: any): void => {
				if (result.code === 0) {
					this.query();
				} else {
					this.snackbar.open(result.value, "Ok", {
						duration: 3000,
					});
				}
			});
		} catch (e) {
			this.snackbar.open(e.message, "Ok", {
				duration: 3000,
			});
		}
	}

	public onDelete(id: string): void {
		try {
			this.data.delete(id, (result: any): void => {
				if (result.code === 0) {
					this.query();
				} else {
					this.snackbar.open(result.value, "Ok", {
						duration: 3000,
					});
				}
			});
		} catch (e) {
			this.snackbar.open(e.message, "Ok", {
				duration: 3000,
			});
		}
	}

	public onUpdate(id: string): void {
		try {
			this.data.get(id, (result: any): void => {
				if (result.code === 0) {

					const dialogRef: any = this.dialog.open(UpdateDialogComponent, {
						width: "60vw",
						data: result.value,
					});

					dialogRef.afterClosed().subscribe((result: any): void => {
						const id = result._id;
						const update = {$set: {food: result.food, name: result.name, comment: result.comment}};
						this.data.update(id, update, (result: any): void => {
							if (result.code === 0) {
								this.query();
							} else {
								this.snackbar.open(result.value, "Ok", {
									duration: 3000,
								});
							}
						});
					});
				}
			});
		} catch (e) {
			this.snackbar.open(e.message, "Ok", {
				duration: 3000,
			});
		}
	}

	public query(): void {
		try {
			this.data.query({}, (result: any): void => {
				if (result.code === 0) {
					this.items = result.value;
				} else {
					this.snackbar.open(result.value, "Ok", {
						duration: 3000,
					});
				}
			});
		} catch (e) {
			this.snackbar.open(e.message, "Ok", {
				duration: 3000,
			});
		}
	}

}

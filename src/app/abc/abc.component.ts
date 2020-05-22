import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

import {DataService, IResult} from "../data.service";
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
			this.data.insert({food: this.food, name: this.name, comment: this.comment}, (create_result: IResult): void => {
				if (create_result.code === 0) {
					this.query();
				} else {
					this.snackbar.open(create_result.value, "Ok", {
						duration: 3000,
					});
				}
			});
		} catch (exeption) {
			this.snackbar.open(exeption.message, "Ok", {
				duration: 3000,
			});
		}
	}

	public onDelete(id: string): void {
		try {
			this.data.delete(id, (result: IResult): void => {
				if (result.code === 0) {
					this.query();
				} else {
					this.snackbar.open(result.value, "Ok", {
						duration: 3000,
					});
				}
			});
		} catch (exeption) {
			this.snackbar.open(exeption.message, "Ok", {
				duration: 3000,
			});
		}
	}

	public onUpdate(id: string): void {
		try {
			this.data.get(id, (get_result: IResult): void => {
				if (get_result.code === 0) {

					const dialogRef: any = this.dialog.open(UpdateDialogComponent, {
						width: "60vw",
						data: get_result.value,
					});

					dialogRef.afterClosed().subscribe((dialog_result: any): void => {
						const id: string = dialog_result._id;
						const update: any = {$set: {food: dialog_result.food, name: dialog_result.name, comment: dialog_result.comment}};
						this.data.update(id, update, (update_result: IResult): void => {
							if (update_result.code === 0) {
								this.query();
							} else {
								this.snackbar.open(update_result.value, "Ok", {
									duration: 3000,
								});
							}
						});
					});
				}
			});
		} catch (exeption) {
			this.snackbar.open(exeption.message, "Ok", {
				duration: 3000,
			});
		}
	}

	public query(): void {
		try {
			this.data.query({}, (query_result: IResult): void => {
				if (query_result.code === 0) {
					this.items = query_result.value;
				} else {
					this.snackbar.open(query_result.value, "Ok", {
						duration: 3000,
					});
				}
			});
		} catch (exeption) {
			this.snackbar.open(exeption.message, "Ok", {
				duration: 3000,
			});
		}
	}

}

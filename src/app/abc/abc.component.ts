import {Component, OnInit} from "@angular/core";
import {DataService} from "../data.service";

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
		private data: DataService,
	) {
	}

	public ngOnInit(): void {
	}

	public onChange() {
		this.data.insert({food: this.food, name: this.name, comment: this.comment}, (result) => {
			if (result.code === 0) {

				this.data.query({}, (result) => {
					if (result.code === 0) {
						this.items = result.value;
					}
				});

			}
		});
	}

	public onQuery() {
		this.data.query({}, (result) => {
			if (result.code === 0) {
				this.items = result.value;
			}
		});
	}

}

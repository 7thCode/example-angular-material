import {Component, OnInit} from "@angular/core";
import {DataService} from "../data.service";

@Component({
	selector: "app-abc",
	templateUrl: "./abc.component.html",
	styleUrls: ["./abc.component.css"],
})

export class AbcComponent implements OnInit {

	public food: string;
	public comment: string;
	public items: any[];

	constructor(private data: DataService) {
	}

	public ngOnInit(): void {
	}

	public onChange() {
		this.data.insert({food: this.food, comment: this.comment}, (result) => {
			if (result.code === 0) {

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

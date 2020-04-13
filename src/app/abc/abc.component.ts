import {Component, OnInit} from "@angular/core";

@Component({
	selector: "app-abc",
	templateUrl: "./abc.component.html",
	styleUrls: ["./abc.component.css"],
})
export class AbcComponent implements OnInit {

	public name: string;
	public flag: boolean;
	public color: string = "warn";

	constructor() {
	}

	public ngOnInit(): void {
		this.name = "";
		this.flag = true;
	}

	public onChange() {
		this.flag = !this.flag;
	}

}

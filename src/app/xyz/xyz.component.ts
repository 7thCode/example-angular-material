import {Component, OnInit} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../login.service";

@Component({
	selector: "app-xyz",
	templateUrl: "./xyz.component.html",
	styleUrls: ["./xyz.component.css"],
})

export class XyzComponent implements OnInit {

	public username: string;
	public password: string;

	constructor(
		private service: LoginService,
		private snackbar: MatSnackBar,
	) {
	}

	public ngOnInit(): void {
	}

	public login() {
		this.service.login(this.username, this.password, (result) => {
			if (result.code === 0) {
				this.snackbar.open("login", "Ok", {
					duration: 3000,
				});
			}
		});
	}

}

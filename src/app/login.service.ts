import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
	providedIn: "root",
})

export class LoginService {

	private httpOptions: any;

	constructor(
		protected http: HttpClient,
	) {
		this.httpOptions = {
			headers: new HttpHeaders({
				"Accept": "application/json; charset=utf-8",
				"Content-Type": "application/json; charset=utf-8",
			}),
			withCredentials: true,
		};
	}

	public login(username: string, password: string, callback: (result) => void): void {
		this.http.post("/login", {username: username, password: password}, this.httpOptions).subscribe((result: any): void => {
			callback(result);
		},(error: HttpErrorResponse): void => {
			callback({code: -1, value: error.message});
		});
	}

}

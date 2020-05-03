import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
	providedIn: "root",
})

export class DataService {

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

	public insert(data: any, callback: (result) => void): void {
		this.http.post("/insert", data, this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}

	public delete(id: string, callback: (result) => void): void {
		this.http.delete("/delete/" + encodeURIComponent(id), this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}

	public query(query: any, callback: (result) => void): void {
		this.http.get("/query/" + encodeURIComponent(JSON.stringify(query)), this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}
}

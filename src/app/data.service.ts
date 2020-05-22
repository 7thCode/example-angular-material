import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

export interface IResult {
	code: number;
	value: any;
}

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

	public query(query: any, callback: (result: IResult) => void): void {
		this.http.get("/query/" + encodeURIComponent(JSON.stringify(query)), this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}

	public get(id: string, callback: (result: IResult) => void): void {
		this.http.get("/get/" + encodeURIComponent(id), this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}

	public insert(data: any, callback: (result: IResult) => void): void {
		this.http.post("/insert", data, this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}

	public update(id: string, data: any, callback: (result: IResult) => void): void {
		this.http.put("/update/" + encodeURIComponent(id), data, this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}

	public delete(id: string, callback: (result: IResult) => void): void {
		this.http.delete("/delete/" + encodeURIComponent(id), this.httpOptions)
			.subscribe((result: any): void => {
					callback(result);
				}, (error: HttpErrorResponse): void => {
					callback({code: -2, value: error.message});
				},
			);
	}
}

import { Injectable } from '@angular/core';
import {GeneralLib} from "../lib";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class EditorService {

  // constructor(private _apiUrl = GeneralLib.serverUrl, private _http: Http) { }
  constructor(private _http: Http) { }

  getFields(): any {
    return this._http.get(`http://127.0.0.1:8000/api/fields/text_fields/`)
    // return this._http.get(`http://e8cb19f9.ngrok.io/api/fields/text_fields/`)
      .map((response: Response) => response.json() )
      .do(data => console.log(data) )
      .catch(this.handleError);
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

}

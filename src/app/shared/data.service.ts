import { Injectable } from '@angular/core';
import { Http } from 'ng4-http';

@Injectable()
export class DataService {

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get('http://localhost:3000/data')
            .map(res => res.json());
    }

}

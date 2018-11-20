import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data) {
        data = { email: 'admin@example.com', password: 'Test@123' };
        return this.http.post('http://localhost:3070/api/login', data);
    }

    getCustomerDetails() {
        return this.http.get('http://localhost:3070/customers/details');
    }

}

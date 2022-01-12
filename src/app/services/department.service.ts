import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cacheable, CacheableService } from 'angular-cacheable';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    private url = 'http://localhost:8090/api/departments';
    private cacheKey = 'get-departments';


    constructor(private http: HttpClient) {
        console.log(':::departmests service constructor');
    }

    @Cacheable({ key: 'get-departments' })
    getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.url);
    }

    addDepartment(department: Department): Observable<any> {
        return this.http.post(this.url, { value: department.name }).pipe(
            tap(() => CacheableService.getInstance().invalidate(this.cacheKey))
        );
    }
}

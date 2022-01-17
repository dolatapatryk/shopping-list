import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { Cacheable, CacheableService } from 'angular-cacheable';
import { tap } from 'rxjs/operators';

interface DepartmentRequestBody {
    value: string;
}

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    private static CACHE_KEY = 'get-departments';
    private url = 'http://localhost:8090/api/departments';

    constructor(private http: HttpClient) {
    }

    @Cacheable({ key: DepartmentService.CACHE_KEY })
    getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.url);
    }

    addDepartment(department: Department): Observable<any> {
        return this.http.post(this.url, this.getRequestBody(department)).pipe(this.invalidateCache());
    }

    private getRequestBody(department: Department): DepartmentRequestBody {
        return { value: department.name };
    }

    private invalidateCache(): OperatorFunction<any, any> {
        console.log('Invalidate departments cache');
        return tap(() => CacheableService.getInstance().invalidate(DepartmentService.CACHE_KEY));
    }
}

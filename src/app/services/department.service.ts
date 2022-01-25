import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cacheable } from 'angular-cacheable';
import { AbstractService } from './abstract-service';

interface DepartmentRequestBody {
    value: string;
}

@Injectable({
    providedIn: 'root'
})
export class DepartmentService extends AbstractService<Department, DepartmentRequestBody> {
    private static CACHE_KEY = 'get-departments';
    private static URL = 'api/departments';

    constructor(http: HttpClient) {
        super(http, DepartmentService.URL, DepartmentService.CACHE_KEY);
    }

    @Cacheable({ key: DepartmentService.CACHE_KEY })
    findAll(): Observable<Department[]> {
        return super.findAll();
    }

    protected getRequestBody(department: Department): DepartmentRequestBody {
        return { value: department.name };
    }
}

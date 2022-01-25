import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { Id } from '../models/id';
import { tap } from 'rxjs/operators';
import { CacheableService } from 'angular-cacheable';

export abstract class AbstractService<T extends Id, RBT> {
    private baseUrl = 'http://patrykdolata.com:8090/';

    protected constructor(protected http: HttpClient, private readonly url: string, private cacheKey: string) {
        this.url = `${this.baseUrl}${url}`;
    }

    protected findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url); // .pipe(catchError(this.invalidateCache));
    }

    getById(id: number): Observable<T> {
        return this.http.get<T>(this.getIdUrl(id));
    }

    save(element: T): Observable<HttpResponse<Id | any>> {
        if (element.id) {
            return this.edit(element.id, element);
        } else {
            return this.add(element);
        }
    }

    private add(element: T): Observable<HttpResponse<Id>> {
        return this.http.post<Id>(this.url, this.getRequestBody(element, 'add'), { observe: 'response' })
            .pipe(this.invalidateCache());
    }

    private edit(id: number, element: T): Observable<HttpResponse<any>> {
        return this.http.put(this.getIdUrl(id), this.getRequestBody(element, 'edit'), { observe: 'response' })
            .pipe(this.invalidateCache());
    }

    protected abstract getRequestBody(element: T, mode?: 'add' | 'edit'): RBT;

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete(this.getIdUrl(id), { observe: 'response' }).pipe(this.invalidateCache());
    }

    protected getIdUrl(id: number) {
        return `${this.url}/${id}`;
    }

    protected invalidateCache(): OperatorFunction<any, any> {
        return tap(() => CacheableService.getInstance().invalidate(this.cacheKey));
    }
}

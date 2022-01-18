import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { Id } from '../models/id';
import { tap } from 'rxjs/operators';
import { CacheableService } from 'angular-cacheable';

export abstract class AbstractService<T extends Id, RBT> {

    protected constructor(protected http: HttpClient, private url: string, private cacheKey: string) {
    }

    protected findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }

    save(element: T): Observable<HttpResponse<Id | any>> {
        if (element.id) {
            return this.edit(element.id, element);
        } else {
            return this.add(element);
        }
    }

    private add(element: T): Observable<HttpResponse<Id>> {
        return this.http.post<Id>(this.url, this.getRequestBody(element), { observe: 'response' })
            .pipe(this.invalidateCache());
    }

    private edit(id: number, element: T): Observable<HttpResponse<any>> {
        return this.http.put(this.getIdUrl(id), this.getRequestBody(element), { observe: 'response' })
            .pipe(this.invalidateCache());
    }

    protected abstract getRequestBody(element: T): RBT;

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete(this.getIdUrl(id), { observe: 'response' }).pipe(this.invalidateCache());
    }

    private getIdUrl(id: number) {
        return `${this.url}/${id}`;
    }

    private invalidateCache(): OperatorFunction<any, any> {
        console.log(':::Invalidate cache:', this.cacheKey);
        return tap(() => CacheableService.getInstance().invalidate(this.cacheKey));
    }
}

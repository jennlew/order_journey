import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { flatMap, map, take, pluck, filter, merge, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private httpClient: HttpClient) { }

  search(mtn: string, predicate: any, limit: number = 1) {
      const searchUrl = environment.apiUrl + `/search?number=${mtn}`;

      return this
        .httpClient
        .get(searchUrl)
        .pipe(
            pluck('_embedded', 'items'),
            filter(x => x),
            flatMap((x: Array<any>) => {
                return x.sort((a: any, b: any) => {
                    let aId = parseFloat(a._links.self.href.replace(/^.*\/([^/]+)$/, '$1').replace(/-/g, '.'));
                    let bId = parseFloat(b._links.self.href.replace(/^.*\/([^/]+)$/, '$1').replace(/-/g, '.'));
                    return aId - bId;
                });
            }),
            filter((x: any) => !x.stateIsReadOnly),
            take(20),
            map((x: any) => x._links.self.href),
            map((url: string) => url.replace('/api/', '/util/state/')),
            flatMap(url => this.httpClient.get(url)),
            filter(predicate),
            reduce((acc: Array<any>, x: any) => {
                acc.push(x)
                return acc;
            }, []),
            flatMap((x: Array<any>) => x.sort((a: any, b: any) => (a.updateTimestamp > b.updateTimestamp ? -1 : 1))),
            take(limit)
        )
  }
}

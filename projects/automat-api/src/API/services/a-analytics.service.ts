/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AAnalyticsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation aAnalyticsGetAnalyticsItemsGet
   */
  static readonly AAnalyticsGetAnalyticsItemsGetPath = '/AAnalytics/GetAnalyticsItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsGetAnalyticsItemsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGetAnalyticsItemsGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsGetAnalyticsItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsGetAnalyticsItemsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGetAnalyticsItemsGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.aAnalyticsGetAnalyticsItemsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

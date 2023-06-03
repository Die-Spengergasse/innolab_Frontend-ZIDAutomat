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

import { BorrowAdminDetailedDto } from '../models/borrow-admin-detailed-dto';
import { UserAdmiBorrowDto } from '../models/user-admi-borrow-dto';

@Injectable({
  providedIn: 'root',
})
export class ABorrowInfoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation borrowDetailedGet
   */
  static readonly BorrowDetailedGetPath = '/BorrowDetailed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowDetailedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Plain$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BorrowAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.BorrowDetailedGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `borrowDetailedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Plain(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<BorrowAdminDetailedDto> {

    return this.borrowDetailedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BorrowAdminDetailedDto>) => r.body as BorrowAdminDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowDetailedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Json$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BorrowAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.BorrowDetailedGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `borrowDetailedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Json(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<BorrowAdminDetailedDto> {

    return this.borrowDetailedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BorrowAdminDetailedDto>) => r.body as BorrowAdminDetailedDto)
    );
  }

  /**
   * Path part for operation entschuldigtPost
   */
  static readonly EntschuldigtPostPath = '/Entschuldigt';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `entschuldigtPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  entschuldigtPost$Response(params?: {
    Id?: number;
    Value?: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.EntschuldigtPostPath, 'post');
    if (params) {
      rb.query('Id', params.Id, {});
      rb.query('Value', params.Value, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `entschuldigtPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  entschuldigtPost(params?: {
    Id?: number;
    Value?: boolean;
  },
  context?: HttpContext

): Observable<void> {

    return this.entschuldigtPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation zurueckgebenPost
   */
  static readonly ZurueckgebenPostPath = '/Zurueckgeben';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zurueckgebenPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  zurueckgebenPost$Plain$Response(params?: {
    Id?: number;
    Value?: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ZurueckgebenPostPath, 'post');
    if (params) {
      rb.query('Id', params.Id, {});
      rb.query('Value', params.Value, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zurueckgebenPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zurueckgebenPost$Plain(params?: {
    Id?: number;
    Value?: boolean;
  },
  context?: HttpContext

): Observable<string> {

    return this.zurueckgebenPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zurueckgebenPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  zurueckgebenPost$Json$Response(params?: {
    Id?: number;
    Value?: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ZurueckgebenPostPath, 'post');
    if (params) {
      rb.query('Id', params.Id, {});
      rb.query('Value', params.Value, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zurueckgebenPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zurueckgebenPost$Json(params?: {
    Id?: number;
    Value?: boolean;
  },
  context?: HttpContext

): Observable<string> {

    return this.zurueckgebenPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation allBorrowsGet
   */
  static readonly AllBorrowsGetPath = '/AllBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `allBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  allBorrowsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.AllBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `allBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  allBorrowsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.allBorrowsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `allBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  allBorrowsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.AllBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `allBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  allBorrowsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.allBorrowsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * Path part for operation toDealWithBorrowsGet
   */
  static readonly ToDealWithBorrowsGetPath = '/ToDealWithBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `toDealWithBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  toDealWithBorrowsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ToDealWithBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `toDealWithBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  toDealWithBorrowsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.toDealWithBorrowsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `toDealWithBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  toDealWithBorrowsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ToDealWithBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `toDealWithBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  toDealWithBorrowsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.toDealWithBorrowsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * Path part for operation finishedBorrowsGet
   */
  static readonly FinishedBorrowsGetPath = '/FinishedBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finishedBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  finishedBorrowsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.FinishedBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `finishedBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  finishedBorrowsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.finishedBorrowsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finishedBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  finishedBorrowsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.FinishedBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `finishedBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  finishedBorrowsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.finishedBorrowsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * Path part for operation openBorrowsGet
   */
  static readonly OpenBorrowsGetPath = '/OpenBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `openBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  openBorrowsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.OpenBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `openBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  openBorrowsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.openBorrowsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `openBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  openBorrowsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.OpenBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `openBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  openBorrowsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<UserAdmiBorrowDto>> {

    return this.openBorrowsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

}

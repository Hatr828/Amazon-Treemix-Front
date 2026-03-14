/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AuthResponseDto {
  accessToken?: string | null;
  /** @format int32 */
  expiresInSeconds?: number;
  refreshToken?: string | null;
  tokenType?: string | null;
  user?: UserResponseDto;
}

export interface BrandDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface CategoryDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface HomeResponseDto {
  products?: ProductCardDto[] | null;
}

export interface ImageDto {
  url?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface ImageUrlDto {
  url?: string | null;
}

export interface LoginRequestDto {
  /**
   * @format email
   * @minLength 0
   * @maxLength 100
   */
  email: string;
  /**
   * @format password
   * @minLength 0
   * @maxLength 72
   */
  password: string;
}

export interface MeResponseDto {
  /** @format uuid */
  id?: string;
  email?: string | null;
  role?: string | null;
}

export interface PriceDto {
  /** @format double */
  current?: number;
  /** @format double */
  original?: number;
}

export interface ProductCardDto {
  /** @format uuid */
  id?: string;
  /** @format double */
  rating?: number;
  price?: PriceDto;
  image?: ImageUrlDto;
  title?: string | null;
}

export interface ProductCardDtoPagedResult {
  items?: ProductCardDto[] | null;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalItems?: number;
  /** @format int32 */
  totalPages?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export interface ProductDetailsDto {
  /** @format uuid */
  id?: string;
  title?: string | null;
  description?: string | null;
  /** @format double */
  rating?: number;
  /** @format int32 */
  ratingCount?: number;
  price?: PriceDto;
  primaryImage?: ImageUrlDto;
  images?: ImageDto[] | null;
  category?: CategoryDto;
  brand?: BrandDto;
}

export interface RefreshRequestDto {
  /**
   * @minLength 0
   * @maxLength 512
   */
  refreshToken: string;
}

export interface RegisterRequestDto {
  /**
   * @minLength 3
   * @maxLength 64
   * @pattern ^[\p{L}\p{M}]+(?:[ '\-][\p{L}\p{M}]+)*$
   */
  firstName: string;
  /**
   * @minLength 3
   * @maxLength 64
   * @pattern ^[\p{L}\p{M}]+(?:[ '\-][\p{L}\p{M}]+)*$
   */
  lastName: string;
  /**
   * @format email
   * @minLength 0
   * @maxLength 128
   */
  email: string;
  /**
   * @format password
   * @minLength 6
   * @maxLength 72
   * @pattern ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$
   */
  password: string;
  /**
   * @format password
   * @minLength 1
   */
  passwordRepeat: string;
}

export interface UserResponseDto {
  /** @format uuid */
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  role?: string | null;
  /** @format int64 */
  createdAtUnix?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title AMZN API
 * @version Swag v1
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * No description
     *
     * @tags AdminBrands
     * @name BrandsList
     * @request GET:/Admin/Brands
     * @secure
     */
    brandsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Admin/Brands`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminBrands
     * @name BrandsCreateList
     * @request GET:/Admin/Brands/Create
     * @secure
     */
    brandsCreateList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Admin/Brands/Create`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminBrands
     * @name BrandsCreateCreate
     * @request POST:/Admin/Brands/Create
     * @secure
     */
    brandsCreateCreate: (
      query: {
        /**
         * @minLength 0
         * @maxLength 128
         */
        Name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/Admin/Brands/Create`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminBrands
     * @name BrandsDeleteCreate
     * @request POST:/Admin/Brands/Delete
     * @secure
     */
    brandsDeleteCreate: (
      query?: {
        /** @format uuid */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/Admin/Brands/Delete`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminProducts
     * @name ProductsCreateList
     * @request GET:/Admin/Products/Create
     * @secure
     */
    productsCreateList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Admin/Products/Create`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminProducts
     * @name ProductsCreateCreate
     * @request POST:/Admin/Products/Create
     * @secure
     */
    productsCreateCreate: (
      query: {
        /**
         * @minLength 0
         * @maxLength 256
         */
        Title: string;
        /**
         * @minLength 0
         * @maxLength 4000
         */
        Description?: string;
        /** @format uuid */
        BrandId: string;
        /** @format uuid */
        CategoryId: string;
        /**
         * @format double
         * @min 0
         * @max 999999999
         */
        CurrentPrice?: number;
        /**
         * @format double
         * @min 0
         * @max 999999999
         */
        OriginalPrice?: number;
      },
      data: {
        /** @format binary */
        PrimaryImage?: File;
        Images?: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/Admin/Products/Create`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthRegisterCreate
     * @request POST:/api/auth/register
     * @secure
     */
    authRegisterCreate: (
      data: RegisterRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<AuthResponseDto, any>({
        path: `/api/auth/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthLoginCreate
     * @request POST:/api/auth/login
     * @secure
     */
    authLoginCreate: (data: LoginRequestDto, params: RequestParams = {}) =>
      this.request<AuthResponseDto, any>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthRefreshCreate
     * @request POST:/api/auth/refresh
     * @secure
     */
    authRefreshCreate: (data: RefreshRequestDto, params: RequestParams = {}) =>
      this.request<AuthResponseDto, any>({
        path: `/api/auth/refresh`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthMeList
     * @request GET:/api/auth/me
     * @secure
     */
    authMeList: (params: RequestParams = {}) =>
      this.request<MeResponseDto, any>({
        path: `/api/auth/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Home
     * @name HomeList
     * @request GET:/api/home
     * @secure
     */
    homeList: (
      query?: {
        /**
         * @format int32
         * @default 20
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<HomeResponseDto, any>({
        path: `/api/home`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsDetail
     * @request GET:/api/products/{id}
     * @secure
     */
    productsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ProductDetailsDto, any>({
        path: `/api/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsList
     * @request GET:/api/products
     * @secure
     */
    productsList: (
      query?: {
        /** @format uuid */
        CategoryId?: string;
        BrandIds?: string[];
        /**
         * @format double
         * @min 0
         * @max 999999999
         */
        MaxPrice?: number;
        /**
         * @format double
         * @min 0
         * @max 999999999
         */
        MinPrice?: number;
        /**
         * @format double
         * @min 0
         * @max 5
         */
        MinRating?: number;
        Sort?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Page?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductCardDtoPagedResult, any>({
        path: `/api/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsBrandsList
     * @request GET:/api/products/brands
     * @secure
     */
    productsBrandsList: (
      query?: {
        /** @format uuid */
        categoryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BrandDto[], any>({
        path: `/api/products/brands`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}

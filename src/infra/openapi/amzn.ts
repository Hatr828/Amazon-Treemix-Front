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

/** @format int32 */
export enum UserRole {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum OrderStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface AuthResponseDto {
  accessToken?: string | null;
  /** @format int32 */
  expiresInSeconds?: number;
  refreshToken?: string | null;
  tokenType?: string | null;
  user?: UserResponseDto;
}

export interface Brand {
  /** @format uuid */
  id?: string;
  name?: string | null;
  products?: Product[] | null;
}

export interface BrandDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface Cart {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string;
  user?: User;
  items?: CartItem[] | null;
}

export interface CartItem {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  cartId?: string;
  /** @format uuid */
  productId?: string;
  /** @format int32 */
  quantity?: number;
  cart?: Cart;
  product?: Product;
}

export interface CartResponseDto {
  cart?: Cart;
  products?: Product[] | null;
}

export interface Category {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  parentId?: string | null;
  name?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  products?: Product[] | null;
}

export interface CategoryDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface CategoryListItemDto {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  parentId?: string | null;
  name?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  hasChildren?: boolean;
}

export interface DeliveryAddress {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  state?: string | null;
  phoneNumber?: string | null;
  isDefault?: boolean;
  user?: User;
}

export interface DeliveryAddressRequestDto {
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
   * @minLength 1
   * @pattern ^[\w\s\d.,\-\/]{5,100}$
   */
  streetAddress: string;
  /**
   * @minLength 2
   * @maxLength 32
   * @pattern ^[\p{L}][\p{L}\s.'-]*[\p{L}]$
   */
  city: string;
  /**
   * @minLength 2
   * @maxLength 10
   */
  postalCode: string;
  /**
   * @minLength 1
   * @pattern ^[\p{L}][\p{L}\s.'()-]{1,60}[\p{L}.]$
   */
  country: string;
  /** @pattern ^[\p{L}0-9\s.'-]{2,32}$ */
  state?: string | null;
  /**
   * @minLength 1
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phoneNumber: string;
  isDefault?: boolean;
}

export interface DeliveryAddressResponseDto {
  /** @format uuid */
  id?: string;
  isDefault?: boolean;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  postalCode?: string | null;
  country?: string | null;
  phoneNumber?: string | null;
}

export interface HomeCategoryBlockDto {
  /** @format uuid */
  categoryId?: string;
  categoryName?: string | null;
  products?: ProductCardDto[] | null;
}

export interface HomeCategoryCardDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  imageUrl?: string | null;
}

export interface HomeResponseDto {
  topCategories?: HomeCategoryCardDto[] | null;
  categoryBlocks?: HomeCategoryBlockDto[] | null;
  popularProducts?: ProductCardDto[] | null;
  popularCategories?: HomeCategoryCardDto[] | null;
  productsUnderTwenty?: ProductCardDto[] | null;
  moreProducts?: ProductCardDto[] | null;
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

export interface Order {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  cartId?: string;
  /** @format int32 */
  quantity?: number;
  /** @format double */
  totalAmount?: number;
  status?: OrderStatus;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  confirmedAt?: string | null;
  /** @format date-time */
  canceledAt?: string | null;
  user?: User;
  cart?: Cart;
}

export interface PaymentMethod {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string;
  cardNumber?: string | null;
  /** @format date */
  expirationDate?: string;
  isDefault?: boolean;
  user?: User;
}

export interface PaymentMethodRequestDto {
  /**
   * @minLength 1
   * @pattern ^\d{13,19}?$
   */
  cardNumber: string;
  /**
   * @minLength 1
   * @pattern ^\d{3,4}$
   */
  cvv: string;
  /** @format date */
  expirationDate: string;
  isDefault?: boolean;
}

export interface PaymentMethodResponseDto {
  /** @format uuid */
  id?: string;
  isDefault?: boolean;
  holderFirstName?: string | null;
  holderLastName?: string | null;
  cardNumber?: string | null;
  /** @format date */
  expirationDate?: string;
}

export interface PriceDto {
  /** @format double */
  current?: number;
  /** @format double */
  original?: number;
}

export interface Product {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  categoryId?: string;
  title?: string | null;
  description?: string | null;
  /** @format int32 */
  stockQuantity?: number;
  /** @format double */
  currentPrice?: number;
  /** @format double */
  originalPrice?: number | null;
  primaryImageUrl?: string | null;
  /** @format int32 */
  ratingSum?: number;
  /** @format int32 */
  ratingCount?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format uuid */
  sellerId?: string;
  seller?: User;
  category?: Category;
  images?: ProductImage[] | null;
  ratings?: ProductRating[] | null;
  reviews?: ProductReview[] | null;
  questions?: ProductQuestion[] | null;
  /** @format uuid */
  brandId?: string;
  brand?: Brand;
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
  /** @format int32 */
  stockQuantity?: number;
  isInStock?: boolean;
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

export interface ProductImage {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  productId?: string;
  url?: string | null;
  /** @format int32 */
  sortOrder?: number;
  product?: Product;
}

export interface ProductQuestion {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  productId?: string;
  /** @format uuid */
  userId?: string;
  text?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  product?: Product;
  user?: User;
  answers?: ProductQuestionAnswer[] | null;
}

export interface ProductQuestionAnswer {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  questionId?: string;
  /** @format uuid */
  userId?: string;
  text?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  question?: ProductQuestion;
  user?: User;
}

export interface ProductQuestionAnswerDto {
  /** @format uuid */
  id?: string;
  text?: string | null;
  authorName?: string | null;
  isSellerAnswer?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface ProductQuestionAnswerDtoPagedResult {
  items?: ProductQuestionAnswerDto[] | null;
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

export interface ProductQuestionAnswerRequestDto {
  /**
   * @minLength 5
   * @maxLength 2048
   */
  text: string;
}

export interface ProductQuestionDto {
  /** @format uuid */
  id?: string;
  text?: string | null;
  authorName?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format int32 */
  answersCount?: number;
  previewAnswers?: ProductQuestionAnswerDto[] | null;
}

export interface ProductQuestionDtoPagedResult {
  items?: ProductQuestionDto[] | null;
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

export interface ProductQuestionRequestDto {
  /**
   * @minLength 5
   * @maxLength 1024
   */
  text: string;
}

export interface ProductRating {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  productId?: string;
  /** @format uuid */
  userId?: string;
  /** @format int32 */
  value?: number;
  product?: Product;
  user?: User;
}

export interface ProductRatingResponseDto {
  /** @format double */
  averageRating?: number;
  /** @format int32 */
  ratingsCount?: number;
  /** @format int32 */
  userRating?: number;
}

export interface ProductReview {
  /** @format uuid */
  id?: string;
  title?: string | null;
  text?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format uuid */
  userId?: string;
  user?: User;
  /** @format uuid */
  productId?: string;
  product?: Product;
}

export interface ProfileUpdateRequestDto {
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
   * @minLength 0
   * @maxLength 15
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phoneNumber?: string | null;
  /** @format date */
  birthDate?: string | null;
}

export interface ProfileUpdateResponseDto {
  /** @format uuid */
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  role?: string | null;
  phoneNumber?: string | null;
  /** @format date */
  birthDate?: string | null;
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

export interface ReviewDto {
  /** @format uuid */
  id?: string;
  /** @format int32 */
  rating?: number;
  title?: string | null;
  text?: string | null;
  authorName?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface ReviewDtoPagedResult {
  items?: ReviewDto[] | null;
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

export interface ReviewRequestDto {
  /**
   * @format int32
   * @min 1
   * @max 5
   */
  rating?: number;
  /**
   * @minLength 1
   * @maxLength 120
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 4000
   */
  text: string;
}

export interface SearchProductSuggestionDto {
  /** @format uuid */
  id?: string;
  title?: string | null;
  price?: PriceDto;
  image?: ImageUrlDto;
  brandName?: string | null;
  categoryName?: string | null;
}

export interface SearchSuggestionsResponseDto {
  products?: SearchProductSuggestionDto[] | null;
  categories?: CategoryDto[] | null;
  brands?: BrandDto[] | null;
}

export interface SetProductRatingRequestDto {
  /**
   * @format int32
   * @min 1
   * @max 5
   */
  rating?: number;
}

export interface User {
  /** @format uuid */
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  role?: UserRole;
  /** @format date */
  birthDate?: string | null;
  /** @format date-time */
  createdAt?: string;
  refreshTokens?: UserRefreshToken[] | null;
  products?: Product[] | null;
  paymentMethods?: PaymentMethod[] | null;
  deliveryAddresses?: DeliveryAddress[] | null;
  orders?: Order[] | null;
}

export interface UserRefreshToken {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string;
  tokenHash?: string | null;
  /** @format date-time */
  expiresAt?: string;
  isRevoked?: boolean;
  user?: User;
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
         * @maxLength 64
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
     * @request POST:/Admin/Brands/Delete/{id}
     * @secure
     */
    brandsDeleteCreate: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Admin/Brands/Delete/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminProducts
     * @name ProductsList
     * @request GET:/Admin/Products
     * @secure
     */
    productsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Admin/Products`,
        method: "GET",
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
        /**
         * @format int32
         * @min 0
         * @max 2147483647
         */
        StockQuantity?: number;
        /** @format uuid */
        BrandId: string;
        /** @format uuid */
        CategoryId: string;
        /**
         * @format double
         * @min 1
         * @max 999999999
         */
        CurrentPrice?: number;
        /**
         * @format double
         * @min 1
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

    /**
     * No description
     *
     * @tags AdminProducts
     * @name ProductsEditDetail
     * @request GET:/Admin/Products/Edit/{id}
     * @secure
     */
    productsEditDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Admin/Products/Edit/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminProducts
     * @name ProductsEditCreate
     * @request POST:/Admin/Products/Edit/{id}
     * @secure
     */
    productsEditCreate: (
      id: string,
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
        /**
         * @format int32
         * @min 0
         * @max 2147483647
         */
        StockQuantity?: number;
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
        ExistingGalleryImageIdsInOrder?: string[];
      },
      data: {
        /** @format binary */
        NewPrimaryImage?: File;
        NewGalleryImages?: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/Admin/Products/Edit/${id}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdminProducts
     * @name ProductsDeleteCreate
     * @request POST:/Admin/Products/Delete/{id}
     * @secure
     */
    productsDeleteCreate: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Admin/Products/Delete/${id}`,
        method: "POST",
        secure: true,
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
     * @tags Cart
     * @name CartAddCreate
     * @request POST:/api/cart/add
     * @secure
     */
    cartAddCreate: (productId: string, params: RequestParams = {}) =>
      this.request<CartResponseDto, any>({
        path: `/api/cart/add`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartRemoveCreate
     * @request POST:/api/cart/remove
     * @secure
     */
    cartRemoveCreate: (productId: string, params: RequestParams = {}) =>
      this.request<CartResponseDto, any>({
        path: `/api/cart/remove`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartClearCreate
     * @request POST:/api/cart/clear
     * @secure
     */
    cartClearCreate: (params: RequestParams = {}) =>
      this.request<CartResponseDto, any>({
        path: `/api/cart/clear`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartGetCreate
     * @request POST:/api/cart/get
     * @secure
     */
    cartGetCreate: (params: RequestParams = {}) =>
      this.request<CartResponseDto, any>({
        path: `/api/cart/get`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartIncreaseQuantityCreate
     * @request POST:/api/cart/increaseQuantity
     * @secure
     */
    cartIncreaseQuantityCreate: (
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<CartResponseDto, any>({
        path: `/api/cart/increaseQuantity`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartDecreaseQuantityCreate
     * @request POST:/api/cart/decreaseQuantity
     * @secure
     */
    cartDecreaseQuantityCreate: (
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<CartResponseDto, any>({
        path: `/api/cart/decreaseQuantity`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesRootList
     * @request GET:/api/categories/root
     * @secure
     */
    categoriesRootList: (params: RequestParams = {}) =>
      this.request<CategoryListItemDto[], any>({
        path: `/api/categories/root`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesList
     * @request GET:/api/categories
     * @secure
     */
    categoriesList: (
      query?: {
        /** @format uuid */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryListItemDto[], any>({
        path: `/api/categories`,
        method: "GET",
        query: query,
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
    homeList: (params: RequestParams = {}) =>
      this.request<HomeResponseDto, any>({
        path: `/api/home`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Home
     * @name HomeLastViewedList
     * @request GET:/api/home/last-viewed
     * @secure
     */
    homeLastViewedList: (
      query?: {
        ProductIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductCardDto[], any>({
        path: `/api/home/last-viewed`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductQuestions
     * @name ProductsQuestionsList
     * @request GET:/api/products/{productId}/questions
     * @secure
     */
    productsQuestionsList: (
      productId: string,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Page?: number;
        /**
         * @format int32
         * @min 1
         * @max 50
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductQuestionDtoPagedResult, any>({
        path: `/api/products/${productId}/questions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductQuestions
     * @name ProductsQuestionsCreate
     * @request POST:/api/products/{productId}/questions
     * @secure
     */
    productsQuestionsCreate: (
      productId: string,
      data: ProductQuestionRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProductQuestionDto, any>({
        path: `/api/products/${productId}/questions`,
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
     * @tags ProductQuestions
     * @name ProductsQuestionsAnswersList
     * @request GET:/api/products/{productId}/questions/{questionId}/answers
     * @secure
     */
    productsQuestionsAnswersList: (
      productId: string,
      questionId: string,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Page?: number;
        /**
         * @format int32
         * @min 1
         * @max 50
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductQuestionAnswerDtoPagedResult, any>({
        path: `/api/products/${productId}/questions/${questionId}/answers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductQuestions
     * @name ProductsQuestionsAnswersCreate
     * @request POST:/api/products/{productId}/questions/{questionId}/answers
     * @secure
     */
    productsQuestionsAnswersCreate: (
      productId: string,
      questionId: string,
      data: ProductQuestionAnswerRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProductQuestionAnswerDto, any>({
        path: `/api/products/${productId}/questions/${questionId}/answers`,
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
         * @minLength 0
         * @maxLength 100
         */
        Search?: string;
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

    /**
     * No description
     *
     * @tags Products
     * @name ProductsRatingUpdate
     * @request PUT:/api/products/{productId}/rating
     * @secure
     */
    productsRatingUpdate: (
      productId: string,
      data: SetProductRatingRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProductRatingResponseDto, any>({
        path: `/api/products/${productId}/rating`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsReviewsList
     * @request GET:/api/products/{productId}/reviews
     * @secure
     */
    productsReviewsList: (
      productId: string,
      query?: {
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
         * @max 50
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewDtoPagedResult, any>({
        path: `/api/products/${productId}/reviews`,
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
     * @name ProductsReviewUpdate
     * @request PUT:/api/products/{productId}/review
     * @secure
     */
    productsReviewUpdate: (
      productId: string,
      data: ReviewRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ReviewDto, any>({
        path: `/api/products/${productId}/review`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name SearchSuggestionsList
     * @request GET:/api/search/suggestions
     * @secure
     */
    searchSuggestionsList: (
      query?: {
        /**
         * @minLength 0
         * @maxLength 100
         */
        q?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchSuggestionsResponseDto, any>({
        path: `/api/search/suggestions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserUpdateCreate
     * @request POST:/api/user/update
     * @secure
     */
    userUpdateCreate: (
      data: ProfileUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProfileUpdateResponseDto, any>({
        path: `/api/user/update`,
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
     * @tags UserAccount
     * @name UserDeleteCreate
     * @request POST:/api/user/delete
     * @secure
     */
    userDeleteCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/user/delete`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAddPaymentMethodCreate
     * @request POST:/api/user/addPaymentMethod
     * @secure
     */
    userAddPaymentMethodCreate: (
      data: PaymentMethodRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<PaymentMethodResponseDto, any>({
        path: `/api/user/addPaymentMethod`,
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
     * @tags UserAccount
     * @name UserGetPaymentMethodsCreate
     * @request POST:/api/user/getPaymentMethods
     * @secure
     */
    userGetPaymentMethodsCreate: (params: RequestParams = {}) =>
      this.request<PaymentMethodResponseDto[], any>({
        path: `/api/user/getPaymentMethods`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAddDeliveryAddressCreate
     * @request POST:/api/user/addDeliveryAddress
     * @secure
     */
    userAddDeliveryAddressCreate: (
      data: DeliveryAddressRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<DeliveryAddressResponseDto, any>({
        path: `/api/user/addDeliveryAddress`,
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
     * @tags UserAccount
     * @name UserGetDeliveryAddressesCreate
     * @request POST:/api/user/getDeliveryAddresses
     * @secure
     */
    userGetDeliveryAddressesCreate: (params: RequestParams = {}) =>
      this.request<DeliveryAddressResponseDto[], any>({
        path: `/api/user/getDeliveryAddresses`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
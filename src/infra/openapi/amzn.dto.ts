import type { components } from "./amzn";

export type AuthResponseDto = components["schemas"]["AuthResponseDto"];
export type LoginRequestDto = components["schemas"]["LoginRequestDto"];
export type RegisterRequestDto = components["schemas"]["RegisterRequestDto"];
export type RefreshRequestDto = components["schemas"]["RefreshRequestDto"];

// Home

export type HomeResponseDto = components["schemas"]["HomeResponseDto"];
export type HomeProductDto = components["schemas"]["HomeProductDto"];

// Catalog/Filters

export type ProductDto = components["schemas"]["ProductDto"];
export type ProductDetailsDto = components["schemas"]["ProductDetailsDto"];
export type BrandDto = components["schemas"]["BrandDto"];
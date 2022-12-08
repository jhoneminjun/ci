import type { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from 'openapi-types';
/**
 * Retrieve the Swagger or OpenAPI version that a given Swagger or OpenAPI definition are targeting.
 *
 */
export declare function version(schema: OpenAPIV2.Document & OpenAPIV3.Document & OpenAPIV3_1.Document): string;
/**
 * Determine if a given variable is a `Buffer`.
 *
 */
export declare function isBuffer(obj: any): any;
/**
 * Convert a YAML blob or stringified JSON object into a JSON object.
 *
 */
export declare function stringToJSON(string: string | Record<string, unknown>): any;
/**
 * Determine the type of a given variable. Returns `false` if unrecognized.
 *
 */
export declare function getType(obj: any): false | "path" | "json" | "buffer" | "string-json" | "string-yaml" | "url";

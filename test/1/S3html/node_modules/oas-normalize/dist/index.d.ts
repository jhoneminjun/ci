import type { OpenAPI } from 'openapi-types';
export declare type Options = {
    colorizeErrors?: boolean;
    enablePaths?: boolean;
};
export default class OASNormalize {
    cache: {
        bundle?: false | OpenAPI.Document;
        deref?: false | OpenAPI.Document;
        load?: false | Record<string, unknown>;
    };
    file: any;
    opts: Options;
    type: boolean | string;
    constructor(file: any, opts?: Options);
    load(): Promise<any>;
    /**
     * Bundle up the given OpenAPI or Swagger definition, resolving any external `$ref` pointers in
     * the process.
     *
     */
    bundle(): Promise<import("openapi-types").OpenAPIV2.Document<{}> | import("openapi-types").OpenAPIV3.Document<{}> | (Omit<Omit<import("openapi-types").OpenAPIV3.Document<{}>, "paths" | "components">, "paths" | "components" | "info" | "servers" | "webhooks" | "jsonSchemaDialect"> & {
        info: import("openapi-types").OpenAPIV3_1.InfoObject;
        jsonSchemaDialect?: string;
        servers?: import("openapi-types").OpenAPIV3_1.ServerObject[];
    } & Pick<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }, "paths"> & Omit<Partial<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }>, "paths">) | (Omit<Omit<import("openapi-types").OpenAPIV3.Document<{}>, "paths" | "components">, "paths" | "components" | "info" | "servers" | "webhooks" | "jsonSchemaDialect"> & {
        info: import("openapi-types").OpenAPIV3_1.InfoObject;
        jsonSchemaDialect?: string;
        servers?: import("openapi-types").OpenAPIV3_1.ServerObject[];
    } & Pick<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }, "webhooks"> & Omit<Partial<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }>, "webhooks">) | (Omit<Omit<import("openapi-types").OpenAPIV3.Document<{}>, "paths" | "components">, "paths" | "components" | "info" | "servers" | "webhooks" | "jsonSchemaDialect"> & {
        info: import("openapi-types").OpenAPIV3_1.InfoObject;
        jsonSchemaDialect?: string;
        servers?: import("openapi-types").OpenAPIV3_1.ServerObject[];
    } & Pick<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }, "components"> & Omit<Partial<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }>, "components">)>;
    /**
     * Dereference the given OpenAPI or Swagger.
     *
     */
    deref(): Promise<import("openapi-types").OpenAPIV2.Document<{}> | import("openapi-types").OpenAPIV3.Document<{}> | (Omit<Omit<import("openapi-types").OpenAPIV3.Document<{}>, "paths" | "components">, "paths" | "components" | "info" | "servers" | "webhooks" | "jsonSchemaDialect"> & {
        info: import("openapi-types").OpenAPIV3_1.InfoObject;
        jsonSchemaDialect?: string;
        servers?: import("openapi-types").OpenAPIV3_1.ServerObject[];
    } & Pick<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }, "paths"> & Omit<Partial<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }>, "paths">) | (Omit<Omit<import("openapi-types").OpenAPIV3.Document<{}>, "paths" | "components">, "paths" | "components" | "info" | "servers" | "webhooks" | "jsonSchemaDialect"> & {
        info: import("openapi-types").OpenAPIV3_1.InfoObject;
        jsonSchemaDialect?: string;
        servers?: import("openapi-types").OpenAPIV3_1.ServerObject[];
    } & Pick<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }, "webhooks"> & Omit<Partial<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }>, "webhooks">) | (Omit<Omit<import("openapi-types").OpenAPIV3.Document<{}>, "paths" | "components">, "paths" | "components" | "info" | "servers" | "webhooks" | "jsonSchemaDialect"> & {
        info: import("openapi-types").OpenAPIV3_1.InfoObject;
        jsonSchemaDialect?: string;
        servers?: import("openapi-types").OpenAPIV3_1.ServerObject[];
    } & Pick<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }, "components"> & Omit<Partial<{
        paths: import("openapi-types").OpenAPIV3_1.PathsObject<{}, {}>;
        webhooks: Record<string, import("openapi-types").OpenAPIV3_1.ReferenceObject | import("openapi-types").OpenAPIV3_1.PathItemObject<{}>>;
        components: import("openapi-types").OpenAPIV3_1.ComponentsObject;
    }>, "components">)>;
    /**
     * Validate a given OpenAPI or Swagger definition, potentially upconverting it from Swagger to
     * OpenAPI in the process if you wish.
     *
     */
    validate(convertToLatest?: boolean): Promise<any>;
    /**
     * Retrieve the OpenAPI or Swagger version of the current API definition.
     *
     */
    version(): Promise<string>;
}

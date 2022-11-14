import { FastifyCorsOptions } from "@fastify/cors";

declare module "@zoeldevapps/fastify-cors-envregex" {
  /**
   * Converts an origin list with some patterns to a format supported by fastify cors
   *
   * @param enabledFor comma separted list of origins with optional `*` patterns
   * @param isProd if false (=development mode) the cors is set to more permissive
   */
  export function expandAllowedOrigins(
    enabledFor: string,
    isProd: boolean = true
  ): FastifyCorsOptions;
}


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model VideoPost
 * 
 */
export type VideoPost = $Result.DefaultSelection<Prisma.$VideoPostPayload>
/**
 * Model TextPost
 * 
 */
export type TextPost = $Result.DefaultSelection<Prisma.$TextPostPayload>
/**
 * Model QuotePost
 * 
 */
export type QuotePost = $Result.DefaultSelection<Prisma.$QuotePostPayload>
/**
 * Model LinkPost
 * 
 */
export type LinkPost = $Result.DefaultSelection<Prisma.$LinkPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VideoPosts
 * const videoPosts = await prisma.videoPost.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more VideoPosts
   * const videoPosts = await prisma.videoPost.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.videoPost`: Exposes CRUD operations for the **VideoPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoPosts
    * const videoPosts = await prisma.videoPost.findMany()
    * ```
    */
  get videoPost(): Prisma.VideoPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textPost`: Exposes CRUD operations for the **TextPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextPosts
    * const textPosts = await prisma.textPost.findMany()
    * ```
    */
  get textPost(): Prisma.TextPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotePost`: Exposes CRUD operations for the **QuotePost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotePosts
    * const quotePosts = await prisma.quotePost.findMany()
    * ```
    */
  get quotePost(): Prisma.QuotePostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkPost`: Exposes CRUD operations for the **LinkPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkPosts
    * const linkPosts = await prisma.linkPost.findMany()
    * ```
    */
  get linkPost(): Prisma.LinkPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    VideoPost: 'VideoPost',
    TextPost: 'TextPost',
    QuotePost: 'QuotePost',
    LinkPost: 'LinkPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "videoPost" | "textPost" | "quotePost" | "linkPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VideoPost: {
        payload: Prisma.$VideoPostPayload<ExtArgs>
        fields: Prisma.VideoPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>
          }
          findFirst: {
            args: Prisma.VideoPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>
          }
          findMany: {
            args: Prisma.VideoPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>[]
          }
          create: {
            args: Prisma.VideoPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>
          }
          createMany: {
            args: Prisma.VideoPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>[]
          }
          delete: {
            args: Prisma.VideoPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>
          }
          update: {
            args: Prisma.VideoPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>
          }
          deleteMany: {
            args: Prisma.VideoPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>[]
          }
          upsert: {
            args: Prisma.VideoPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPostPayload>
          }
          aggregate: {
            args: Prisma.VideoPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoPost>
          }
          groupBy: {
            args: Prisma.VideoPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoPostCountArgs<ExtArgs>
            result: $Utils.Optional<VideoPostCountAggregateOutputType> | number
          }
        }
      }
      TextPost: {
        payload: Prisma.$TextPostPayload<ExtArgs>
        fields: Prisma.TextPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>
          }
          findFirst: {
            args: Prisma.TextPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>
          }
          findMany: {
            args: Prisma.TextPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>[]
          }
          create: {
            args: Prisma.TextPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>
          }
          createMany: {
            args: Prisma.TextPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>[]
          }
          delete: {
            args: Prisma.TextPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>
          }
          update: {
            args: Prisma.TextPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>
          }
          deleteMany: {
            args: Prisma.TextPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>[]
          }
          upsert: {
            args: Prisma.TextPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPostPayload>
          }
          aggregate: {
            args: Prisma.TextPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextPost>
          }
          groupBy: {
            args: Prisma.TextPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextPostCountArgs<ExtArgs>
            result: $Utils.Optional<TextPostCountAggregateOutputType> | number
          }
        }
      }
      QuotePost: {
        payload: Prisma.$QuotePostPayload<ExtArgs>
        fields: Prisma.QuotePostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotePostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotePostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          findFirst: {
            args: Prisma.QuotePostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotePostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          findMany: {
            args: Prisma.QuotePostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>[]
          }
          create: {
            args: Prisma.QuotePostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          createMany: {
            args: Prisma.QuotePostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotePostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>[]
          }
          delete: {
            args: Prisma.QuotePostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          update: {
            args: Prisma.QuotePostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          deleteMany: {
            args: Prisma.QuotePostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotePostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuotePostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>[]
          }
          upsert: {
            args: Prisma.QuotePostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          aggregate: {
            args: Prisma.QuotePostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotePost>
          }
          groupBy: {
            args: Prisma.QuotePostGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotePostGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotePostCountArgs<ExtArgs>
            result: $Utils.Optional<QuotePostCountAggregateOutputType> | number
          }
        }
      }
      LinkPost: {
        payload: Prisma.$LinkPostPayload<ExtArgs>
        fields: Prisma.LinkPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>
          }
          findFirst: {
            args: Prisma.LinkPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>
          }
          findMany: {
            args: Prisma.LinkPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>[]
          }
          create: {
            args: Prisma.LinkPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>
          }
          createMany: {
            args: Prisma.LinkPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>[]
          }
          delete: {
            args: Prisma.LinkPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>
          }
          update: {
            args: Prisma.LinkPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>
          }
          deleteMany: {
            args: Prisma.LinkPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>[]
          }
          upsert: {
            args: Prisma.LinkPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPostPayload>
          }
          aggregate: {
            args: Prisma.LinkPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkPost>
          }
          groupBy: {
            args: Prisma.LinkPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkPostCountArgs<ExtArgs>
            result: $Utils.Optional<LinkPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    videoPost?: VideoPostOmit
    textPost?: TextPostOmit
    quotePost?: QuotePostOmit
    linkPost?: LinkPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model VideoPost
   */

  export type AggregateVideoPost = {
    _count: VideoPostCountAggregateOutputType | null
    _avg: VideoPostAvgAggregateOutputType | null
    _sum: VideoPostSumAggregateOutputType | null
    _min: VideoPostMinAggregateOutputType | null
    _max: VideoPostMaxAggregateOutputType | null
  }

  export type VideoPostAvgAggregateOutputType = {
    id: number | null
  }

  export type VideoPostSumAggregateOutputType = {
    id: number | null
  }

  export type VideoPostMinAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
  }

  export type VideoPostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
  }

  export type VideoPostCountAggregateOutputType = {
    id: number
    name: number
    link: number
    tags: number
    _all: number
  }


  export type VideoPostAvgAggregateInputType = {
    id?: true
  }

  export type VideoPostSumAggregateInputType = {
    id?: true
  }

  export type VideoPostMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
  }

  export type VideoPostMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
  }

  export type VideoPostCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    tags?: true
    _all?: true
  }

  export type VideoPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoPost to aggregate.
     */
    where?: VideoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPosts to fetch.
     */
    orderBy?: VideoPostOrderByWithRelationInput | VideoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoPosts
    **/
    _count?: true | VideoPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoPostMaxAggregateInputType
  }

  export type GetVideoPostAggregateType<T extends VideoPostAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoPost[P]>
      : GetScalarType<T[P], AggregateVideoPost[P]>
  }




  export type VideoPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoPostWhereInput
    orderBy?: VideoPostOrderByWithAggregationInput | VideoPostOrderByWithAggregationInput[]
    by: VideoPostScalarFieldEnum[] | VideoPostScalarFieldEnum
    having?: VideoPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoPostCountAggregateInputType | true
    _avg?: VideoPostAvgAggregateInputType
    _sum?: VideoPostSumAggregateInputType
    _min?: VideoPostMinAggregateInputType
    _max?: VideoPostMaxAggregateInputType
  }

  export type VideoPostGroupByOutputType = {
    id: number
    name: string
    link: string
    tags: string[]
    _count: VideoPostCountAggregateOutputType | null
    _avg: VideoPostAvgAggregateOutputType | null
    _sum: VideoPostSumAggregateOutputType | null
    _min: VideoPostMinAggregateOutputType | null
    _max: VideoPostMaxAggregateOutputType | null
  }

  type GetVideoPostGroupByPayload<T extends VideoPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoPostGroupByOutputType[P]>
            : GetScalarType<T[P], VideoPostGroupByOutputType[P]>
        }
      >
    >


  export type VideoPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    tags?: boolean
  }, ExtArgs["result"]["videoPost"]>

  export type VideoPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    tags?: boolean
  }, ExtArgs["result"]["videoPost"]>

  export type VideoPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    tags?: boolean
  }, ExtArgs["result"]["videoPost"]>

  export type VideoPostSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    tags?: boolean
  }

  export type VideoPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "tags", ExtArgs["result"]["videoPost"]>

  export type $VideoPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      link: string
      tags: string[]
    }, ExtArgs["result"]["videoPost"]>
    composites: {}
  }

  type VideoPostGetPayload<S extends boolean | null | undefined | VideoPostDefaultArgs> = $Result.GetResult<Prisma.$VideoPostPayload, S>

  type VideoPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoPostCountAggregateInputType | true
    }

  export interface VideoPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoPost'], meta: { name: 'VideoPost' } }
    /**
     * Find zero or one VideoPost that matches the filter.
     * @param {VideoPostFindUniqueArgs} args - Arguments to find a VideoPost
     * @example
     * // Get one VideoPost
     * const videoPost = await prisma.videoPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoPostFindUniqueArgs>(args: SelectSubset<T, VideoPostFindUniqueArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoPostFindUniqueOrThrowArgs} args - Arguments to find a VideoPost
     * @example
     * // Get one VideoPost
     * const videoPost = await prisma.videoPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoPostFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPostFindFirstArgs} args - Arguments to find a VideoPost
     * @example
     * // Get one VideoPost
     * const videoPost = await prisma.videoPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoPostFindFirstArgs>(args?: SelectSubset<T, VideoPostFindFirstArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPostFindFirstOrThrowArgs} args - Arguments to find a VideoPost
     * @example
     * // Get one VideoPost
     * const videoPost = await prisma.videoPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoPostFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoPosts
     * const videoPosts = await prisma.videoPost.findMany()
     * 
     * // Get first 10 VideoPosts
     * const videoPosts = await prisma.videoPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoPostWithIdOnly = await prisma.videoPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoPostFindManyArgs>(args?: SelectSubset<T, VideoPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoPost.
     * @param {VideoPostCreateArgs} args - Arguments to create a VideoPost.
     * @example
     * // Create one VideoPost
     * const VideoPost = await prisma.videoPost.create({
     *   data: {
     *     // ... data to create a VideoPost
     *   }
     * })
     * 
     */
    create<T extends VideoPostCreateArgs>(args: SelectSubset<T, VideoPostCreateArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoPosts.
     * @param {VideoPostCreateManyArgs} args - Arguments to create many VideoPosts.
     * @example
     * // Create many VideoPosts
     * const videoPost = await prisma.videoPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoPostCreateManyArgs>(args?: SelectSubset<T, VideoPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoPosts and returns the data saved in the database.
     * @param {VideoPostCreateManyAndReturnArgs} args - Arguments to create many VideoPosts.
     * @example
     * // Create many VideoPosts
     * const videoPost = await prisma.videoPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoPosts and only return the `id`
     * const videoPostWithIdOnly = await prisma.videoPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoPostCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoPost.
     * @param {VideoPostDeleteArgs} args - Arguments to delete one VideoPost.
     * @example
     * // Delete one VideoPost
     * const VideoPost = await prisma.videoPost.delete({
     *   where: {
     *     // ... filter to delete one VideoPost
     *   }
     * })
     * 
     */
    delete<T extends VideoPostDeleteArgs>(args: SelectSubset<T, VideoPostDeleteArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoPost.
     * @param {VideoPostUpdateArgs} args - Arguments to update one VideoPost.
     * @example
     * // Update one VideoPost
     * const videoPost = await prisma.videoPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoPostUpdateArgs>(args: SelectSubset<T, VideoPostUpdateArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoPosts.
     * @param {VideoPostDeleteManyArgs} args - Arguments to filter VideoPosts to delete.
     * @example
     * // Delete a few VideoPosts
     * const { count } = await prisma.videoPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoPostDeleteManyArgs>(args?: SelectSubset<T, VideoPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoPosts
     * const videoPost = await prisma.videoPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoPostUpdateManyArgs>(args: SelectSubset<T, VideoPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoPosts and returns the data updated in the database.
     * @param {VideoPostUpdateManyAndReturnArgs} args - Arguments to update many VideoPosts.
     * @example
     * // Update many VideoPosts
     * const videoPost = await prisma.videoPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoPosts and only return the `id`
     * const videoPostWithIdOnly = await prisma.videoPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoPostUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoPost.
     * @param {VideoPostUpsertArgs} args - Arguments to update or create a VideoPost.
     * @example
     * // Update or create a VideoPost
     * const videoPost = await prisma.videoPost.upsert({
     *   create: {
     *     // ... data to create a VideoPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoPost we want to update
     *   }
     * })
     */
    upsert<T extends VideoPostUpsertArgs>(args: SelectSubset<T, VideoPostUpsertArgs<ExtArgs>>): Prisma__VideoPostClient<$Result.GetResult<Prisma.$VideoPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPostCountArgs} args - Arguments to filter VideoPosts to count.
     * @example
     * // Count the number of VideoPosts
     * const count = await prisma.videoPost.count({
     *   where: {
     *     // ... the filter for the VideoPosts we want to count
     *   }
     * })
    **/
    count<T extends VideoPostCountArgs>(
      args?: Subset<T, VideoPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoPostAggregateArgs>(args: Subset<T, VideoPostAggregateArgs>): Prisma.PrismaPromise<GetVideoPostAggregateType<T>>

    /**
     * Group by VideoPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoPostGroupByArgs['orderBy'] }
        : { orderBy?: VideoPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoPost model
   */
  readonly fields: VideoPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VideoPost model
   */
  interface VideoPostFieldRefs {
    readonly id: FieldRef<"VideoPost", 'Int'>
    readonly name: FieldRef<"VideoPost", 'String'>
    readonly link: FieldRef<"VideoPost", 'String'>
    readonly tags: FieldRef<"VideoPost", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * VideoPost findUnique
   */
  export type VideoPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * Filter, which VideoPost to fetch.
     */
    where: VideoPostWhereUniqueInput
  }

  /**
   * VideoPost findUniqueOrThrow
   */
  export type VideoPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * Filter, which VideoPost to fetch.
     */
    where: VideoPostWhereUniqueInput
  }

  /**
   * VideoPost findFirst
   */
  export type VideoPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * Filter, which VideoPost to fetch.
     */
    where?: VideoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPosts to fetch.
     */
    orderBy?: VideoPostOrderByWithRelationInput | VideoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoPosts.
     */
    cursor?: VideoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoPosts.
     */
    distinct?: VideoPostScalarFieldEnum | VideoPostScalarFieldEnum[]
  }

  /**
   * VideoPost findFirstOrThrow
   */
  export type VideoPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * Filter, which VideoPost to fetch.
     */
    where?: VideoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPosts to fetch.
     */
    orderBy?: VideoPostOrderByWithRelationInput | VideoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoPosts.
     */
    cursor?: VideoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoPosts.
     */
    distinct?: VideoPostScalarFieldEnum | VideoPostScalarFieldEnum[]
  }

  /**
   * VideoPost findMany
   */
  export type VideoPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * Filter, which VideoPosts to fetch.
     */
    where?: VideoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPosts to fetch.
     */
    orderBy?: VideoPostOrderByWithRelationInput | VideoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoPosts.
     */
    cursor?: VideoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPosts.
     */
    skip?: number
    distinct?: VideoPostScalarFieldEnum | VideoPostScalarFieldEnum[]
  }

  /**
   * VideoPost create
   */
  export type VideoPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * The data needed to create a VideoPost.
     */
    data: XOR<VideoPostCreateInput, VideoPostUncheckedCreateInput>
  }

  /**
   * VideoPost createMany
   */
  export type VideoPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoPosts.
     */
    data: VideoPostCreateManyInput | VideoPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoPost createManyAndReturn
   */
  export type VideoPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * The data used to create many VideoPosts.
     */
    data: VideoPostCreateManyInput | VideoPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoPost update
   */
  export type VideoPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * The data needed to update a VideoPost.
     */
    data: XOR<VideoPostUpdateInput, VideoPostUncheckedUpdateInput>
    /**
     * Choose, which VideoPost to update.
     */
    where: VideoPostWhereUniqueInput
  }

  /**
   * VideoPost updateMany
   */
  export type VideoPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoPosts.
     */
    data: XOR<VideoPostUpdateManyMutationInput, VideoPostUncheckedUpdateManyInput>
    /**
     * Filter which VideoPosts to update
     */
    where?: VideoPostWhereInput
    /**
     * Limit how many VideoPosts to update.
     */
    limit?: number
  }

  /**
   * VideoPost updateManyAndReturn
   */
  export type VideoPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * The data used to update VideoPosts.
     */
    data: XOR<VideoPostUpdateManyMutationInput, VideoPostUncheckedUpdateManyInput>
    /**
     * Filter which VideoPosts to update
     */
    where?: VideoPostWhereInput
    /**
     * Limit how many VideoPosts to update.
     */
    limit?: number
  }

  /**
   * VideoPost upsert
   */
  export type VideoPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * The filter to search for the VideoPost to update in case it exists.
     */
    where: VideoPostWhereUniqueInput
    /**
     * In case the VideoPost found by the `where` argument doesn't exist, create a new VideoPost with this data.
     */
    create: XOR<VideoPostCreateInput, VideoPostUncheckedCreateInput>
    /**
     * In case the VideoPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoPostUpdateInput, VideoPostUncheckedUpdateInput>
  }

  /**
   * VideoPost delete
   */
  export type VideoPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
    /**
     * Filter which VideoPost to delete.
     */
    where: VideoPostWhereUniqueInput
  }

  /**
   * VideoPost deleteMany
   */
  export type VideoPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoPosts to delete
     */
    where?: VideoPostWhereInput
    /**
     * Limit how many VideoPosts to delete.
     */
    limit?: number
  }

  /**
   * VideoPost without action
   */
  export type VideoPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPost
     */
    select?: VideoPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPost
     */
    omit?: VideoPostOmit<ExtArgs> | null
  }


  /**
   * Model TextPost
   */

  export type AggregateTextPost = {
    _count: TextPostCountAggregateOutputType | null
    _avg: TextPostAvgAggregateOutputType | null
    _sum: TextPostSumAggregateOutputType | null
    _min: TextPostMinAggregateOutputType | null
    _max: TextPostMaxAggregateOutputType | null
  }

  export type TextPostAvgAggregateOutputType = {
    id: number | null
  }

  export type TextPostSumAggregateOutputType = {
    id: number | null
  }

  export type TextPostMinAggregateOutputType = {
    id: number | null
    announcement: string | null
    text: string | null
  }

  export type TextPostMaxAggregateOutputType = {
    id: number | null
    announcement: string | null
    text: string | null
  }

  export type TextPostCountAggregateOutputType = {
    id: number
    announcement: number
    text: number
    tags: number
    _all: number
  }


  export type TextPostAvgAggregateInputType = {
    id?: true
  }

  export type TextPostSumAggregateInputType = {
    id?: true
  }

  export type TextPostMinAggregateInputType = {
    id?: true
    announcement?: true
    text?: true
  }

  export type TextPostMaxAggregateInputType = {
    id?: true
    announcement?: true
    text?: true
  }

  export type TextPostCountAggregateInputType = {
    id?: true
    announcement?: true
    text?: true
    tags?: true
    _all?: true
  }

  export type TextPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextPost to aggregate.
     */
    where?: TextPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextPosts to fetch.
     */
    orderBy?: TextPostOrderByWithRelationInput | TextPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextPosts
    **/
    _count?: true | TextPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextPostMaxAggregateInputType
  }

  export type GetTextPostAggregateType<T extends TextPostAggregateArgs> = {
        [P in keyof T & keyof AggregateTextPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextPost[P]>
      : GetScalarType<T[P], AggregateTextPost[P]>
  }




  export type TextPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextPostWhereInput
    orderBy?: TextPostOrderByWithAggregationInput | TextPostOrderByWithAggregationInput[]
    by: TextPostScalarFieldEnum[] | TextPostScalarFieldEnum
    having?: TextPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextPostCountAggregateInputType | true
    _avg?: TextPostAvgAggregateInputType
    _sum?: TextPostSumAggregateInputType
    _min?: TextPostMinAggregateInputType
    _max?: TextPostMaxAggregateInputType
  }

  export type TextPostGroupByOutputType = {
    id: number
    announcement: string
    text: string
    tags: string[]
    _count: TextPostCountAggregateOutputType | null
    _avg: TextPostAvgAggregateOutputType | null
    _sum: TextPostSumAggregateOutputType | null
    _min: TextPostMinAggregateOutputType | null
    _max: TextPostMaxAggregateOutputType | null
  }

  type GetTextPostGroupByPayload<T extends TextPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextPostGroupByOutputType[P]>
            : GetScalarType<T[P], TextPostGroupByOutputType[P]>
        }
      >
    >


  export type TextPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement?: boolean
    text?: boolean
    tags?: boolean
  }, ExtArgs["result"]["textPost"]>

  export type TextPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement?: boolean
    text?: boolean
    tags?: boolean
  }, ExtArgs["result"]["textPost"]>

  export type TextPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement?: boolean
    text?: boolean
    tags?: boolean
  }, ExtArgs["result"]["textPost"]>

  export type TextPostSelectScalar = {
    id?: boolean
    announcement?: boolean
    text?: boolean
    tags?: boolean
  }

  export type TextPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "announcement" | "text" | "tags", ExtArgs["result"]["textPost"]>

  export type $TextPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TextPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      announcement: string
      text: string
      tags: string[]
    }, ExtArgs["result"]["textPost"]>
    composites: {}
  }

  type TextPostGetPayload<S extends boolean | null | undefined | TextPostDefaultArgs> = $Result.GetResult<Prisma.$TextPostPayload, S>

  type TextPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextPostCountAggregateInputType | true
    }

  export interface TextPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TextPost'], meta: { name: 'TextPost' } }
    /**
     * Find zero or one TextPost that matches the filter.
     * @param {TextPostFindUniqueArgs} args - Arguments to find a TextPost
     * @example
     * // Get one TextPost
     * const textPost = await prisma.textPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextPostFindUniqueArgs>(args: SelectSubset<T, TextPostFindUniqueArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TextPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextPostFindUniqueOrThrowArgs} args - Arguments to find a TextPost
     * @example
     * // Get one TextPost
     * const textPost = await prisma.textPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextPostFindUniqueOrThrowArgs>(args: SelectSubset<T, TextPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextPostFindFirstArgs} args - Arguments to find a TextPost
     * @example
     * // Get one TextPost
     * const textPost = await prisma.textPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextPostFindFirstArgs>(args?: SelectSubset<T, TextPostFindFirstArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextPostFindFirstOrThrowArgs} args - Arguments to find a TextPost
     * @example
     * // Get one TextPost
     * const textPost = await prisma.textPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextPostFindFirstOrThrowArgs>(args?: SelectSubset<T, TextPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TextPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextPosts
     * const textPosts = await prisma.textPost.findMany()
     * 
     * // Get first 10 TextPosts
     * const textPosts = await prisma.textPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textPostWithIdOnly = await prisma.textPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextPostFindManyArgs>(args?: SelectSubset<T, TextPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TextPost.
     * @param {TextPostCreateArgs} args - Arguments to create a TextPost.
     * @example
     * // Create one TextPost
     * const TextPost = await prisma.textPost.create({
     *   data: {
     *     // ... data to create a TextPost
     *   }
     * })
     * 
     */
    create<T extends TextPostCreateArgs>(args: SelectSubset<T, TextPostCreateArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TextPosts.
     * @param {TextPostCreateManyArgs} args - Arguments to create many TextPosts.
     * @example
     * // Create many TextPosts
     * const textPost = await prisma.textPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextPostCreateManyArgs>(args?: SelectSubset<T, TextPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TextPosts and returns the data saved in the database.
     * @param {TextPostCreateManyAndReturnArgs} args - Arguments to create many TextPosts.
     * @example
     * // Create many TextPosts
     * const textPost = await prisma.textPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TextPosts and only return the `id`
     * const textPostWithIdOnly = await prisma.textPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextPostCreateManyAndReturnArgs>(args?: SelectSubset<T, TextPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TextPost.
     * @param {TextPostDeleteArgs} args - Arguments to delete one TextPost.
     * @example
     * // Delete one TextPost
     * const TextPost = await prisma.textPost.delete({
     *   where: {
     *     // ... filter to delete one TextPost
     *   }
     * })
     * 
     */
    delete<T extends TextPostDeleteArgs>(args: SelectSubset<T, TextPostDeleteArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TextPost.
     * @param {TextPostUpdateArgs} args - Arguments to update one TextPost.
     * @example
     * // Update one TextPost
     * const textPost = await prisma.textPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextPostUpdateArgs>(args: SelectSubset<T, TextPostUpdateArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TextPosts.
     * @param {TextPostDeleteManyArgs} args - Arguments to filter TextPosts to delete.
     * @example
     * // Delete a few TextPosts
     * const { count } = await prisma.textPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextPostDeleteManyArgs>(args?: SelectSubset<T, TextPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextPosts
     * const textPost = await prisma.textPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextPostUpdateManyArgs>(args: SelectSubset<T, TextPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextPosts and returns the data updated in the database.
     * @param {TextPostUpdateManyAndReturnArgs} args - Arguments to update many TextPosts.
     * @example
     * // Update many TextPosts
     * const textPost = await prisma.textPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TextPosts and only return the `id`
     * const textPostWithIdOnly = await prisma.textPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TextPostUpdateManyAndReturnArgs>(args: SelectSubset<T, TextPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TextPost.
     * @param {TextPostUpsertArgs} args - Arguments to update or create a TextPost.
     * @example
     * // Update or create a TextPost
     * const textPost = await prisma.textPost.upsert({
     *   create: {
     *     // ... data to create a TextPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextPost we want to update
     *   }
     * })
     */
    upsert<T extends TextPostUpsertArgs>(args: SelectSubset<T, TextPostUpsertArgs<ExtArgs>>): Prisma__TextPostClient<$Result.GetResult<Prisma.$TextPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TextPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextPostCountArgs} args - Arguments to filter TextPosts to count.
     * @example
     * // Count the number of TextPosts
     * const count = await prisma.textPost.count({
     *   where: {
     *     // ... the filter for the TextPosts we want to count
     *   }
     * })
    **/
    count<T extends TextPostCountArgs>(
      args?: Subset<T, TextPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TextPostAggregateArgs>(args: Subset<T, TextPostAggregateArgs>): Prisma.PrismaPromise<GetTextPostAggregateType<T>>

    /**
     * Group by TextPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TextPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextPostGroupByArgs['orderBy'] }
        : { orderBy?: TextPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TextPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TextPost model
   */
  readonly fields: TextPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TextPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TextPost model
   */
  interface TextPostFieldRefs {
    readonly id: FieldRef<"TextPost", 'Int'>
    readonly announcement: FieldRef<"TextPost", 'String'>
    readonly text: FieldRef<"TextPost", 'String'>
    readonly tags: FieldRef<"TextPost", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * TextPost findUnique
   */
  export type TextPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * Filter, which TextPost to fetch.
     */
    where: TextPostWhereUniqueInput
  }

  /**
   * TextPost findUniqueOrThrow
   */
  export type TextPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * Filter, which TextPost to fetch.
     */
    where: TextPostWhereUniqueInput
  }

  /**
   * TextPost findFirst
   */
  export type TextPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * Filter, which TextPost to fetch.
     */
    where?: TextPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextPosts to fetch.
     */
    orderBy?: TextPostOrderByWithRelationInput | TextPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextPosts.
     */
    cursor?: TextPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextPosts.
     */
    distinct?: TextPostScalarFieldEnum | TextPostScalarFieldEnum[]
  }

  /**
   * TextPost findFirstOrThrow
   */
  export type TextPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * Filter, which TextPost to fetch.
     */
    where?: TextPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextPosts to fetch.
     */
    orderBy?: TextPostOrderByWithRelationInput | TextPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextPosts.
     */
    cursor?: TextPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextPosts.
     */
    distinct?: TextPostScalarFieldEnum | TextPostScalarFieldEnum[]
  }

  /**
   * TextPost findMany
   */
  export type TextPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * Filter, which TextPosts to fetch.
     */
    where?: TextPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextPosts to fetch.
     */
    orderBy?: TextPostOrderByWithRelationInput | TextPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextPosts.
     */
    cursor?: TextPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextPosts.
     */
    skip?: number
    distinct?: TextPostScalarFieldEnum | TextPostScalarFieldEnum[]
  }

  /**
   * TextPost create
   */
  export type TextPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * The data needed to create a TextPost.
     */
    data: XOR<TextPostCreateInput, TextPostUncheckedCreateInput>
  }

  /**
   * TextPost createMany
   */
  export type TextPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TextPosts.
     */
    data: TextPostCreateManyInput | TextPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TextPost createManyAndReturn
   */
  export type TextPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * The data used to create many TextPosts.
     */
    data: TextPostCreateManyInput | TextPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TextPost update
   */
  export type TextPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * The data needed to update a TextPost.
     */
    data: XOR<TextPostUpdateInput, TextPostUncheckedUpdateInput>
    /**
     * Choose, which TextPost to update.
     */
    where: TextPostWhereUniqueInput
  }

  /**
   * TextPost updateMany
   */
  export type TextPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TextPosts.
     */
    data: XOR<TextPostUpdateManyMutationInput, TextPostUncheckedUpdateManyInput>
    /**
     * Filter which TextPosts to update
     */
    where?: TextPostWhereInput
    /**
     * Limit how many TextPosts to update.
     */
    limit?: number
  }

  /**
   * TextPost updateManyAndReturn
   */
  export type TextPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * The data used to update TextPosts.
     */
    data: XOR<TextPostUpdateManyMutationInput, TextPostUncheckedUpdateManyInput>
    /**
     * Filter which TextPosts to update
     */
    where?: TextPostWhereInput
    /**
     * Limit how many TextPosts to update.
     */
    limit?: number
  }

  /**
   * TextPost upsert
   */
  export type TextPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * The filter to search for the TextPost to update in case it exists.
     */
    where: TextPostWhereUniqueInput
    /**
     * In case the TextPost found by the `where` argument doesn't exist, create a new TextPost with this data.
     */
    create: XOR<TextPostCreateInput, TextPostUncheckedCreateInput>
    /**
     * In case the TextPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextPostUpdateInput, TextPostUncheckedUpdateInput>
  }

  /**
   * TextPost delete
   */
  export type TextPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
    /**
     * Filter which TextPost to delete.
     */
    where: TextPostWhereUniqueInput
  }

  /**
   * TextPost deleteMany
   */
  export type TextPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextPosts to delete
     */
    where?: TextPostWhereInput
    /**
     * Limit how many TextPosts to delete.
     */
    limit?: number
  }

  /**
   * TextPost without action
   */
  export type TextPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextPost
     */
    select?: TextPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextPost
     */
    omit?: TextPostOmit<ExtArgs> | null
  }


  /**
   * Model QuotePost
   */

  export type AggregateQuotePost = {
    _count: QuotePostCountAggregateOutputType | null
    _avg: QuotePostAvgAggregateOutputType | null
    _sum: QuotePostSumAggregateOutputType | null
    _min: QuotePostMinAggregateOutputType | null
    _max: QuotePostMaxAggregateOutputType | null
  }

  export type QuotePostAvgAggregateOutputType = {
    id: number | null
  }

  export type QuotePostSumAggregateOutputType = {
    id: number | null
  }

  export type QuotePostMinAggregateOutputType = {
    id: number | null
    author: string | null
  }

  export type QuotePostMaxAggregateOutputType = {
    id: number | null
    author: string | null
  }

  export type QuotePostCountAggregateOutputType = {
    id: number
    author: number
    tags: number
    _all: number
  }


  export type QuotePostAvgAggregateInputType = {
    id?: true
  }

  export type QuotePostSumAggregateInputType = {
    id?: true
  }

  export type QuotePostMinAggregateInputType = {
    id?: true
    author?: true
  }

  export type QuotePostMaxAggregateInputType = {
    id?: true
    author?: true
  }

  export type QuotePostCountAggregateInputType = {
    id?: true
    author?: true
    tags?: true
    _all?: true
  }

  export type QuotePostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotePost to aggregate.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotePosts
    **/
    _count?: true | QuotePostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotePostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotePostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotePostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotePostMaxAggregateInputType
  }

  export type GetQuotePostAggregateType<T extends QuotePostAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotePost[P]>
      : GetScalarType<T[P], AggregateQuotePost[P]>
  }




  export type QuotePostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotePostWhereInput
    orderBy?: QuotePostOrderByWithAggregationInput | QuotePostOrderByWithAggregationInput[]
    by: QuotePostScalarFieldEnum[] | QuotePostScalarFieldEnum
    having?: QuotePostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotePostCountAggregateInputType | true
    _avg?: QuotePostAvgAggregateInputType
    _sum?: QuotePostSumAggregateInputType
    _min?: QuotePostMinAggregateInputType
    _max?: QuotePostMaxAggregateInputType
  }

  export type QuotePostGroupByOutputType = {
    id: number
    author: string
    tags: string[]
    _count: QuotePostCountAggregateOutputType | null
    _avg: QuotePostAvgAggregateOutputType | null
    _sum: QuotePostSumAggregateOutputType | null
    _min: QuotePostMinAggregateOutputType | null
    _max: QuotePostMaxAggregateOutputType | null
  }

  type GetQuotePostGroupByPayload<T extends QuotePostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotePostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotePostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotePostGroupByOutputType[P]>
            : GetScalarType<T[P], QuotePostGroupByOutputType[P]>
        }
      >
    >


  export type QuotePostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    tags?: boolean
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    tags?: boolean
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    tags?: boolean
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectScalar = {
    id?: boolean
    author?: boolean
    tags?: boolean
  }

  export type QuotePostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author" | "tags", ExtArgs["result"]["quotePost"]>

  export type $QuotePostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuotePost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      author: string
      tags: string[]
    }, ExtArgs["result"]["quotePost"]>
    composites: {}
  }

  type QuotePostGetPayload<S extends boolean | null | undefined | QuotePostDefaultArgs> = $Result.GetResult<Prisma.$QuotePostPayload, S>

  type QuotePostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotePostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotePostCountAggregateInputType | true
    }

  export interface QuotePostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotePost'], meta: { name: 'QuotePost' } }
    /**
     * Find zero or one QuotePost that matches the filter.
     * @param {QuotePostFindUniqueArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotePostFindUniqueArgs>(args: SelectSubset<T, QuotePostFindUniqueArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuotePost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotePostFindUniqueOrThrowArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotePostFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotePostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostFindFirstArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotePostFindFirstArgs>(args?: SelectSubset<T, QuotePostFindFirstArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotePost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostFindFirstOrThrowArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotePostFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotePostFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuotePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotePosts
     * const quotePosts = await prisma.quotePost.findMany()
     * 
     * // Get first 10 QuotePosts
     * const quotePosts = await prisma.quotePost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotePostWithIdOnly = await prisma.quotePost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotePostFindManyArgs>(args?: SelectSubset<T, QuotePostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuotePost.
     * @param {QuotePostCreateArgs} args - Arguments to create a QuotePost.
     * @example
     * // Create one QuotePost
     * const QuotePost = await prisma.quotePost.create({
     *   data: {
     *     // ... data to create a QuotePost
     *   }
     * })
     * 
     */
    create<T extends QuotePostCreateArgs>(args: SelectSubset<T, QuotePostCreateArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuotePosts.
     * @param {QuotePostCreateManyArgs} args - Arguments to create many QuotePosts.
     * @example
     * // Create many QuotePosts
     * const quotePost = await prisma.quotePost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotePostCreateManyArgs>(args?: SelectSubset<T, QuotePostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuotePosts and returns the data saved in the database.
     * @param {QuotePostCreateManyAndReturnArgs} args - Arguments to create many QuotePosts.
     * @example
     * // Create many QuotePosts
     * const quotePost = await prisma.quotePost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuotePosts and only return the `id`
     * const quotePostWithIdOnly = await prisma.quotePost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotePostCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotePostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuotePost.
     * @param {QuotePostDeleteArgs} args - Arguments to delete one QuotePost.
     * @example
     * // Delete one QuotePost
     * const QuotePost = await prisma.quotePost.delete({
     *   where: {
     *     // ... filter to delete one QuotePost
     *   }
     * })
     * 
     */
    delete<T extends QuotePostDeleteArgs>(args: SelectSubset<T, QuotePostDeleteArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuotePost.
     * @param {QuotePostUpdateArgs} args - Arguments to update one QuotePost.
     * @example
     * // Update one QuotePost
     * const quotePost = await prisma.quotePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotePostUpdateArgs>(args: SelectSubset<T, QuotePostUpdateArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuotePosts.
     * @param {QuotePostDeleteManyArgs} args - Arguments to filter QuotePosts to delete.
     * @example
     * // Delete a few QuotePosts
     * const { count } = await prisma.quotePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotePostDeleteManyArgs>(args?: SelectSubset<T, QuotePostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotePosts
     * const quotePost = await prisma.quotePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotePostUpdateManyArgs>(args: SelectSubset<T, QuotePostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotePosts and returns the data updated in the database.
     * @param {QuotePostUpdateManyAndReturnArgs} args - Arguments to update many QuotePosts.
     * @example
     * // Update many QuotePosts
     * const quotePost = await prisma.quotePost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuotePosts and only return the `id`
     * const quotePostWithIdOnly = await prisma.quotePost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuotePostUpdateManyAndReturnArgs>(args: SelectSubset<T, QuotePostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuotePost.
     * @param {QuotePostUpsertArgs} args - Arguments to update or create a QuotePost.
     * @example
     * // Update or create a QuotePost
     * const quotePost = await prisma.quotePost.upsert({
     *   create: {
     *     // ... data to create a QuotePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotePost we want to update
     *   }
     * })
     */
    upsert<T extends QuotePostUpsertArgs>(args: SelectSubset<T, QuotePostUpsertArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuotePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostCountArgs} args - Arguments to filter QuotePosts to count.
     * @example
     * // Count the number of QuotePosts
     * const count = await prisma.quotePost.count({
     *   where: {
     *     // ... the filter for the QuotePosts we want to count
     *   }
     * })
    **/
    count<T extends QuotePostCountArgs>(
      args?: Subset<T, QuotePostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotePostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuotePostAggregateArgs>(args: Subset<T, QuotePostAggregateArgs>): Prisma.PrismaPromise<GetQuotePostAggregateType<T>>

    /**
     * Group by QuotePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuotePostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotePostGroupByArgs['orderBy'] }
        : { orderBy?: QuotePostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuotePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotePostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuotePost model
   */
  readonly fields: QuotePostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotePost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotePostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuotePost model
   */
  interface QuotePostFieldRefs {
    readonly id: FieldRef<"QuotePost", 'Int'>
    readonly author: FieldRef<"QuotePost", 'String'>
    readonly tags: FieldRef<"QuotePost", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * QuotePost findUnique
   */
  export type QuotePostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost findUniqueOrThrow
   */
  export type QuotePostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost findFirst
   */
  export type QuotePostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotePosts.
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotePosts.
     */
    distinct?: QuotePostScalarFieldEnum | QuotePostScalarFieldEnum[]
  }

  /**
   * QuotePost findFirstOrThrow
   */
  export type QuotePostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotePosts.
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotePosts.
     */
    distinct?: QuotePostScalarFieldEnum | QuotePostScalarFieldEnum[]
  }

  /**
   * QuotePost findMany
   */
  export type QuotePostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Filter, which QuotePosts to fetch.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotePosts.
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    distinct?: QuotePostScalarFieldEnum | QuotePostScalarFieldEnum[]
  }

  /**
   * QuotePost create
   */
  export type QuotePostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * The data needed to create a QuotePost.
     */
    data: XOR<QuotePostCreateInput, QuotePostUncheckedCreateInput>
  }

  /**
   * QuotePost createMany
   */
  export type QuotePostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotePosts.
     */
    data: QuotePostCreateManyInput | QuotePostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotePost createManyAndReturn
   */
  export type QuotePostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * The data used to create many QuotePosts.
     */
    data: QuotePostCreateManyInput | QuotePostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotePost update
   */
  export type QuotePostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * The data needed to update a QuotePost.
     */
    data: XOR<QuotePostUpdateInput, QuotePostUncheckedUpdateInput>
    /**
     * Choose, which QuotePost to update.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost updateMany
   */
  export type QuotePostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotePosts.
     */
    data: XOR<QuotePostUpdateManyMutationInput, QuotePostUncheckedUpdateManyInput>
    /**
     * Filter which QuotePosts to update
     */
    where?: QuotePostWhereInput
    /**
     * Limit how many QuotePosts to update.
     */
    limit?: number
  }

  /**
   * QuotePost updateManyAndReturn
   */
  export type QuotePostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * The data used to update QuotePosts.
     */
    data: XOR<QuotePostUpdateManyMutationInput, QuotePostUncheckedUpdateManyInput>
    /**
     * Filter which QuotePosts to update
     */
    where?: QuotePostWhereInput
    /**
     * Limit how many QuotePosts to update.
     */
    limit?: number
  }

  /**
   * QuotePost upsert
   */
  export type QuotePostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * The filter to search for the QuotePost to update in case it exists.
     */
    where: QuotePostWhereUniqueInput
    /**
     * In case the QuotePost found by the `where` argument doesn't exist, create a new QuotePost with this data.
     */
    create: XOR<QuotePostCreateInput, QuotePostUncheckedCreateInput>
    /**
     * In case the QuotePost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotePostUpdateInput, QuotePostUncheckedUpdateInput>
  }

  /**
   * QuotePost delete
   */
  export type QuotePostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Filter which QuotePost to delete.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost deleteMany
   */
  export type QuotePostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotePosts to delete
     */
    where?: QuotePostWhereInput
    /**
     * Limit how many QuotePosts to delete.
     */
    limit?: number
  }

  /**
   * QuotePost without action
   */
  export type QuotePostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
  }


  /**
   * Model LinkPost
   */

  export type AggregateLinkPost = {
    _count: LinkPostCountAggregateOutputType | null
    _avg: LinkPostAvgAggregateOutputType | null
    _sum: LinkPostSumAggregateOutputType | null
    _min: LinkPostMinAggregateOutputType | null
    _max: LinkPostMaxAggregateOutputType | null
  }

  export type LinkPostAvgAggregateOutputType = {
    id: number | null
  }

  export type LinkPostSumAggregateOutputType = {
    id: number | null
  }

  export type LinkPostMinAggregateOutputType = {
    id: number | null
    description: string | null
    link: string | null
    tags: string | null
  }

  export type LinkPostMaxAggregateOutputType = {
    id: number | null
    description: string | null
    link: string | null
    tags: string | null
  }

  export type LinkPostCountAggregateOutputType = {
    id: number
    description: number
    link: number
    tags: number
    _all: number
  }


  export type LinkPostAvgAggregateInputType = {
    id?: true
  }

  export type LinkPostSumAggregateInputType = {
    id?: true
  }

  export type LinkPostMinAggregateInputType = {
    id?: true
    description?: true
    link?: true
    tags?: true
  }

  export type LinkPostMaxAggregateInputType = {
    id?: true
    description?: true
    link?: true
    tags?: true
  }

  export type LinkPostCountAggregateInputType = {
    id?: true
    description?: true
    link?: true
    tags?: true
    _all?: true
  }

  export type LinkPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkPost to aggregate.
     */
    where?: LinkPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPosts to fetch.
     */
    orderBy?: LinkPostOrderByWithRelationInput | LinkPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkPosts
    **/
    _count?: true | LinkPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkPostMaxAggregateInputType
  }

  export type GetLinkPostAggregateType<T extends LinkPostAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkPost[P]>
      : GetScalarType<T[P], AggregateLinkPost[P]>
  }




  export type LinkPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPostWhereInput
    orderBy?: LinkPostOrderByWithAggregationInput | LinkPostOrderByWithAggregationInput[]
    by: LinkPostScalarFieldEnum[] | LinkPostScalarFieldEnum
    having?: LinkPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkPostCountAggregateInputType | true
    _avg?: LinkPostAvgAggregateInputType
    _sum?: LinkPostSumAggregateInputType
    _min?: LinkPostMinAggregateInputType
    _max?: LinkPostMaxAggregateInputType
  }

  export type LinkPostGroupByOutputType = {
    id: number
    description: string
    link: string
    tags: string
    _count: LinkPostCountAggregateOutputType | null
    _avg: LinkPostAvgAggregateOutputType | null
    _sum: LinkPostSumAggregateOutputType | null
    _min: LinkPostMinAggregateOutputType | null
    _max: LinkPostMaxAggregateOutputType | null
  }

  type GetLinkPostGroupByPayload<T extends LinkPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkPostGroupByOutputType[P]>
            : GetScalarType<T[P], LinkPostGroupByOutputType[P]>
        }
      >
    >


  export type LinkPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    link?: boolean
    tags?: boolean
  }, ExtArgs["result"]["linkPost"]>

  export type LinkPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    link?: boolean
    tags?: boolean
  }, ExtArgs["result"]["linkPost"]>

  export type LinkPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    link?: boolean
    tags?: boolean
  }, ExtArgs["result"]["linkPost"]>

  export type LinkPostSelectScalar = {
    id?: boolean
    description?: boolean
    link?: boolean
    tags?: boolean
  }

  export type LinkPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "link" | "tags", ExtArgs["result"]["linkPost"]>

  export type $LinkPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      link: string
      tags: string
    }, ExtArgs["result"]["linkPost"]>
    composites: {}
  }

  type LinkPostGetPayload<S extends boolean | null | undefined | LinkPostDefaultArgs> = $Result.GetResult<Prisma.$LinkPostPayload, S>

  type LinkPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkPostCountAggregateInputType | true
    }

  export interface LinkPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkPost'], meta: { name: 'LinkPost' } }
    /**
     * Find zero or one LinkPost that matches the filter.
     * @param {LinkPostFindUniqueArgs} args - Arguments to find a LinkPost
     * @example
     * // Get one LinkPost
     * const linkPost = await prisma.linkPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkPostFindUniqueArgs>(args: SelectSubset<T, LinkPostFindUniqueArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkPostFindUniqueOrThrowArgs} args - Arguments to find a LinkPost
     * @example
     * // Get one LinkPost
     * const linkPost = await prisma.linkPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkPostFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPostFindFirstArgs} args - Arguments to find a LinkPost
     * @example
     * // Get one LinkPost
     * const linkPost = await prisma.linkPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkPostFindFirstArgs>(args?: SelectSubset<T, LinkPostFindFirstArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPostFindFirstOrThrowArgs} args - Arguments to find a LinkPost
     * @example
     * // Get one LinkPost
     * const linkPost = await prisma.linkPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkPostFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkPosts
     * const linkPosts = await prisma.linkPost.findMany()
     * 
     * // Get first 10 LinkPosts
     * const linkPosts = await prisma.linkPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkPostWithIdOnly = await prisma.linkPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkPostFindManyArgs>(args?: SelectSubset<T, LinkPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkPost.
     * @param {LinkPostCreateArgs} args - Arguments to create a LinkPost.
     * @example
     * // Create one LinkPost
     * const LinkPost = await prisma.linkPost.create({
     *   data: {
     *     // ... data to create a LinkPost
     *   }
     * })
     * 
     */
    create<T extends LinkPostCreateArgs>(args: SelectSubset<T, LinkPostCreateArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkPosts.
     * @param {LinkPostCreateManyArgs} args - Arguments to create many LinkPosts.
     * @example
     * // Create many LinkPosts
     * const linkPost = await prisma.linkPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkPostCreateManyArgs>(args?: SelectSubset<T, LinkPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkPosts and returns the data saved in the database.
     * @param {LinkPostCreateManyAndReturnArgs} args - Arguments to create many LinkPosts.
     * @example
     * // Create many LinkPosts
     * const linkPost = await prisma.linkPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkPosts and only return the `id`
     * const linkPostWithIdOnly = await prisma.linkPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkPostCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkPost.
     * @param {LinkPostDeleteArgs} args - Arguments to delete one LinkPost.
     * @example
     * // Delete one LinkPost
     * const LinkPost = await prisma.linkPost.delete({
     *   where: {
     *     // ... filter to delete one LinkPost
     *   }
     * })
     * 
     */
    delete<T extends LinkPostDeleteArgs>(args: SelectSubset<T, LinkPostDeleteArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkPost.
     * @param {LinkPostUpdateArgs} args - Arguments to update one LinkPost.
     * @example
     * // Update one LinkPost
     * const linkPost = await prisma.linkPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkPostUpdateArgs>(args: SelectSubset<T, LinkPostUpdateArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkPosts.
     * @param {LinkPostDeleteManyArgs} args - Arguments to filter LinkPosts to delete.
     * @example
     * // Delete a few LinkPosts
     * const { count } = await prisma.linkPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkPostDeleteManyArgs>(args?: SelectSubset<T, LinkPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkPosts
     * const linkPost = await prisma.linkPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkPostUpdateManyArgs>(args: SelectSubset<T, LinkPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkPosts and returns the data updated in the database.
     * @param {LinkPostUpdateManyAndReturnArgs} args - Arguments to update many LinkPosts.
     * @example
     * // Update many LinkPosts
     * const linkPost = await prisma.linkPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkPosts and only return the `id`
     * const linkPostWithIdOnly = await prisma.linkPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkPostUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkPost.
     * @param {LinkPostUpsertArgs} args - Arguments to update or create a LinkPost.
     * @example
     * // Update or create a LinkPost
     * const linkPost = await prisma.linkPost.upsert({
     *   create: {
     *     // ... data to create a LinkPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkPost we want to update
     *   }
     * })
     */
    upsert<T extends LinkPostUpsertArgs>(args: SelectSubset<T, LinkPostUpsertArgs<ExtArgs>>): Prisma__LinkPostClient<$Result.GetResult<Prisma.$LinkPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPostCountArgs} args - Arguments to filter LinkPosts to count.
     * @example
     * // Count the number of LinkPosts
     * const count = await prisma.linkPost.count({
     *   where: {
     *     // ... the filter for the LinkPosts we want to count
     *   }
     * })
    **/
    count<T extends LinkPostCountArgs>(
      args?: Subset<T, LinkPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkPostAggregateArgs>(args: Subset<T, LinkPostAggregateArgs>): Prisma.PrismaPromise<GetLinkPostAggregateType<T>>

    /**
     * Group by LinkPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkPostGroupByArgs['orderBy'] }
        : { orderBy?: LinkPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkPost model
   */
  readonly fields: LinkPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkPost model
   */
  interface LinkPostFieldRefs {
    readonly id: FieldRef<"LinkPost", 'Int'>
    readonly description: FieldRef<"LinkPost", 'String'>
    readonly link: FieldRef<"LinkPost", 'String'>
    readonly tags: FieldRef<"LinkPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkPost findUnique
   */
  export type LinkPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * Filter, which LinkPost to fetch.
     */
    where: LinkPostWhereUniqueInput
  }

  /**
   * LinkPost findUniqueOrThrow
   */
  export type LinkPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * Filter, which LinkPost to fetch.
     */
    where: LinkPostWhereUniqueInput
  }

  /**
   * LinkPost findFirst
   */
  export type LinkPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * Filter, which LinkPost to fetch.
     */
    where?: LinkPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPosts to fetch.
     */
    orderBy?: LinkPostOrderByWithRelationInput | LinkPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkPosts.
     */
    cursor?: LinkPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkPosts.
     */
    distinct?: LinkPostScalarFieldEnum | LinkPostScalarFieldEnum[]
  }

  /**
   * LinkPost findFirstOrThrow
   */
  export type LinkPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * Filter, which LinkPost to fetch.
     */
    where?: LinkPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPosts to fetch.
     */
    orderBy?: LinkPostOrderByWithRelationInput | LinkPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkPosts.
     */
    cursor?: LinkPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkPosts.
     */
    distinct?: LinkPostScalarFieldEnum | LinkPostScalarFieldEnum[]
  }

  /**
   * LinkPost findMany
   */
  export type LinkPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * Filter, which LinkPosts to fetch.
     */
    where?: LinkPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPosts to fetch.
     */
    orderBy?: LinkPostOrderByWithRelationInput | LinkPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkPosts.
     */
    cursor?: LinkPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPosts.
     */
    skip?: number
    distinct?: LinkPostScalarFieldEnum | LinkPostScalarFieldEnum[]
  }

  /**
   * LinkPost create
   */
  export type LinkPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * The data needed to create a LinkPost.
     */
    data: XOR<LinkPostCreateInput, LinkPostUncheckedCreateInput>
  }

  /**
   * LinkPost createMany
   */
  export type LinkPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkPosts.
     */
    data: LinkPostCreateManyInput | LinkPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkPost createManyAndReturn
   */
  export type LinkPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * The data used to create many LinkPosts.
     */
    data: LinkPostCreateManyInput | LinkPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkPost update
   */
  export type LinkPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * The data needed to update a LinkPost.
     */
    data: XOR<LinkPostUpdateInput, LinkPostUncheckedUpdateInput>
    /**
     * Choose, which LinkPost to update.
     */
    where: LinkPostWhereUniqueInput
  }

  /**
   * LinkPost updateMany
   */
  export type LinkPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkPosts.
     */
    data: XOR<LinkPostUpdateManyMutationInput, LinkPostUncheckedUpdateManyInput>
    /**
     * Filter which LinkPosts to update
     */
    where?: LinkPostWhereInput
    /**
     * Limit how many LinkPosts to update.
     */
    limit?: number
  }

  /**
   * LinkPost updateManyAndReturn
   */
  export type LinkPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * The data used to update LinkPosts.
     */
    data: XOR<LinkPostUpdateManyMutationInput, LinkPostUncheckedUpdateManyInput>
    /**
     * Filter which LinkPosts to update
     */
    where?: LinkPostWhereInput
    /**
     * Limit how many LinkPosts to update.
     */
    limit?: number
  }

  /**
   * LinkPost upsert
   */
  export type LinkPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * The filter to search for the LinkPost to update in case it exists.
     */
    where: LinkPostWhereUniqueInput
    /**
     * In case the LinkPost found by the `where` argument doesn't exist, create a new LinkPost with this data.
     */
    create: XOR<LinkPostCreateInput, LinkPostUncheckedCreateInput>
    /**
     * In case the LinkPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkPostUpdateInput, LinkPostUncheckedUpdateInput>
  }

  /**
   * LinkPost delete
   */
  export type LinkPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
    /**
     * Filter which LinkPost to delete.
     */
    where: LinkPostWhereUniqueInput
  }

  /**
   * LinkPost deleteMany
   */
  export type LinkPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkPosts to delete
     */
    where?: LinkPostWhereInput
    /**
     * Limit how many LinkPosts to delete.
     */
    limit?: number
  }

  /**
   * LinkPost without action
   */
  export type LinkPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPost
     */
    select?: LinkPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPost
     */
    omit?: LinkPostOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VideoPostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    tags: 'tags'
  };

  export type VideoPostScalarFieldEnum = (typeof VideoPostScalarFieldEnum)[keyof typeof VideoPostScalarFieldEnum]


  export const TextPostScalarFieldEnum: {
    id: 'id',
    announcement: 'announcement',
    text: 'text',
    tags: 'tags'
  };

  export type TextPostScalarFieldEnum = (typeof TextPostScalarFieldEnum)[keyof typeof TextPostScalarFieldEnum]


  export const QuotePostScalarFieldEnum: {
    id: 'id',
    author: 'author',
    tags: 'tags'
  };

  export type QuotePostScalarFieldEnum = (typeof QuotePostScalarFieldEnum)[keyof typeof QuotePostScalarFieldEnum]


  export const LinkPostScalarFieldEnum: {
    id: 'id',
    description: 'description',
    link: 'link',
    tags: 'tags'
  };

  export type LinkPostScalarFieldEnum = (typeof LinkPostScalarFieldEnum)[keyof typeof LinkPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VideoPostWhereInput = {
    AND?: VideoPostWhereInput | VideoPostWhereInput[]
    OR?: VideoPostWhereInput[]
    NOT?: VideoPostWhereInput | VideoPostWhereInput[]
    id?: IntFilter<"VideoPost"> | number
    name?: StringFilter<"VideoPost"> | string
    link?: StringFilter<"VideoPost"> | string
    tags?: StringNullableListFilter<"VideoPost">
  }

  export type VideoPostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    tags?: SortOrder
  }

  export type VideoPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoPostWhereInput | VideoPostWhereInput[]
    OR?: VideoPostWhereInput[]
    NOT?: VideoPostWhereInput | VideoPostWhereInput[]
    name?: StringFilter<"VideoPost"> | string
    link?: StringFilter<"VideoPost"> | string
    tags?: StringNullableListFilter<"VideoPost">
  }, "id">

  export type VideoPostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    tags?: SortOrder
    _count?: VideoPostCountOrderByAggregateInput
    _avg?: VideoPostAvgOrderByAggregateInput
    _max?: VideoPostMaxOrderByAggregateInput
    _min?: VideoPostMinOrderByAggregateInput
    _sum?: VideoPostSumOrderByAggregateInput
  }

  export type VideoPostScalarWhereWithAggregatesInput = {
    AND?: VideoPostScalarWhereWithAggregatesInput | VideoPostScalarWhereWithAggregatesInput[]
    OR?: VideoPostScalarWhereWithAggregatesInput[]
    NOT?: VideoPostScalarWhereWithAggregatesInput | VideoPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VideoPost"> | number
    name?: StringWithAggregatesFilter<"VideoPost"> | string
    link?: StringWithAggregatesFilter<"VideoPost"> | string
    tags?: StringNullableListFilter<"VideoPost">
  }

  export type TextPostWhereInput = {
    AND?: TextPostWhereInput | TextPostWhereInput[]
    OR?: TextPostWhereInput[]
    NOT?: TextPostWhereInput | TextPostWhereInput[]
    id?: IntFilter<"TextPost"> | number
    announcement?: StringFilter<"TextPost"> | string
    text?: StringFilter<"TextPost"> | string
    tags?: StringNullableListFilter<"TextPost">
  }

  export type TextPostOrderByWithRelationInput = {
    id?: SortOrder
    announcement?: SortOrder
    text?: SortOrder
    tags?: SortOrder
  }

  export type TextPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TextPostWhereInput | TextPostWhereInput[]
    OR?: TextPostWhereInput[]
    NOT?: TextPostWhereInput | TextPostWhereInput[]
    announcement?: StringFilter<"TextPost"> | string
    text?: StringFilter<"TextPost"> | string
    tags?: StringNullableListFilter<"TextPost">
  }, "id">

  export type TextPostOrderByWithAggregationInput = {
    id?: SortOrder
    announcement?: SortOrder
    text?: SortOrder
    tags?: SortOrder
    _count?: TextPostCountOrderByAggregateInput
    _avg?: TextPostAvgOrderByAggregateInput
    _max?: TextPostMaxOrderByAggregateInput
    _min?: TextPostMinOrderByAggregateInput
    _sum?: TextPostSumOrderByAggregateInput
  }

  export type TextPostScalarWhereWithAggregatesInput = {
    AND?: TextPostScalarWhereWithAggregatesInput | TextPostScalarWhereWithAggregatesInput[]
    OR?: TextPostScalarWhereWithAggregatesInput[]
    NOT?: TextPostScalarWhereWithAggregatesInput | TextPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TextPost"> | number
    announcement?: StringWithAggregatesFilter<"TextPost"> | string
    text?: StringWithAggregatesFilter<"TextPost"> | string
    tags?: StringNullableListFilter<"TextPost">
  }

  export type QuotePostWhereInput = {
    AND?: QuotePostWhereInput | QuotePostWhereInput[]
    OR?: QuotePostWhereInput[]
    NOT?: QuotePostWhereInput | QuotePostWhereInput[]
    id?: IntFilter<"QuotePost"> | number
    author?: StringFilter<"QuotePost"> | string
    tags?: StringNullableListFilter<"QuotePost">
  }

  export type QuotePostOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrder
    tags?: SortOrder
  }

  export type QuotePostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuotePostWhereInput | QuotePostWhereInput[]
    OR?: QuotePostWhereInput[]
    NOT?: QuotePostWhereInput | QuotePostWhereInput[]
    author?: StringFilter<"QuotePost"> | string
    tags?: StringNullableListFilter<"QuotePost">
  }, "id">

  export type QuotePostOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrder
    tags?: SortOrder
    _count?: QuotePostCountOrderByAggregateInput
    _avg?: QuotePostAvgOrderByAggregateInput
    _max?: QuotePostMaxOrderByAggregateInput
    _min?: QuotePostMinOrderByAggregateInput
    _sum?: QuotePostSumOrderByAggregateInput
  }

  export type QuotePostScalarWhereWithAggregatesInput = {
    AND?: QuotePostScalarWhereWithAggregatesInput | QuotePostScalarWhereWithAggregatesInput[]
    OR?: QuotePostScalarWhereWithAggregatesInput[]
    NOT?: QuotePostScalarWhereWithAggregatesInput | QuotePostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuotePost"> | number
    author?: StringWithAggregatesFilter<"QuotePost"> | string
    tags?: StringNullableListFilter<"QuotePost">
  }

  export type LinkPostWhereInput = {
    AND?: LinkPostWhereInput | LinkPostWhereInput[]
    OR?: LinkPostWhereInput[]
    NOT?: LinkPostWhereInput | LinkPostWhereInput[]
    id?: IntFilter<"LinkPost"> | number
    description?: StringFilter<"LinkPost"> | string
    link?: StringFilter<"LinkPost"> | string
    tags?: StringFilter<"LinkPost"> | string
  }

  export type LinkPostOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    link?: SortOrder
    tags?: SortOrder
  }

  export type LinkPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkPostWhereInput | LinkPostWhereInput[]
    OR?: LinkPostWhereInput[]
    NOT?: LinkPostWhereInput | LinkPostWhereInput[]
    description?: StringFilter<"LinkPost"> | string
    link?: StringFilter<"LinkPost"> | string
    tags?: StringFilter<"LinkPost"> | string
  }, "id">

  export type LinkPostOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    link?: SortOrder
    tags?: SortOrder
    _count?: LinkPostCountOrderByAggregateInput
    _avg?: LinkPostAvgOrderByAggregateInput
    _max?: LinkPostMaxOrderByAggregateInput
    _min?: LinkPostMinOrderByAggregateInput
    _sum?: LinkPostSumOrderByAggregateInput
  }

  export type LinkPostScalarWhereWithAggregatesInput = {
    AND?: LinkPostScalarWhereWithAggregatesInput | LinkPostScalarWhereWithAggregatesInput[]
    OR?: LinkPostScalarWhereWithAggregatesInput[]
    NOT?: LinkPostScalarWhereWithAggregatesInput | LinkPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LinkPost"> | number
    description?: StringWithAggregatesFilter<"LinkPost"> | string
    link?: StringWithAggregatesFilter<"LinkPost"> | string
    tags?: StringWithAggregatesFilter<"LinkPost"> | string
  }

  export type VideoPostCreateInput = {
    name: string
    link: string
    tags?: VideoPostCreatetagsInput | string[]
  }

  export type VideoPostUncheckedCreateInput = {
    id?: number
    name: string
    link: string
    tags?: VideoPostCreatetagsInput | string[]
  }

  export type VideoPostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: VideoPostUpdatetagsInput | string[]
  }

  export type VideoPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: VideoPostUpdatetagsInput | string[]
  }

  export type VideoPostCreateManyInput = {
    id?: number
    name: string
    link: string
    tags?: VideoPostCreatetagsInput | string[]
  }

  export type VideoPostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: VideoPostUpdatetagsInput | string[]
  }

  export type VideoPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: VideoPostUpdatetagsInput | string[]
  }

  export type TextPostCreateInput = {
    announcement: string
    text: string
    tags?: TextPostCreatetagsInput | string[]
  }

  export type TextPostUncheckedCreateInput = {
    id?: number
    announcement: string
    text: string
    tags?: TextPostCreatetagsInput | string[]
  }

  export type TextPostUpdateInput = {
    announcement?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    tags?: TextPostUpdatetagsInput | string[]
  }

  export type TextPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    announcement?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    tags?: TextPostUpdatetagsInput | string[]
  }

  export type TextPostCreateManyInput = {
    id?: number
    announcement: string
    text: string
    tags?: TextPostCreatetagsInput | string[]
  }

  export type TextPostUpdateManyMutationInput = {
    announcement?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    tags?: TextPostUpdatetagsInput | string[]
  }

  export type TextPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    announcement?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    tags?: TextPostUpdatetagsInput | string[]
  }

  export type QuotePostCreateInput = {
    author: string
    tags?: QuotePostCreatetagsInput | string[]
  }

  export type QuotePostUncheckedCreateInput = {
    id?: number
    author: string
    tags?: QuotePostCreatetagsInput | string[]
  }

  export type QuotePostUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    tags?: QuotePostUpdatetagsInput | string[]
  }

  export type QuotePostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    tags?: QuotePostUpdatetagsInput | string[]
  }

  export type QuotePostCreateManyInput = {
    id?: number
    author: string
    tags?: QuotePostCreatetagsInput | string[]
  }

  export type QuotePostUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
    tags?: QuotePostUpdatetagsInput | string[]
  }

  export type QuotePostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    tags?: QuotePostUpdatetagsInput | string[]
  }

  export type LinkPostCreateInput = {
    description: string
    link: string
    tags: string
  }

  export type LinkPostUncheckedCreateInput = {
    id?: number
    description: string
    link: string
    tags: string
  }

  export type LinkPostUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type LinkPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type LinkPostCreateManyInput = {
    id?: number
    description: string
    link: string
    tags: string
  }

  export type LinkPostUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type LinkPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type VideoPostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    tags?: SortOrder
  }

  export type VideoPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoPostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type VideoPostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type VideoPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TextPostCountOrderByAggregateInput = {
    id?: SortOrder
    announcement?: SortOrder
    text?: SortOrder
    tags?: SortOrder
  }

  export type TextPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TextPostMaxOrderByAggregateInput = {
    id?: SortOrder
    announcement?: SortOrder
    text?: SortOrder
  }

  export type TextPostMinOrderByAggregateInput = {
    id?: SortOrder
    announcement?: SortOrder
    text?: SortOrder
  }

  export type TextPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuotePostCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    tags?: SortOrder
  }

  export type QuotePostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuotePostMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
  }

  export type QuotePostMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
  }

  export type QuotePostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinkPostCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    link?: SortOrder
    tags?: SortOrder
  }

  export type LinkPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinkPostMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    link?: SortOrder
    tags?: SortOrder
  }

  export type LinkPostMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    link?: SortOrder
    tags?: SortOrder
  }

  export type LinkPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoPostCreatetagsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type VideoPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TextPostCreatetagsInput = {
    set: string[]
  }

  export type TextPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type QuotePostCreatetagsInput = {
    set: string[]
  }

  export type QuotePostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
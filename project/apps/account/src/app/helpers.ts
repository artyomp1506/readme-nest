import { ConfigService } from "@nestjs/config"
import { MongooseModuleAsyncOptions } from "@nestjs/mongoose"

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          username: config.get<string>('MONGO_USER'),
          password: config.get<string>('MONGO_PASSWORD'),
          host: config.get<string>('MONGO_HOST'),
          port: config.get<string>('MONGO_PORT'),
          authDatabase: config.get<string>('MONGO_AUTH_BASE'),
          databaseName: config.get<string>('MONGO_DB'),
        })
      }
    },
    inject: [ConfigService]
  }
}
 function getMongoConnectionString({username, password, host, port, databaseName, authDatabase}): string {
  console.log(`mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`)
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
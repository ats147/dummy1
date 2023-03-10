import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BookModule } from './book/book.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      driver:ApolloDriver,
      playground:true,
      autoSchemaFile:join(process.cwd(),"src/schema.graphql")
      // typePaths:['./**/*.graphql']
      }),
      BookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ArticlesService } from './articles/articles.service';
import { Article } from './articles/entities/article.entity';
import { ArticlesModule } from './articles/articles.module';
import { LoggerMiddleware } from './common/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'personal-blog',
      entities: [Article],
      synchronize: true,
    }), ArticlesModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('articles');
  }
}

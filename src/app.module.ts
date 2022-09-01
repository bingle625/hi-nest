import { MoviesController } from './movies/movies.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}

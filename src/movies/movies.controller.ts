import { Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie ${id}`;
  }
  @Post()
  create() {
    return 'This will create Movie';
  }

  @Patch('/:id')
  deleteMovie(@Param('id') id: string) {
    return `This will delete Movie ${id}`;
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: string) {
    return `This will delete Movie ${id}`;
  }
}

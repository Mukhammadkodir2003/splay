import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { RefreshTokenGuard } from '../common/guards';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}
  
  @UseGuards(RefreshTokenGuard)
  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }
  
  @Get()
  findAll() {
    return this.genresService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genresService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(+id, updateGenreDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genresService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateContentAudioDto } from './dto/create-content_audio.dto';
import { UpdateContentAudioDto } from './dto/update-content_audio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContentAudioService {
  constructor(private readonly prismaService: PrismaService){}
  create(createContentAudioDto: CreateContentAudioDto) {
    return this.prismaService.contentAudio.create({data:createContentAudioDto})
  }

  findAll() {
    return this.prismaService.contentAudio.findMany();
  }

  findOne(id: number) {
    return this.prismaService.contentAudio.findUnique({ where: { id } });
  }

  update(id: number, updateContentAudioDto: UpdateContentAudioDto) {
    return this.prismaService.contentAudio.update({
      where: { id },
      data: updateContentAudioDto,
    });
  }

  remove(id: number) {
    return this.prismaService.contentAudio.delete({ where: { id } });
  }
}

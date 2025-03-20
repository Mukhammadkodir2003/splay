import { Injectable } from '@nestjs/common';
import { CreateAudioTrackDto } from './dto/create-audio_track.dto';
import { UpdateAudioTrackDto } from './dto/update-audio_track.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AudioTrackService {
  constructor(private readonly prismaService: PrismaService){}
  create(createAudioTrackDto: CreateAudioTrackDto) {
    return this.prismaService.audioTrack.create({data:createAudioTrackDto})
  }

  findAll() {
    return this.prismaService.audioTrack.findMany()
  }
  
  findOne(id: number) {
    return this.prismaService.audioTrack.findUnique({ where: { id: +id } });
  }
  
  update(id: number, updateAudioTrackDto: UpdateAudioTrackDto) {
    return this.prismaService.audioTrack.update({
      where: { id: +id },
      data: updateAudioTrackDto,
    });
  }
  
  remove(id: number) {
    return this.prismaService.audioTrack.delete({where:{id:+id}})
  }
}

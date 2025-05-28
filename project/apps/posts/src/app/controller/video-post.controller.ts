import { Body, Controller, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVideoPostDto } from './dto/create-video-post.dto';
import { VideoPostService } from '../service/video.service';
import { VideoPostRdo } from './rdo/video.rdo';

@ApiTags('posts', 'video')
@Controller('posts/video')
export class VideoPostController {
  constructor(
    private readonly videoPostService: VideoPostService
  ) {}

  @ApiResponse({
    type: VideoPostRdo,
    status: HttpStatus.CREATED,
    description: "Видео-пост создан",
  })
  @ApiBody({ 
    type: CreateVideoPostDto,
    examples: {
      example1: {
        summary: 'Пример создания видео-поста',
        value: {
          name: 'Как я провел лето',
          link: 'https://example.com/video.mp4',
          tags: ['лето', 'отдых', 'видео'],
          type: 'video'
        }
      },
      example2: {
        summary: 'Минимальные данные для создания',
        value: {
          name: 'Короткое видео',
          link: 'https://example.com/short.mp4',
          type: 'video'
        }
      }
    }
  })
  @Post()
  public async create(@Body() dto: CreateVideoPostDto) {
    const newPost = await this.videoPostService.create(dto);
  }

  @ApiResponse({
    type: VideoPostRdo,
    status: HttpStatus.OK,
    description: "Видео-пост найден",
    content: {
      'application/json': {
        example: {
          id: '6428a0dc5cd3c7a19b674754',
          name: 'Как я провел лето',
          link: 'https://example.com/video.mp4',
          tags: ['лето', 'отдых', 'видео'],
          createdAt: '2023-04-02T10:15:00.000Z',
          updatedAt: '2023-04-02T10:15:00.000Z'
        }
      }
    }
  })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const post = await this.videoPostService.findById(id);
    return post.toPOJO();
  }

  @ApiResponse({
    type: VideoPostRdo,
    status: HttpStatus.OK,
    description: "Видео-пост обновлен",
  })
  @ApiBody({ 
    type: CreateVideoPostDto,
    examples: {
      example1: {
        summary: 'Обновление всех полей',
        value: {
          name: 'Обновленное видео',
          link: 'https://example.com/new-video.mp4',
          tags: ['новое', 'обновление'],
          type: 'video'
        }
      },
      example2: {
        summary: 'Частичное обновление',
        value: {
          name: 'Только новое название',
          type: 'video'
        }
      }
    }
  })
  @Put(':id')
  public async update(@Param('id') id: string, @Body() dto: CreateVideoPostDto) {
    const updatedPost = await this.videoPostService.update(id, dto);
    return updatedPost.toPOJO();
  }
}
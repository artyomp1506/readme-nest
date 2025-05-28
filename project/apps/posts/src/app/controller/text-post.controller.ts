import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';



import { TextPostService } from '../service/text.service';
import { CreateTextPostDto } from './dto/create-text-post.dto';
import { TextPostRdo } from './rdo/text-post.rdo';

@ApiTags('Posts', 'Text')
@Controller('posts/text')
export class TextPostController {
  constructor(
    private readonly textPostService: TextPostService
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Создать текстовый пост',
    description: 'Позволяет создать новый текстовый пост с указанным содержимым'
  })
  @ApiBody({ 
    type: CreateTextPostDto,
    description: 'Данные для создания текстового поста',
    examples: {
      fullExample: {
        summary: 'Полный пример с объявлением и текстом',
        description: 'Пример создания поста с заполнением всех полей',
        value: {
          announcement: 'Превью моего нового поста о путешествиях',
          text: 'Полный текст моего поста о том, как я путешествовал по Европе...',
          tags: ['путешествия', 'европа', 'блог'],
          type: 'text'
        }
      },
      minimalExample: {
        summary: 'Минимальный пример',
        description: 'Пример с обязательными полями',
        value: {
          text: 'Короткий текст поста без превью',
          type: 'text'
        }
      },
      exampleWithTags: {
        summary: 'Пример с тегами',
        value: {
          text: 'Пост про технологии',
          tags: ['технологии', 'it', 'разработка'],
          type: 'text'
        }
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'Текстовый пост успешно создан',
    type: TextPostRdo,
    content: {
      'application/json': {
        examples: {
          createdPost: {
            summary: 'Пример успешного ответа',
            value: {
              id: '6d308040-96a2-4162-bea6-2338e9976542',
              announcement: 'Превью моего нового поста о путешествиях',
              text: 'Полный текст моего поста о том, как я путешествовал по Европе...',
              tags: ['путешествия', 'европа', 'блог'],
              createdAt: '2023-05-15T14:30:00.000Z',
              updatedAt: '2023-05-15T14:30:00.000Z'
            }
          }
        }
      }
    }
  })
  @ApiResponse({
    status: 400,
    description: 'Неверные входные данные'
  })
  async create(@Body() dto: CreateTextPostDto) {
    const post = await this.textPostService.create(dto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить текстовый пост',
    description: 'Возвращает текстовый пост по указанному идентификатору'
  })
  @ApiParam({
    name: 'id',
    description: 'UUID идентификатор поста',
    example: '6d308040-96a2-4162-bea6-2338e9976542',
    required: true
  })
  @ApiResponse({
    status: 200,
    description: 'Текстовый пост найден',
    type: TextPostRdo,
    content: {
      'application/json': {
        examples: {
          foundPost: {
            summary: 'Пример найденного поста',
            value: {
              id: '6d308040-96a2-4162-bea6-2338e9976542',
              announcement: 'Превью моего нового поста о путешествиях',
              text: 'Полный текст моего поста о том, как я путешествовал по Европе...',
              tags: ['путешествия', 'европа', 'блог'],
              createdAt: '2023-05-15T14:30:00.000Z',
              updatedAt: '2023-05-15T14:30:00.000Z'
            }
          }
        }
      }
    }
  })
  @ApiResponse({
    status: 404,
    description: 'Пост не найден'
  })
  async show(@Param('id') id: string) {
    const post = await this.textPostService.findById(id);
    return post.toPOJO();
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Обновить текстовый пост',
    description: 'Обновляет содержимое текстового поста'
  })
  @ApiParam({
    name: 'id',
    description: 'UUID идентификатор обновляемого поста',
    example: '6d308040-96a2-4162-bea6-2338e9976542',
    required: true
  })
  @ApiBody({
    type: CreateTextPostDto,
    description: 'Данные для обновления поста',
    examples: {
      updateText: {
        summary: 'Обновление текста',
        description: 'Пример обновления основного текста поста',
        value: {
          text: 'Обновленный текст поста с дополнительными деталями...'
        }
      },
      updateAll: {
        summary: 'Полное обновление',
        description: 'Пример обновления всех полей поста',
        value: {
          announcement: 'Новое превью поста',
          text: 'Полностью переработанный текст поста',
          tags: ['обновлено', 'путешествия']
        }
      },
      updateTags: {
        summary: 'Обновление тегов',
        value: {
          tags: ['новые', 'теги']
        }
      }
    }
  })
  @ApiResponse({
    status: 200,
    description: 'Пост успешно обновлен',
    type: TextPostRdo,
    content: {
      'application/json': {
        examples: {
          updatedPost: {
            summary: 'Пример обновленного поста',
            value: {
              id: '6d308040-96a2-4162-bea6-2338e9976542',
              announcement: 'Новое превью поста',
              text: 'Полностью переработанный текст поста',
              tags: ['обновлено', 'путешествия'],
              createdAt: '2023-05-15T14:30:00.000Z',
              updatedAt: '2023-05-15T15:45:00.000Z'
            }
          }
        }
      }
    }
  })
  @ApiResponse({
    status: 404,
    description: 'Пост не найден'
  })
  async update(@Param('id') id: string, @Body() dto: CreateTextPostDto) {
    const post = await this.textPostService.update(id, dto);
    return post.toPOJO();
  }


}
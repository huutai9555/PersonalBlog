import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dtos/create-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) { }

    @Post()
    async create(@Body() article: CreateArticleDto) {
        const data = this.articlesService.create(article)
        return {
            success: true,
            message: 'Create Article Successfully',
            data: data
        };
    }

    @Get(":id")
    async findOne(@Param() params: any) {
        const data = await this.articlesService.findOne(Number(params.id))
        return {
            success: true,
            message: 'Article Fetched Successfully',
            data: data
        };
    }

    @Get()
    async findAll() {
        const data = await this.articlesService.findAll()
        console.log(data)
        return {
            success: true,
            message: 'Article Fetched Successfully',
            data: data
        };
    }

    @Delete(':id')
    async remove(@Param() params: any) {
        this.articlesService.remove(Number(params.id))
        return {
            success: true,
            message: 'Delete Article Successfully',
            data: null
        };
    }

    @Patch(":id")
    async update(@Param() params: any, @Body() body: UpdateArticleDto) {
        const data = await this.articlesService.update(Number(params.id), body)
        return {
            success: true,
            message: 'Update Article Successfully',
            data: data
        };
    }

}

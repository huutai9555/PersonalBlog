import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dtos/create-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private usersRepository: Repository<Article>,
    ) { }

    async create(article: CreateArticleDto): Promise<Article> {
        const articleData = this.usersRepository.create(article)
        return await this.usersRepository.save(articleData)
    }


    async findOne(id: number): Promise<Article> {
        const article = await this.usersRepository.findOneBy({
            id: id
        })
        return article;
    }

    async findAll(): Promise<Article[]> {
        return this.usersRepository.find();
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id)
    }

    async update(id: number, article: UpdateArticleDto): Promise<Article> {
        const articleResponse = await this.usersRepository.findOneBy({
            id: id
        })
        articleResponse.publishing_date = article.publishing_date
        articleResponse.title = article.title
        return await this.usersRepository.save(articleResponse)
    }
}

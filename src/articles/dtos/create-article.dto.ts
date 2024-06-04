import { Transform } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateArticleDto {
    @IsNotEmpty()
    @IsString()
    title: string;


    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    @IsDate()
    publishing_date: string;
}
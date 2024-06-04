import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class UpdateArticleDto {
    @IsNotEmpty()
    @IsString()
    title: string;


    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    @IsDate()
    publishing_date: string;
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfpocoEntity } from "../../../entities/tFPOCO.entity";
import { TfpocoCreateDto } from "../dtos/tfpoco.create.dto";
import { QueryTfpocoDto } from "../dtos/tfpoco.find-all.dto";
import { QueryTfpocoFindOneDto } from "../dtos/tfpoco.find-one.dto";
import { TfpocoUpdateDto } from "../dtos/tfpoco.update.dto";
import { TfpocoRepository } from "./tfpoco.repository.abstract";

@Injectable()
export class TfpocoRepositoryImpl implements TfpocoRepository {
    constructor (
        @InjectRepository(TfpocoEntity)
        private readonly repository: Repository<TfpocoEntity>,
    ) {}

    async findAll (query: QueryTfpocoDto): Promise<TfpocoEntity[] | null> {
        const queryBuilder = this.repository.createQueryBuilder('tfpoco');

        if (query.codemp) {
            queryBuilder.where ('tfpoco.codemp = :codemp', {codemp: query.codemp});
        }

        if (query.codfunc) {
            queryBuilder.where ('tfpoco.codfunc = :codfunc', {codfunc: query.codfunc});
        }

        queryBuilder.limit (query.limit || 10);
        queryBuilder.offset ((query.page || 0) * (query.limit || 10));

        queryBuilder.orderBy ('tfpoco.codemp', 'ASC');

        const result = await queryBuilder.getMany();
        return result;
    }

    async findOne (query: QueryTfpocoFindOneDto): Promise<TfpocoEntity | null> {
        return await this.repository.findOne ({where: query});
    }

    async create (query: TfpocoCreateDto): Promise<TfpocoEntity> {
        const newTfpoco = this.repository.create (query);
        const result = await this.repository.save (newTfpoco);

        return result;
    }

    async update(
        id: QueryTfpocoFindOneDto, 
        query: TfpocoUpdateDto,
    ): Promise<TfpocoEntity | null> {
        await this.repository.update (id, query);

        return this.findOne (id);
    }

    async remove (id: QueryTfpocoFindOneDto): Promise<void> {
        await this.repository.delete (id);
    }
}
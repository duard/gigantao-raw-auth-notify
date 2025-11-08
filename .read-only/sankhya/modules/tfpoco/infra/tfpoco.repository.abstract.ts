import { TfpocoEntity } from "../../../entities/tFPOCO.entity";
import { TfpocoCreateDto } from "../dtos/tfpoco.create.dto";
import { QueryTfpocoDto } from "../dtos/tfpoco.find-all.dto";
import { QueryTfpocoFindOneDto } from "../dtos/tfpoco.find-one.dto";
import { TfpocoUpdateDto } from "../dtos/tfpoco.update.dto";

export abstract class TfpocoRepository {
    abstract findAll (query: QueryTfpocoDto): Promise<TfpocoEntity[] | null>;
    abstract findOne (query: QueryTfpocoFindOneDto): Promise<TfpocoEntity | null>;
    abstract create  (query: TfpocoCreateDto): Promise<TfpocoEntity>;
    abstract update  (
        id: QueryTfpocoFindOneDto,
        updateTfpocoDto: TfpocoUpdateDto,
    ): Promise<TfpocoEntity | null>;
    abstract remove (id: QueryTfpocoFindOneDto): Promise<void>;
}
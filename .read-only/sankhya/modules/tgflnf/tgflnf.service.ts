import { Injectable, Inject } from '@nestjs/common';
import { CreateTgflnfDto } from './dto/create-tgflnf.dto';
import { UpdateTgflnfDto } from './dto/update-tgflnf.dto';
import { CreateTgflnfUseCase } from './use-cases/create-tgflnf.usecase';
import { FindAllTgflnfUseCase } from './use-cases/find-all-tgflnf.usecase';
import { FindOneTgflnfUseCase } from './use-cases/find-one-tgflnf.usecase';
import { UpdateTgflnfUseCase } from './use-cases/update-tgflnf.usecase';
import { DeleteTgflnfUseCase } from './use-cases/delete-tgflnf.usecase';
import { QueryTgflnfDto } from './dto/query-tgflnf.dto';

@Injectable()
export class TgflnfService {
  constructor(
    @Inject(CreateTgflnfUseCase)
    private readonly createTgflnfUseCase: CreateTgflnfUseCase,
    @Inject(FindAllTgflnfUseCase)
    private readonly findAllTgflnfUseCase: FindAllTgflnfUseCase,
    @Inject(FindOneTgflnfUseCase)
    private readonly findOneTgflnfUseCase: FindOneTgflnfUseCase,
    @Inject(UpdateTgflnfUseCase)
    private readonly updateTgflnfUseCase: UpdateTgflnfUseCase,
    @Inject(DeleteTgflnfUseCase)
    private readonly deleteTgflnfUseCase: DeleteTgflnfUseCase,
  ) {}

  create(createTgflnfDto: CreateTgflnfDto) {
    return this.createTgflnfUseCase.execute(createTgflnfDto);
  }

  findAll(query: QueryTgflnfDto) {
    return this.findAllTgflnfUseCase.execute(query);
  }

  findOne(id: number) {
    return this.findOneTgflnfUseCase.execute(id);
  }

  update(id: number, updateTgflnfDto: UpdateTgflnfDto) {
    return this.updateTgflnfUseCase.execute(id, updateTgflnfDto);
  }

  remove(id: number) {
    return this.deleteTgflnfUseCase.execute(id);
  }
}

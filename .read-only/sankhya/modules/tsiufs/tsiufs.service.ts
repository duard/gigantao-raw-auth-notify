import { Injectable, Inject } from '@nestjs/common';
import { CreateTsiufsDto } from './dto/create-tsiufs.dto';
import { UpdateTsiufsDto } from './dto/update-tsiufs.dto';
import { CreateTsiufsUseCase } from './use-cases/create-tsiufs.usecase';
import { FindAllTsiufsUseCase } from './use-cases/find-all-tsiufs.usecase';
import { FindOneTsiufsUseCase } from './use-cases/find-one-tsiufs.usecase';
import { UpdateTsiufsUseCase } from './use-cases/update-tsiufs.usecase';
import { DeleteTsiufsUseCase } from './use-cases/delete-tsiufs.usecase';
import { QueryTsiufsDto } from './dto/query-tsiufs.dto';

@Injectable()
export class TsiufsService {
  constructor(
    @Inject(CreateTsiufsUseCase)
    private readonly createTsiufsUseCase: CreateTsiufsUseCase,
    @Inject(FindAllTsiufsUseCase)
    private readonly findAllTsiufsUseCase: FindAllTsiufsUseCase,
    @Inject(FindOneTsiufsUseCase)
    private readonly findOneTsiufsUseCase: FindOneTsiufsUseCase,
    @Inject(UpdateTsiufsUseCase)
    private readonly updateTsiufsUseCase: UpdateTsiufsUseCase,
    @Inject(DeleteTsiufsUseCase)
    private readonly deleteTsiufsUseCase: DeleteTsiufsUseCase,
  ) {}

  create(createTsiufsDto: CreateTsiufsDto) {
    return this.createTsiufsUseCase.execute(createTsiufsDto);
  }

  findAll(query: QueryTsiufsDto) {
    return this.findAllTsiufsUseCase.execute(query);
  }

  findOne(id: number) {
    return this.findOneTsiufsUseCase.execute(id);
  }

  update(id: number, updateTsiufsDto: UpdateTsiufsDto) {
    return this.updateTsiufsUseCase.execute(id, updateTsiufsDto);
  }

  remove(id: number) {
    return this.deleteTsiufsUseCase.execute(id);
  }
}

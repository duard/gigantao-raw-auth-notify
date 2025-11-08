import { Injectable, Inject } from '@nestjs/common';
import { CreateTsiusuDto } from './dto/create-tsiusu.dto';
import { UpdateTsiusuDto } from './dto/update-tsiusu.dto';
import { CreateTsiusuUseCase } from './use-cases/create-tsiusu.usecase';
import { FindAllTsiusuUseCase } from './use-cases/find-all-tsiusu.usecase';
import { FindOneTsiusuUseCase } from './use-cases/find-one-tsiusu.usecase';
import { UpdateTsiusuUseCase } from './use-cases/update-tsiusu.usecase';
import { DeleteTsiusuUseCase } from './use-cases/delete-tsiusu.usecase';
import { QueryTsiusuDto } from './dto/query-tsiusu.dto';

@Injectable()
export class TsiusuService {
  constructor(
    @Inject(CreateTsiusuUseCase)
    private readonly createTsiusuUseCase: CreateTsiusuUseCase,
    @Inject(FindAllTsiusuUseCase)
    private readonly findAllTsiusuUseCase: FindAllTsiusuUseCase,
    @Inject(FindOneTsiusuUseCase)
    private readonly findOneTsiusuUseCase: FindOneTsiusuUseCase,
    @Inject(UpdateTsiusuUseCase)
    private readonly updateTsiusuUseCase: UpdateTsiusuUseCase,
    @Inject(DeleteTsiusuUseCase)
    private readonly deleteTsiusuUseCase: DeleteTsiusuUseCase,
  ) {}

  create(createTsiusuDto: CreateTsiusuDto) {
    return this.createTsiusuUseCase.execute(createTsiusuDto);
  }

  findAll(query: QueryTsiusuDto) {
    return this.findAllTsiusuUseCase.execute(query);
  }

  findOne(id: number) {
    return this.findOneTsiusuUseCase.execute(id);
  }

  update(id: number, updateTsiusuDto: UpdateTsiusuDto) {
    return this.updateTsiusuUseCase.execute(id, updateTsiusuDto);
  }

  remove(id: number) {
    return this.deleteTsiusuUseCase.execute(id);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class NotImplementedUseCase {
  execute() {
    throw new Error('Method not implemented.');
  }
}

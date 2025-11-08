import { Injectable } from '@nestjs/common';

@Injectable()
export class NotImplementedUseCase {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(..._: any[]): any {
    throw new Error('Not implemented');
  }
}

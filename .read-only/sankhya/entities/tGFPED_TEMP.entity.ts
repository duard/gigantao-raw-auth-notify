import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPED_TEMP', ['nunota'], { unique: true })
@Entity('TGFPED_TEMP', { schema: 'SANKHYA' })
export class TgfpedTempEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('float', {
    name: 'PERCAATENDER',
    precision: 53,
    default: () => '(0)',
  })
  percaatender: number;

  @Column('money', { name: 'VLRAATENDER', default: () => '(0)' })
  vlraatender: number;
}

import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFUMA', ['coduma'], { unique: true })
@Entity('TGFUMA', { schema: 'SANKHYA' })
export class TgfumaEntity {
  @Column('int', { primary: true, name: 'CODUMA' })
  coduma: number;

  @Column('varchar', { name: 'DESCRUMA', length: 40 })
  descruma: string;

  @Column('float', {
    name: 'PESO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  peso: number | null;
}

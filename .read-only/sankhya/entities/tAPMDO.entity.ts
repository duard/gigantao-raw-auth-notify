import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAPMDO', ['nometab'], { unique: true })
@Entity('TAPMDO', { schema: 'SANKHYA' })
export class TapmdoEntity {
  @Column('char', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('smallint', { name: 'CODFORMTOP', nullable: true })
  codformtop: number | null;

  @Column('smallint', { name: 'CODFORMVAL', nullable: true })
  codformval: number | null;

  @Column('varchar', {
    name: 'DIMENSAO',
    nullable: true,
    length: 1,
    default: () => "'U'",
  })
  dimensao: string | null;
}

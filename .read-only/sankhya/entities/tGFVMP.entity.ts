import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFVMP', ['codprod'], { unique: true })
@Entity('TGFVMP', { schema: 'SANKHYA' })
export class TgfvmpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'VERSAO', length: 30 })
  versao: string;
}

import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMOPC', ['codmoeda', 'codparc'], { unique: true })
@Entity('TGFMOPC', { schema: 'SANKHYA' })
export class TgfmopcEntity {
  @Column('int', { primary: true, name: 'CODMOEDA' })
  codmoeda: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'DESCRMOEDA', length: 50 })
  descrmoeda: string;

  @Column('varchar', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;
}

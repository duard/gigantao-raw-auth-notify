import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRASTEMP', ['codprod', 'codemp'], { unique: true })
@Entity('TGFRASTEMP', { schema: 'SANKHYA' })
export class TgfrastempEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'TIPORASTR', nullable: true, length: 1 })
  tiporastr: string | null;
}

import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSPE', ['codtipoper', 'sequencia'], { unique: true })
@Index('UK_TGFSPE_REGRA', ['codtipoper', 'codemp'], { unique: true })
@Entity('TGFSPE', { schema: 'SANKHYA' })
export class TgfspeEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODEMP', nullable: true, unique: true })
  codemp: number | null;

  @Column('varchar', { name: 'SERIE', nullable: true, length: 3 })
  serie: string | null;
}

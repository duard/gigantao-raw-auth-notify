import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSTMM_LOG', ['codemp', 'codprod', 'referencia'], { unique: true })
@Entity('TGFSTMM_LOG', { schema: 'SANKHYA' })
export class TgfstmmLogEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { name: 'MSGERR', nullable: true, length: 3103 })
  msgerr: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}

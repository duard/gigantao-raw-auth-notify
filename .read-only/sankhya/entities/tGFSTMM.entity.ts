import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSTMM', ['codemp', 'codprod', 'referencia'], { unique: true })
@Entity('TGFSTMM', { schema: 'SANKHYA' })
export class TgfstmmEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'QTDEST', nullable: true, precision: 53 })
  qtdest: number | null;

  @Column('float', { name: 'BCSTRETTOTAL', nullable: true, precision: 53 })
  bcstrettotal: number | null;

  @Column('float', { name: 'VICMSSTRETTOTAL', nullable: true, precision: 53 })
  vicmsstrettotal: number | null;

  @Column('float', { name: 'BCSTRETUNIT', nullable: true, precision: 53 })
  bcstretunit: number | null;

  @Column('float', { name: 'VICMSSTRETUNIT', nullable: true, precision: 53 })
  vicmsstretunit: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}

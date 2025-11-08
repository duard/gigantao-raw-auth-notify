import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfpmtEntity } from './tGFPMT.entity';

@Index('PK_TGFNPMT', ['codemp', 'dtmtp', 'codprod', 'nunotacompra'], {
  unique: true,
})
@Entity('TGFNPMT', { schema: 'SANKHYA' })
export class TgfnpmtEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTMTP' })
  dtmtp: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'NUNOTACOMPRA' })
  nunotacompra: number;

  @Column('float', { name: 'BASESUBSTIT', nullable: true, precision: 53 })
  basesubstit: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'BASESUBSTITUN', nullable: true, precision: 53 })
  basesubstitun: number | null;

  @Column('float', { name: 'QTDREC', nullable: true, precision: 53 })
  qtdrec: number | null;

  @Column('float', { name: 'BASESUBSTITREC', nullable: true, precision: 53 })
  basesubstitrec: number | null;

  @Column('char', { name: 'DIGITADO', nullable: true, length: 1 })
  digitado: string | null;

  @ManyToOne(() => TgfpmtEntity, (tgfpmtEntity) => tgfpmtEntity.tgfnpmts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTMTP', referencedColumnName: 'dtmtp' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tgfpmt: TgfpmtEntity;
}

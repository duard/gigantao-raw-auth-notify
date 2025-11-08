import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsipaiEntity } from './tSIPAI.entity';

@Index('PK_TGFEXP', ['nrodeclaracao', 'nrore', 'nunota'], { unique: true })
@Index('TGFEXP_I02', ['nrore', 'nunota'], {})
@Index('TGFEXP_I03', ['nrodeclaracao'], {})
@Index('TGFEXP_I04', ['nroconhec'], {})
@Entity('TGFEXP', { schema: 'SANKHYA' })
export class TgfexpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'NATUREZA', length: 1, default: () => "'1'" })
  natureza: string;

  @Column('varchar', {
    primary: true,
    name: 'NRORE',
    length: 12,
    default: () => "'0'",
  })
  nrore: string;

  @Column('datetime', { name: 'DTRE', nullable: true })
  dtre: Date | null;

  @Column('varchar', {
    primary: true,
    name: 'NRODECLARACAO',
    length: 14,
    default: () => "'0'",
  })
  nrodeclaracao: string;

  @Column('datetime', { name: 'DTDECLARACAO', nullable: true })
  dtdeclaracao: Date | null;

  @Column('datetime', { name: 'DTAVERBACAO', nullable: true })
  dtaverbacao: Date | null;

  @Column('int', { name: 'NROCOMPROVANTE', nullable: true })
  nrocomprovante: number | null;

  @Column('datetime', { name: 'DTCOMPROVANTE', nullable: true })
  dtcomprovante: Date | null;

  @Column('varchar', { name: 'NROCONHEC', nullable: true, length: 18 })
  nroconhec: string | null;

  @Column('datetime', { name: 'DTCONHEC', nullable: true })
  dtconhec: Date | null;

  @Column('smallint', { name: 'TIPOCONHEC', nullable: true })
  tipoconhec: number | null;

  @Column('smallint', { name: 'TIPODEC', nullable: true })
  tipodec: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfexps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tgfexps)
  @JoinColumn([{ name: 'CODPAISDESTINO', referencedColumnName: 'codpais' }])
  codpaisdestino: TsipaiEntity;
}

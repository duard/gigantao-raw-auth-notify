import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TccconEntity } from './tCCCON.entity';
import { TccforEntity } from './tCCFOR.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgftpvEntity } from './tGFTPV.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsimoeEntity } from './tSIMOE.entity';

@Index('PK_TCCNEG', ['codcc', 'numneg'], { unique: true })
@Entity('TCCNEG', { schema: 'SANKHYA' })
export class TccnegEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('int', { name: 'QTDPAR' })
  qtdpar: number;

  @Column('float', { name: 'VLRPAR', nullable: true, precision: 53 })
  vlrpar: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('datetime', { name: 'DATAINI' })
  dataini: Date;

  @Column('int', { name: 'PERIODO', nullable: true })
  periodo: number | null;

  @Column('int', { primary: true, name: 'NUMNEG' })
  numneg: number;

  @Column('varchar', { name: 'FORPAG', nullable: true, length: 3103 })
  forpag: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 3103 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPVENC', length: 1 })
  tipvenc: string;

  @Column('smallint', { name: 'DIAVENC', nullable: true })
  diavenc: number | null;

  @Column('char', { name: 'PROVIVAR', length: 1, default: () => "'N'" })
  provivar: string;

  @ManyToOne(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.tccnegs)
  @JoinColumn([
    { name: 'CODTIPVENDA', referencedColumnName: 'codtipvenda' },
    { name: 'DHTIPVENDA', referencedColumnName: 'dhalter' },
  ])
  tgftpv: TgftpvEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tccnegs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tccnegs)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tccnegs)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TccconEntity, (tccconEntity) => tccconEntity.tccnegs)
  @JoinColumn([{ name: 'CODCC', referencedColumnName: 'codcc' }])
  codcc2: TccconEntity;

  @ManyToOne(() => TccforEntity, (tccforEntity) => tccforEntity.tccnegs)
  @JoinColumn([{ name: 'CODFORM', referencedColumnName: 'codform' }])
  codform: TccforEntity;
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TccconEntity } from './tCCCON.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TccresEntity } from './tCCRES.entity';

@Index('PK_TCCEMP', ['codempree'], { unique: true })
@Entity('TCCEMP', { schema: 'SANKHYA' })
export class TccempEntity {
  @Column('int', { primary: true, name: 'CODEMPREE' })
  codempree: number;

  @Column('varchar', { name: 'NOMEMPREE', length: 40 })
  nomempree: string;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'CEP', length: 8 })
  cep: string;

  @Column('varchar', { name: 'CAIXAPOSTAL', nullable: true, length: 10 })
  caixapostal: string | null;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('int', { name: 'QTDTORRES', nullable: true })
  qtdtorres: number | null;

  @Column('int', { name: 'QTDUNIDANDAR', nullable: true })
  qtdunidandar: number | null;

  @Column('int', { name: 'QTDUNIDADES', nullable: true })
  qtdunidades: number | null;

  @Column('int', { name: 'AREATERRENO', nullable: true })
  areaterreno: number | null;

  @Column('varchar', { name: 'REGISCARTO', nullable: true, length: 25 })
  regiscarto: string | null;

  @Column('varchar', { name: 'MATRIMOVEL', nullable: true, length: 25 })
  matrimovel: string | null;

  @Column('varchar', { name: 'CARACTERRENO', nullable: true, length: 2500 })
  caracterreno: string | null;

  @Column('varchar', { name: 'CARACINCORP', nullable: true, length: 2500 })
  caracincorp: string | null;

  @Column('int', { name: 'QTDPAVIMENTO', nullable: true })
  qtdpavimento: number | null;

  @Column('int', { name: 'QTDANDAR', nullable: true })
  qtdandar: number | null;

  @Column('int', { name: 'INDNATTEMP', nullable: true })
  indnattemp: number | null;

  @Column('int', { name: 'INDTIPUNI', nullable: true })
  indtipuni: number | null;

  @OneToMany(() => TccconEntity, (tccconEntity) => tccconEntity.codempree)
  tcccons: TccconEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tccemps)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tccemps)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tccemps)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tccemps)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @OneToMany(() => TccresEntity, (tccresEntity) => tccresEntity.codempree2)
  tccres: TccresEntity[];
}

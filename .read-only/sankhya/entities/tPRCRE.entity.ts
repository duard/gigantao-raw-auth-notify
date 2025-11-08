import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TprcprEntity } from './tPRCPR.entity';
import { TpreqpEntity } from './tPREQP.entity';
import { TprmqpEntity } from './tPRMQP.entity';
import { TprrhpEntity } from './tPRRHP.entity';
import { TprrwaEntity } from './tPRRWA.entity';
import { TprrxpEntity } from './tPRRXP.entity';
import { TprrxwEntity } from './tPRRXW.entity';

@Index('PK_TPRCRE', ['codcre'], { unique: true })
@Entity('TPRCRE', { schema: 'SANKHYA' })
export class TprcreEntity {
  @Column('int', { primary: true, name: 'CODCRE' })
  codcre: number;

  @Column('int', { name: 'CODCREPAI' })
  codcrepai: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { name: 'CODSERVAPONTA' })
  codservaponta: number;

  @Column('char', { name: 'TIPOAPONTAUSO', length: 1 })
  tipoapontauso: string;

  @Column('char', { name: 'PARAMSETUP', length: 1, default: () => "'N'" })
  paramsetup: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'N'" })
  analitico: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('smallint', { name: 'DECQTD', default: () => '(2)' })
  decqtd: number;

  @OneToMany(() => TprcprEntity, (tprcprEntity) => tprcprEntity.codcre2)
  tprcprs: TprcprEntity[];

  @OneToMany(() => TpreqpEntity, (tpreqpEntity) => tpreqpEntity.codcre)
  tpreqps: TpreqpEntity[];

  @OneToMany(() => TprmqpEntity, (tprmqpEntity) => tprmqpEntity.codcre)
  tprmqps: TprmqpEntity[];

  @OneToMany(() => TprrhpEntity, (tprrhpEntity) => tprrhpEntity.codcre)
  tprrhps: TprrhpEntity[];

  @OneToMany(() => TprrwaEntity, (tprrwaEntity) => tprrwaEntity.codcre)
  tprrwas: TprrwaEntity[];

  @OneToMany(() => TprrxpEntity, (tprrxpEntity) => tprrxpEntity.codcre2)
  tprrxps: TprrxpEntity[];

  @OneToMany(() => TprrxwEntity, (tprrxwEntity) => tprrxwEntity.codcre2)
  tprrxws: TprrxwEntity[];
}

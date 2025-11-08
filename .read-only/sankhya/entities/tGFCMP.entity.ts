import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfccfEntity } from './tGFCCF.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfnfcEntity } from './tGFNFC.entity';

@Index('PK_TGFCMP', ['codcmp'], { unique: true })
@Entity('TGFCMP', { schema: 'SANKHYA' })
export class TgfcmpEntity {
  @Column('int', { primary: true, name: 'CODCMP' })
  codcmp: number;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'B'" })
  tipo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('float', { name: 'QTDE', nullable: true, precision: 53 })
  qtde: number | null;

  @Column('float', { name: 'VLRBONIF', nullable: true, precision: 53 })
  vlrbonif: number | null;

  @Column('datetime', { name: 'DTPGTOBONIF', nullable: true })
  dtpgtobonif: Date | null;

  @Column('float', { name: 'PERCGER', nullable: true, precision: 53 })
  percger: number | null;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'QTDMIN', nullable: true, precision: 53 })
  qtdmin: number | null;

  @Column('float', { name: 'VLRMIN', nullable: true, precision: 53 })
  vlrmin: number | null;

  @Column('smallint', { name: 'QTDREPET', nullable: true })
  qtdrepet: number | null;

  @Column('float', { name: 'METACLIENTE', precision: 53, default: () => '(0)' })
  metacliente: number;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'N'" })
  ativa: string;

  @Column('char', { name: 'DIVISAO', nullable: true, length: 1 })
  divisao: string | null;

  @Column('float', { name: 'QTDMAXBONIF', nullable: true, precision: 53 })
  qtdmaxbonif: number | null;

  @Column('float', { name: 'QTDMAXPORPD', nullable: true, precision: 53 })
  qtdmaxporpd: number | null;

  @OneToMany(() => TgfccfEntity, (tgfccfEntity) => tgfccfEntity.codcmp2)
  tgfccfs: TgfccfEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcmps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcmps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcmps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfnfcEntity, (tgfnfcEntity) => tgfnfcEntity.codcmp2)
  tgfnfcs: TgfnfcEntity[];
}

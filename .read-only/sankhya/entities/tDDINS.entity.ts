import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TddligEntity } from './tDDLIG.entity';
import { TddpthEntity } from './tDDPTH.entity';
import { TrdcamEntity } from './tRDCAM.entity';
import { TrdtelEntity } from './tRDTEL.entity';
import { TssitpEntity } from './tSSITP.entity';

@Index('IX_TDDINS_CONTROLE_93EFC', ['nuinstancia', 'controle'], {})
@Index('IX_TDDINS_NOMEINSTANCIA_85C88', ['descrinstancia', 'nomeinstancia'], {})
@Index('IX_TDDINS_TIPOFORM_E9D76', ['nometab', 'tipoform'], {})
@Index('PK_TDDINS', ['nuinstancia'], { unique: true })
@Index('TDDINS_EXT_I001', ['nometab'], {})
@Index('TDDINS_I01', ['nuinstanciaext'], {})
@Index('TDDINS_PAI_I001', ['nuinstanciapai'], {})
@Entity('TDDINS', { schema: 'SANKHYA' })
export class TddinsEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUINSTANCIA',
    precision: 10,
    scale: 0,
  })
  nuinstancia: number;

  @Column('varchar', { name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { name: 'NOMEINSTANCIA', length: 30 })
  nomeinstancia: string;

  @Column('varchar', { name: 'DESCRINSTANCIA', length: 255 })
  descrinstancia: string;

  @Column('varchar', { name: 'RAIZ', length: 1, default: () => "'N'" })
  raiz: string;

  @Column('varchar', { name: 'FILTRO', length: 1, default: () => "'N'" })
  filtro: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;

  @Column('numeric', {
    name: 'NUINSTANCIAPAI',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  nuinstanciapai: number | null;

  @Column('varchar', { name: 'NOMESCRIPTCHAVE', nullable: true, length: 50 })
  nomescriptchave: string | null;

  @Column('numeric', {
    name: 'NUINSTANCIAEXT',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  nuinstanciaext: number | null;

  @Column('char', { name: 'ADICIONAL', nullable: true, length: 1 })
  adicional: string | null;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 400 })
  resourceid: string | null;

  @Column('char', { name: 'DEFINICAOINST', length: 1, default: () => "'L'" })
  definicaoinst: string;

  @Column('char', { name: 'ISLIB', length: 1, default: () => "'S'" })
  islib: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DESCRTELA', nullable: true, length: 3103 })
  descrtela: string | null;

  @Column('varchar', { name: 'CATEGORIA', nullable: true, length: 200 })
  categoria: string | null;

  @Column('char', { name: 'TIPOFORM', nullable: true, length: 2 })
  tipoform: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.tddins)
  @JoinColumn([{ name: 'NUINSTANCIAPAI', referencedColumnName: 'nuinstancia' }])
  nuinstanciapai2: TddinsEntity;

  @OneToMany(() => TddinsEntity, (tddinsEntity) => tddinsEntity.nuinstanciapai2)
  tddins: TddinsEntity[];

  @OneToMany(() => TddligEntity, (tddligEntity) => tddligEntity.nuinstorig2)
  tddligs: TddligEntity[];

  @OneToMany(() => TddligEntity, (tddligEntity) => tddligEntity.nuinstdest2)
  tddligs2: TddligEntity[];

  @OneToMany(() => TddpthEntity, (tddpthEntity) => tddpthEntity.nuinstancia)
  tddpths: TddpthEntity[];

  @OneToMany(() => TrdcamEntity, (trdcamEntity) => trdcamEntity.nuinstancia)
  trdcams: TrdcamEntity[];

  @OneToMany(() => TrdcamEntity, (trdcamEntity) => trdcamEntity.nuinstapres)
  trdcams2: TrdcamEntity[];

  @OneToMany(() => TrdtelEntity, (trdtelEntity) => trdtelEntity.nuinstancia)
  trdtels: TrdtelEntity[];

  @OneToMany(() => TssitpEntity, (tssitpEntity) => tssitpEntity.nuinstanciacad)
  tssitps: TssitpEntity[];
}

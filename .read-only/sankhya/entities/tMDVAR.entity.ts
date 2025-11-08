import {
    Column,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
} from 'typeorm';
import { TmdcamEntity } from './tMDCAM.entity';
import { TmdgruEntity } from './tMDGRU.entity';
import { TmdvreEntity } from './tMDVRE.entity';

@Index('PK_TMDVAR', ['codvar'], { unique: true })
@Entity('TMDVAR', { schema: 'SANKHYA' })
export class TmdvarEntity {
  @Column('int', { primary: true, name: 'CODVAR' })
  codvar: number;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'NOMEVAR', length: 40 })
  nomevar: string;

  @Column('char', { name: 'DESCRVAR', nullable: true, length: 80 })
  descrvar: string | null;

  @Column('char', { name: 'NOMEEXIB', length: 40 })
  nomeexib: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'V'" })
  tipo: string;

  @Column('char', { name: 'TIPOSAIDA', length: 1 })
  tiposaida: string;

  @Column('int', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('int', {
    name: 'PERIODICIDADE',
    nullable: true,
    default: () => '(0)',
  })
  periodicidade: number | null;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('int', { name: 'CODGRUPO' })
  codgrupo: number;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('char', { name: 'EXPDTREF', length: 3103 })
  expdtref: string;

  @Column('char', { name: 'VALORPADRAO', length: 1, default: () => "'N'" })
  valorpadrao: string;

  @Column('char', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'N'" })
  ativa: string;

  @Column('datetime', { name: 'ULTRESOL', nullable: true })
  ultresol: Date | null;

  @Column('datetime', { name: 'PROXRESOL', nullable: true })
  proxresol: Date | null;

  @Column('char', { name: 'CFGDTRESOL', length: 1000 })
  cfgdtresol: string;

  @Column('int', { name: 'CODCON', nullable: true })
  codcon: number | null;

  @ManyToMany(() => TmdcamEntity, (tmdcamEntity) => tmdcamEntity.tmdvars)
  @JoinTable({
    name: 'TMDCPV',
    joinColumns: [{ name: 'CODVAR', referencedColumnName: 'codvar' }],
    inverseJoinColumns: [{ name: 'CODCAM', referencedColumnName: 'codcam' }],
    schema: 'SANKHYA',
  })
  tmdcams: TmdcamEntity[];

  @ManyToMany(() => TmdgruEntity, (tmdgruEntity) => tmdgruEntity.tmdvars)
  tmdgrus: TmdgruEntity[];

  @OneToMany(() => TmdvreEntity, (tmdvreEntity) => tmdvreEntity.codvar)
  tmdvres: TmdvreEntity[];
}

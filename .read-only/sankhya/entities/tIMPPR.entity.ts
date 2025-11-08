import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TimprfEntity } from './tIMPRF.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TimptpEntity } from './tIMPTP.entity';

@Index('PK_TIMPPR', ['pprcodigo'], { unique: true })
@Entity('TIMPPR', { schema: 'SANKHYA' })
export class TimpprEntity {
  @Column('int', { primary: true, name: 'PPRCODIGO' })
  pprcodigo: number;

  @Column('varchar', { name: 'PPRNOME', length: 120 })
  pprnome: string;

  @Column('char', { name: 'PPRTIPO', length: 1, default: () => "'0'" })
  pprtipo: string;

  @Column('char', { name: 'PPRSEXO', length: 1 })
  pprsexo: string;

  @Column('datetime', { name: 'PPRDATADENASCIMENTO', nullable: true })
  pprdatadenascimento: Date | null;

  @Column('varchar', { name: 'PPRENDERECO', nullable: true, length: 50 })
  pprendereco: string | null;

  @Column('varchar', { name: 'PPRCEP', nullable: true, length: 8 })
  pprcep: string | null;

  @Column('varchar', { name: 'PPRTELEFONES', nullable: true, length: 50 })
  pprtelefones: string | null;

  @Column('varchar', { name: 'PPRRAMAL', nullable: true, length: 10 })
  pprramal: string | null;

  @Column('varchar', { name: 'PPREMAIL', nullable: true, length: 50 })
  ppremail: string | null;

  @Column('varchar', { name: 'PPROBSERVACAO', nullable: true, length: 120 })
  pprobservacao: string | null;

  @Column('float', { name: 'PPRRENDA', nullable: true, precision: 53 })
  pprrenda: number | null;

  @Column('float', { name: 'PPRRENDACONJUGE', nullable: true, precision: 53 })
  pprrendaconjuge: number | null;

  @Column('float', { name: 'PPRPOUPANCA', nullable: true, precision: 53 })
  pprpoupanca: number | null;

  @Column('char', { name: 'PPRRENDAFORMAL', nullable: true, length: 1 })
  pprrendaformal: string | null;

  @Column('char', { name: 'PPRRENDACNJFORMAL', nullable: true, length: 1 })
  pprrendacnjformal: string | null;

  @Column('varchar', { name: 'PPRCOMPLEMENTO', nullable: true, length: 100 })
  pprcomplemento: string | null;

  @Column('varchar', { name: 'PPRCPFCNPJ', nullable: true, length: 14 })
  pprcpfcnpj: string | null;

  @Column('varchar', { name: 'PPRTIPOCLIENTE', nullable: true, length: 1 })
  pprtipocliente: string | null;

  @Column('datetime', { name: 'PPRDHALTER', nullable: true })
  pprdhalter: Date | null;

  @Column('datetime', { name: 'PPRDHINCLUSAO', nullable: true })
  pprdhinclusao: Date | null;

  @Column('varchar', { name: 'PPRTABELAORIG', nullable: true, length: 40 })
  pprtabelaorig: string | null;

  @Column('char', { name: 'PPRLEGADO', nullable: true, length: 1 })
  pprlegado: string | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.timpprs)
  @JoinColumn([{ name: 'PPRCIDADE', referencedColumnName: 'codcid' }])
  pprcidade: TsicidEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.timpprs)
  @JoinColumn([{ name: 'PPRBAIRRO', referencedColumnName: 'codbai' }])
  pprbairro: TsibaiEntity;

  @ManyToOne(() => TimprfEntity, (timprfEntity) => timprfEntity.timpprs)
  @JoinColumn([{ name: 'PPRPROFCONJUGE', referencedColumnName: 'prfcodigo' }])
  pprprofconjuge: TimprfEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timpprs)
  @JoinColumn([{ name: 'PPRUSUARIO', referencedColumnName: 'codusu' }])
  pprusuario: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timpprs2)
  @JoinColumn([{ name: 'PPRUSUALTER', referencedColumnName: 'codusu' }])
  pprusualter: TsiusuEntity;

  @ManyToOne(() => TimprfEntity, (timprfEntity) => timprfEntity.timpprs2)
  @JoinColumn([{ name: 'PPRPROFISSAO', referencedColumnName: 'prfcodigo' }])
  pprprofissao: TimprfEntity;

  @ManyToOne(() => TimfacEntity, (timfacEntity) => timfacEntity.timpprs)
  @JoinColumn([{ name: 'PPRFACINI', referencedColumnName: 'faccodigo' }])
  pprfacini: TimfacEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.timpprs)
  @JoinColumn([{ name: 'PPRCODEND', referencedColumnName: 'codend' }])
  pprcodend: TsiendEntity;

  @OneToMany(() => TimptpEntity, (timptpEntity) => timptpEntity.ptpprospect2)
  timptps: TimptpEntity[];
}

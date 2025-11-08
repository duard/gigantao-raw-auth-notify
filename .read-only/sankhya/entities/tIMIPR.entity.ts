import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimimbEntity } from './tIMIMB.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimmtdEntity } from './tIMMTD.entity';
import { TimchvEntity } from './tIMCHV.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimmdsEntity } from './tIMMDS.entity';

@Index('PK_TIMIPR', ['iprfac', 'iprimovel'], { unique: true })
@Entity('TIMIPR', { schema: 'SANKHYA' })
export class TimiprEntity {
  @Column('int', { primary: true, name: 'IPRFAC' })
  iprfac: number;

  @Column('int', { primary: true, name: 'IPRIMOVEL' })
  iprimovel: number;

  @Column('int', { name: 'IPRUSUARIO', default: () => '(0)' })
  iprusuario: number;

  @Column('datetime', { name: 'IPRDATA', default: () => 'getdate()' })
  iprdata: Date;

  @Column('char', { name: 'IPRCHAVE', length: 1, default: () => "'N'" })
  iprchave: string;

  @Column('text', { name: 'IPROBSDEVOLUCAO', nullable: true })
  iprobsdevolucao: string | null;

  @Column('datetime', { name: 'IPRDHENTCHAVES', nullable: true })
  iprdhentchaves: Date | null;

  @Column('datetime', { name: 'IPRDHDEVCHAVES', nullable: true })
  iprdhdevchaves: Date | null;

  @Column('char', { name: 'IPRPROPESTAGIO', nullable: true, length: 1 })
  iprpropestagio: string | null;

  @Column('char', { name: 'IPRPROPPARA', nullable: true, length: 1 })
  iprproppara: string | null;

  @Column('float', { name: 'IPRPROPVLRMIN', nullable: true, precision: 53 })
  iprpropvlrmin: number | null;

  @Column('datetime', { name: 'IPRDHPROP', nullable: true })
  iprdhprop: Date | null;

  @Column('float', { name: 'IPRPROPVLRMAX', nullable: true, precision: 53 })
  iprpropvlrmax: number | null;

  @Column('datetime', { name: 'IPRPROPDTLIM', nullable: true })
  iprpropdtlim: Date | null;

  @Column('char', { name: 'IPRLEGADO', nullable: true, length: 1 })
  iprlegado: string | null;

  @Column('varchar', { name: 'IPRTABELAORIG', nullable: true, length: 40 })
  iprtabelaorig: string | null;

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timiprs)
  @JoinColumn([{ name: 'IPRIMOBDEV', referencedColumnName: 'imbcodigo' }])
  iprimobdev: TimimbEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timiprs)
  @JoinColumn([{ name: 'IPRCODUSUDEV', referencedColumnName: 'codusu' }])
  iprcodusudev: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timiprs2)
  @JoinColumn([{ name: 'IPRCODUSUENT', referencedColumnName: 'codusu' }])
  iprcodusuent: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timiprs3)
  @JoinColumn([{ name: 'IPRCODUSUPROP', referencedColumnName: 'codusu' }])
  iprcodusuprop: TsiusuEntity;

  @ManyToOne(() => TimmtdEntity, (timmtdEntity) => timmtdEntity.timiprs)
  @JoinColumn([{ name: 'IPRMOTIVO', referencedColumnName: 'mtdcodigo' }])
  iprmotivo: TimmtdEntity;

  @ManyToOne(() => TimchvEntity, (timchvEntity) => timchvEntity.timiprs)
  @JoinColumn([{ name: 'IPRCHVENTREGUE', referencedColumnName: 'codchv' }])
  iprchventregue: TimchvEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timiprs)
  @JoinColumn([{ name: 'IPRIMOVEL', referencedColumnName: 'imvcodigo' }])
  iprimovel2: TimimvEntity;

  @ManyToOne(() => TimfacEntity, (timfacEntity) => timfacEntity.timiprs)
  @JoinColumn([{ name: 'IPRFAC', referencedColumnName: 'faccodigo' }])
  iprfac2: TimfacEntity;

  @ManyToOne(() => TimmdsEntity, (timmdsEntity) => timmdsEntity.timiprs)
  @JoinColumn([{ name: 'IPRMTVDESIST', referencedColumnName: 'mdscodigo' }])
  iprmtvdesist: TimmdsEntity;
}

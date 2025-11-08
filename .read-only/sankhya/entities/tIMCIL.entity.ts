import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimimvEntity } from './tIMIMV.entity';
import { TimhcbEntity } from './tIMHCB.entity';
import { TimcipEntity } from './tIMCIP.entity';

@Index('PK_TIMCIL', ['cilcodigo', 'cilimovel'], { unique: true })
@Entity('TIMCIL', { schema: 'SANKHYA' })
export class TimcilEntity {
  @Column('int', { primary: true, name: 'CILCODIGO' })
  cilcodigo: number;

  @Column('int', { primary: true, name: 'CILIMOVEL' })
  cilimovel: number;

  @Column('varchar', { name: 'CILFORMAPAGTO', length: 1 })
  cilformapagto: string;

  @Column('varchar', { name: 'CILCONTA', length: 1 })
  cilconta: string;

  @Column('varchar', { name: 'CILREGISTRO', length: 30 })
  cilregistro: string;

  @Column('varchar', { name: 'CILRESPONSAVEL', length: 1 })
  cilresponsavel: string;

  @Column('smallint', { name: 'CILANO' })
  cilano: number;

  @Column('smallint', { name: 'CILPARCELAS' })
  cilparcelas: number;

  @Column('int', { name: 'CILPARCRESPONSAVEL', nullable: true })
  cilparcresponsavel: number | null;

  @Column('float', { name: 'CILVLORIGEM', precision: 53 })
  cilvlorigem: number;

  @Column('varchar', { name: 'CILRECEBEDE', length: 1 })
  cilrecebede: string;

  @Column('varchar', { name: 'CILREPASSAPARA', length: 1 })
  cilrepassapara: string;

  @Column('float', { name: 'CILTAXAORI', nullable: true, precision: 53 })
  ciltaxaori: number | null;

  @Column('float', { name: 'CILTAXAADM', nullable: true, precision: 53 })
  ciltaxaadm: number | null;

  @Column('float', { name: 'CILVLEXPEDIENTE', nullable: true, precision: 53 })
  cilvlexpediente: number | null;

  @Column('datetime', { name: 'CILDATAINICIO', nullable: true })
  cildatainicio: Date | null;

  @Column('char', { name: 'CILLEGADO', nullable: true, length: 1 })
  cillegado: string | null;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timcils, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CILIMOVEL', referencedColumnName: 'imvcodigo' }])
  cilimovel2: TimimvEntity;

  @ManyToOne(() => TimhcbEntity, (timhcbEntity) => timhcbEntity.timcils)
  @JoinColumn([{ name: 'CILORIGEM', referencedColumnName: 'hcbcodigo' }])
  cilorigem: TimhcbEntity;

  @OneToMany(() => TimcipEntity, (timcipEntity) => timcipEntity.timcil)
  timcips: TimcipEntity[];
}

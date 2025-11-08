import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpemprepEntity } from './tFPEMPREP.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEQP', ['codeqp'], { unique: true })
@Entity('TFPEQP', { schema: 'SANKHYA' })
export class TfpeqpEntity {
  @Column('smallint', { primary: true, name: 'CODEQP' })
  codeqp: number;

  @Column('varchar', { name: 'DESCREQP', length: 100 })
  descreqp: string;

  @Column('smallint', { name: 'MARCA' })
  marca: number;

  @Column('varchar', { name: 'IP', nullable: true, length: 100 })
  ip: string | null;

  @Column('int', { name: 'PORTA', nullable: true })
  porta: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'SERIAL', length: 17 })
  serial: string;

  @Column('int', { name: 'NSR', nullable: true })
  nsr: number | null;

  @Column('char', { name: 'AUTH', length: 1, default: () => "'N'" })
  auth: string;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 30 })
  usuario: string | null;

  @Column('varchar', { name: 'SENHA', nullable: true, length: 32 })
  senha: string | null;

  @Column('char', { name: 'HRVERAO', length: 1, default: () => "'N'" })
  hrverao: string;

  @Column('datetime', { name: 'DTINICHRVERAO', nullable: true })
  dtinichrverao: Date | null;

  @Column('datetime', { name: 'DTFINALHRVERAO', nullable: true })
  dtfinalhrverao: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DATAINI', nullable: true })
  dataini: Date | null;

  @Column('char', {
    name: 'REP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  rep: string | null;

  @OneToMany(
    () => TfpemprepEntity,
    (tfpemprepEntity) => tfpemprepEntity.codeqp2,
  )
  tfpempreps: TfpemprepEntity[];

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpeqps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpeqps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

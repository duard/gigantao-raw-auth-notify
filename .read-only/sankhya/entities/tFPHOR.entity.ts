import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpcghEntity } from './tFPCGH.entity';
import { TfppprgEntity } from './tFPPPRG.entity';

@Index('PK_TFPHOR', ['codcargahor', 'diasem', 'turno'], { unique: true })
@Entity('TFPHOR', { schema: 'SANKHYA' })
export class TfphorEntity {
  @Column('smallint', { primary: true, name: 'CODCARGAHOR' })
  codcargahor: number;

  @Column('smallint', { primary: true, name: 'DIASEM' })
  diasem: number;

  @Column('smallint', { name: 'ENTRADA', nullable: true })
  entrada: number | null;

  @Column('smallint', { name: 'SAIDA', nullable: true })
  saida: number | null;

  @Column('char', {
    name: 'DESCANSOSEM',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  descansosem: string | null;

  @Column('smallint', { primary: true, name: 'TURNO' })
  turno: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'VALENTRADA', length: 1, default: () => "'S'" })
  valentrada: string;

  @Column('char', { name: 'VALSAIDA', length: 1, default: () => "'S'" })
  valsaida: string;

  @Column('smallint', { name: 'PAUSA', nullable: true })
  pausa: number | null;

  @Column('smallint', { name: 'DURJORNADAESOCIAL', nullable: true })
  durjornadaesocial: number | null;

  @Column('varchar', { name: 'CODCARGAHORESOCIAL', nullable: true, length: 30 })
  codcargahoresocial: string | null;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfphors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor2: TfpcghEntity;

  @OneToMany(() => TfppprgEntity, (tfppprgEntity) => tfppprgEntity.tfphor)
  tfppprgs: TfppprgEntity[];
}

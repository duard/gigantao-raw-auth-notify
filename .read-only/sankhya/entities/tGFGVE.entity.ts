import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfgvaEntity } from './tGFGVA.entity';
import { TgfgvcEntity } from './tGFGVC.entity';

@Index('PK_TGFGVE_NUAPURACAO', ['nuapuracao'], { unique: true })
@Entity('TGFGVE', { schema: 'SANKHYA' })
export class TgfgveEntity {
  @Column('int', { primary: true, name: 'NUAPURACAO' })
  nuapuracao: number;

  @Column('int', { name: 'NUPREACORDO', nullable: true })
  nupreacordo: number | null;

  @Column('float', { name: 'VLRQTDMOV', nullable: true, precision: 53 })
  vlrqtdmov: number | null;

  @Column('float', { name: 'VLRAPURADO', nullable: true, precision: 53 })
  vlrapurado: number | null;

  @Column('float', { name: 'METAATINGIDA', nullable: true, precision: 53 })
  metaatingida: number | null;

  @Column('float', { name: 'PERCPROXMETA', nullable: true, precision: 53 })
  percproxmeta: number | null;

  @Column('float', { name: 'PROXMETA', nullable: true, precision: 53 })
  proxmeta: number | null;

  @Column('varchar', { name: 'TIPOCRITERIO', nullable: true, length: 1 })
  tipocriterio: string | null;

  @Column('varchar', { name: 'TIPOMETA', nullable: true, length: 1 })
  tipometa: string | null;

  @Column('float', { name: 'VERBAAPURADA', nullable: true, precision: 53 })
  verbaapurada: number | null;

  @OneToMany(() => TgfgvaEntity, (tgfgvaEntity) => tgfgvaEntity.nuapuracao2)
  tgfgvas: TgfgvaEntity[];

  @ManyToOne(() => TgfgvcEntity, (tgfgvcEntity) => tgfgvcEntity.tgfgves, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCRITERIO', referencedColumnName: 'nucriterio' }])
  nucriterio: TgfgvcEntity;
}

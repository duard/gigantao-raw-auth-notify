import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPACD', ['id'], { unique: true })
@Entity('TFPACD', { schema: 'SANKHYA' })
export class TfpacdEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DHSOLICIT' })
  dhsolicit: Date;

  @Column('varchar', { name: 'CAMPO', length: 20 })
  campo: string;

  @Column('varchar', { name: 'VALOR', length: 100 })
  valor: string;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('varchar', { name: 'VALORANTIGO', nullable: true, length: 100 })
  valorantigo: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpacds)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}

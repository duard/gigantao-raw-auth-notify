import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfasnEntity } from './tGFASN.entity';

@Index('PK_TGFFSN', ['nuanexo', 'nufaixa'], { unique: true })
@Entity('TGFFSN', { schema: 'SANKHYA' })
export class TgffsnEntity {
  @Column('int', { primary: true, name: 'NUANEXO' })
  nuanexo: number;

  @Column('int', { primary: true, name: 'NUFAIXA' })
  nufaixa: number;

  @Column('float', { name: 'RECBRUTAINI', nullable: true, precision: 53 })
  recbrutaini: number | null;

  @Column('float', { name: 'RECBRUTAFIN', nullable: true, precision: 53 })
  recbrutafin: number | null;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('float', { name: 'PARCDEDUZIR', nullable: true, precision: 53 })
  parcdeduzir: number | null;

  @Column('float', { name: 'IRPJ', nullable: true, precision: 53 })
  irpj: number | null;

  @Column('float', { name: 'CSLL', nullable: true, precision: 53 })
  csll: number | null;

  @Column('float', { name: 'COFINS', nullable: true, precision: 53 })
  cofins: number | null;

  @Column('float', { name: 'PISPASEP', nullable: true, precision: 53 })
  pispasep: number | null;

  @Column('float', { name: 'CPP', nullable: true, precision: 53 })
  cpp: number | null;

  @Column('float', { name: 'IPI', nullable: true, precision: 53 })
  ipi: number | null;

  @Column('float', { name: 'ICMS', nullable: true, precision: 53 })
  icms: number | null;

  @Column('float', { name: 'ISS', nullable: true, precision: 53 })
  iss: number | null;

  @ManyToOne(() => TgfasnEntity, (tgfasnEntity) => tgfasnEntity.tgffsns)
  @JoinColumn([{ name: 'NUANEXO', referencedColumnName: 'nuanexo' }])
  nuanexo2: TgfasnEntity;
}

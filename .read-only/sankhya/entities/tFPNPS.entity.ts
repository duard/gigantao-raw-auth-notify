import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPNPS', ['empresa', 'nomefunc', 'dtresposta'], { unique: true })
@Entity('TFPNPS', { schema: 'SANKHYA' })
export class TfpnpsEntity {
  @Column('varchar', { primary: true, name: 'EMPRESA', length: 40 })
  empresa: string;

  @Column('varchar', { primary: true, name: 'NOMEFUNC', length: 100 })
  nomefunc: string;

  @Column('datetime', { primary: true, name: 'DTRESPOSTA' })
  dtresposta: Date;

  @Column('varchar', { name: 'EMAIL', length: 80 })
  email: string;

  @Column('smallint', { name: 'NOTA' })
  nota: number;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 3103 })
  motivo: string | null;

  @Column('varchar', { name: 'PARCEIRO', nullable: true, length: 3103 })
  parceiro: string | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 3103 })
  unidade: string | null;

  @Column('varchar', { name: 'SEGMENTO', nullable: true, length: 3103 })
  segmento: string | null;

  @Column('smallint', { name: 'TEMPOCASA', nullable: true })
  tempocasa: number | null;

  @Column('varchar', { name: 'PERFILUSU', nullable: true, length: 100 })
  perfilusu: string | null;

  @Column('varchar', { name: 'PRODUTO', nullable: true, length: 100 })
  produto: string | null;
}

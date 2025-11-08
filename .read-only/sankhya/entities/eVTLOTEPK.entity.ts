import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_EVTLOTEPK', ['codigo'], { unique: true })
@Entity('EVTLOTEPK', { schema: 'SANKHYA' })
export class EvtlotepkEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODIGO' })
  codigo: number;

  @Column('char', { name: 'NROPROTLOTE', nullable: true, length: 1 })
  nroprotlote: string | null;
}

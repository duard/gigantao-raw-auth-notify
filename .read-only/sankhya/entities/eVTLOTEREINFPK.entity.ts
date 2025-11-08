import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_EVTLOTEREINFPK', ['codigo'], { unique: true })
@Entity('EVTLOTEREINFPK', { schema: 'SANKHYA' })
export class EvtlotereinfpkEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODIGO' })
  codigo: number;

  @Column('char', { name: 'NROPROTLOTE', nullable: true, length: 1 })
  nroprotlote: string | null;
}

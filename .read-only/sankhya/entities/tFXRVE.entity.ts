import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFXRVE_CODIGO', ['codigo'], { unique: true })
@Entity('TFXRVE', { schema: 'SANKHYA' })
export class TfxrveEntity {
  @Column('datetime', { name: 'DTULTIMO', nullable: true })
  dtultimo: Date | null;

  @Column('bigint', { name: 'NUVERSAO', nullable: true })
  nuversao: string | null;

  @PrimaryGeneratedColumn({ type: 'int', name: 'CODIGO' })
  codigo: number;
}

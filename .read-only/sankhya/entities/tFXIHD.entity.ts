import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXIHD', ['seq', 'codprod'], { unique: true })
@Entity('TFXIHD', { schema: 'SANKHYA' })
export class TfxihdEntity {
  @Column('varchar', { primary: true, name: 'SEQ', length: 15 })
  seq: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('text', { name: 'MOTIVO', nullable: true })
  motivo: string | null;
}

import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXPFE', ['codempresa'], { unique: true })
@Entity('TFXPFE', { schema: 'SANKHYA' })
export class TfxpfeEntity {
  @Column('int', { primary: true, name: 'CODEMPRESA' })
  codempresa: number;

  @Column('varchar', { name: 'COMPLEMENTOITEM', nullable: true, length: 3103 })
  complementoitem: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('varchar', { name: 'USUARIOPARCERIA', nullable: true, length: 100 })
  usuarioparceria: string | null;

  @Column('varchar', { name: 'SENHAPARCERIA', nullable: true, length: 100 })
  senhaparceria: string | null;

  @Column('char', { name: 'TESTEPARCERIA', nullable: true, length: 1 })
  testeparceria: string | null;
}

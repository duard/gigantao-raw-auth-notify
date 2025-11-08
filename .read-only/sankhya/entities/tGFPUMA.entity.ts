import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPUMA', ['codprod', 'coduma'], { unique: true })
@Entity('TGFPUMA', { schema: 'SANKHYA' })
export class TgfpumaEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODUMA' })
  coduma: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 100 })
  codbarra: string | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('varchar', { name: 'PADRAO', nullable: true, length: 1 })
  padrao: string | null;
}

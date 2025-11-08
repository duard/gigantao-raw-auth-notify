import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMIQUEL', ['numetbase', 'codquebra'], { unique: true })
@Entity('TMIQUEL', { schema: 'SANKHYA' })
export class TmiquelEntity {
  @Column('int', { primary: true, name: 'NUMETBASE' })
  numetbase: number;

  @Column('int', { name: 'NUMETQUEBRA', nullable: true })
  numetquebra: number | null;

  @Column('int', { primary: true, name: 'CODQUEBRA' })
  codquebra: number;
}

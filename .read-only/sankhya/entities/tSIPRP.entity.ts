import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIPRP', ['nunip'], { unique: true })
@Index('TSIPRP_UK_NOMEIMPLOCAL', ['nomeimplocal'], { unique: true })
@Entity('TSIPRP', { schema: 'SANKHYA' })
export class TsiprpEntity {
  @Column('int', { primary: true, name: 'NUNIP' })
  nunip: number;

  @Column('varchar', { name: 'NOMEIMPLOCAL', unique: true, length: 100 })
  nomeimplocal: string;

  @Column('varchar', { name: 'CAMINHOSPS', length: 200 })
  caminhosps: string;

  @Column('smallint', { name: 'NUPRINTER', nullable: true })
  nuprinter: number | null;
}

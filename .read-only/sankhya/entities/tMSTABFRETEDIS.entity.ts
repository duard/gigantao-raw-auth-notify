import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSTABFRETEDIS', ['codtabela'], { unique: true })
@Entity('TMSTABFRETEDIS', { schema: 'SANKHYA' })
export class TmstabfretedisEntity {
  @Column('int', { primary: true, name: 'CODTABELA' })
  codtabela: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('datetime', { name: 'DTINICIAL', nullable: true })
  dtinicial: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;
}

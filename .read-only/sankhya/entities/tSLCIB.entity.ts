import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSLCIB', ['sequencia'], { unique: true })
@Entity('TSLCIB', { schema: 'SANKHYA' })
export class TslcibEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODGBI' })
  codgbi: number;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'TENTENVIO' })
  tentenvio: number;

  @Column('datetime', { name: 'DHOCORRENCIA', nullable: true })
  dhocorrencia: Date | null;
}

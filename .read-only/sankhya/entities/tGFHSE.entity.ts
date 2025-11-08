import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHSE', ['serie', 'seqhistserie'], { unique: true })
@Entity('TGFHSE', { schema: 'SANKHYA' })
export class TgfhseEntity {
  @Column('varchar', { primary: true, name: 'SERIE', length: 12 })
  serie: string;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'OCORRENCIA', nullable: true, length: 100 })
  ocorrencia: string | null;

  @Column('int', { primary: true, name: 'SEQHISTSERIE', default: () => '(0)' })
  seqhistserie: number;
}

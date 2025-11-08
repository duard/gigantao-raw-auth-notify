import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCTTPRO', ['codparc', 'codcontato', 'sequencia'], { unique: true })
@Entity('TGFCTTPRO', { schema: 'SANKHYA' })
export class TgfcttproEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODCONTATO' })
  codcontato: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODGRUPOPROD', nullable: true })
  codgrupoprod: number | null;

  @Column('int', { name: 'CODCLASSIF', nullable: true })
  codclassif: number | null;
}

import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFIPP', ['codipi', 'codprod', 'codparc'], { unique: true })
@Entity('TGFIPP', { schema: 'SANKHYA' })
export class TgfippEntity {
  @Column('int', { primary: true, name: 'CODIPI' })
  codipi: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;
}

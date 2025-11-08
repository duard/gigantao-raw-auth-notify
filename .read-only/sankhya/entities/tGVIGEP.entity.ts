import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGVIGEP', ['codgruevopreco', 'sequencia'], { unique: true })
@Entity('TGVIGEP', { schema: 'SANKHYA' })
export class TgvigepEntity {
  @Column('int', { primary: true, name: 'CODGRUEVOPRECO' })
  codgruevopreco: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;
}

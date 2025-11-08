import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGVGEP', ['codgruevopreco'], { unique: true })
@Entity('TGVGEP', { schema: 'SANKHYA' })
export class TgvgepEntity {
  @Column('int', { primary: true, name: 'CODGRUEVOPRECO' })
  codgruevopreco: number;

  @Column('varchar', { name: 'DESCRGRUEVOPRECO', length: 200 })
  descrgruevopreco: string;

  @Column('varchar', { name: 'CGC', length: 20 })
  cgc: string;
}

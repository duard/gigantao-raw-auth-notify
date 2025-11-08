import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFINSSRPA', ['codparc', 'competencia'], { unique: true })
@Entity('TGFINSSRPA', { schema: 'SANKHYA' })
export class TgfinssrpaEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { primary: true, name: 'COMPETENCIA' })
  competencia: Date;

  @Column('float', { name: 'BASE', precision: 53 })
  base: number;

  @Column('float', { name: 'VLRIMP', precision: 53 })
  vlrimp: number;
}

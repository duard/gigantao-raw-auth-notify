import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPPO', ['nucraf', 'sequencia', 'regra'], { unique: true })
@Entity('TGFPPO', { schema: 'SANKHYA' })
export class TgfppoEntity {
  @Column('int', { primary: true, name: 'NUCRAF' })
  nucraf: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'REGRA' })
  regra: number;

  @Column('int', { name: 'CODUSU' })
  codusu: number;
}

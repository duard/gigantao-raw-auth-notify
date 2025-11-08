import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFALI', ['nunota', 'aliquota', 'tipo'], { unique: true })
@Entity('TGFALI', { schema: 'SANKHYA' })
export class TgfaliEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('money', { primary: true, name: 'ALIQUOTA' })
  aliquota: number;

  @Column('money', { name: 'BASEIMP' })
  baseimp: number;

  @Column('money', { name: 'VLRIMP' })
  vlrimp: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'I'",
  })
  tipo: string;
}

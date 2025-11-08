import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITMF', ['codtipoper', 'codusu'], { unique: true })
@Entity('TSITMF', { schema: 'SANKHYA' })
export class TsitmfEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { name: 'QTDFILT', default: () => '(-2147483646)' })
  qtdfilt: number;
}

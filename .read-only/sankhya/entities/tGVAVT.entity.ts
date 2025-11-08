import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGVAVT', ['codaval', 'codtipoper'], { unique: true })
@Entity('TGVAVT', { schema: 'SANKHYA' })
export class TgvavtEntity {
  @Column('int', { primary: true, name: 'CODAVAL' })
  codaval: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;
}

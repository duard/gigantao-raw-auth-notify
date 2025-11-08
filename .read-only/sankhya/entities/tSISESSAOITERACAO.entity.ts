import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSISESSAOITERACAO', ['globalid', 'dhinicio'], { unique: true })
@Entity('TSISESSAOITERACAO', { schema: 'SANKHYA' })
export class TsisessaoiteracaoEntity {
  @Column('varchar', { name: 'RESOURCEID', length: 1000 })
  resourceid: string;

  @Column('datetime', { primary: true, name: 'DHINICIO' })
  dhinicio: Date;

  @Column('int', { name: 'QTDITERACOES', nullable: true })
  qtditeracoes: number | null;

  @Column('datetime', { name: 'DHULTATIVIDADE', nullable: true })
  dhultatividade: Date | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', {
    primary: true,
    name: 'GLOBALID',
    length: 100,
    default: () => "' '",
  })
  globalid: string;

  @Column('int', { name: 'TOTALSEGUNDOS', nullable: true })
  totalsegundos: number | null;
}

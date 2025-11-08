import { Column, Entity, Index } from 'typeorm';

@Index('PK_TC_TGFCAB', ['nuchave'], { unique: true })
@Entity('TC_TGFCAB', { schema: 'SANKHYA' })
export class TcTgfcabEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCHAVE',
    precision: 18,
    scale: 0,
  })
  nuchave: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'APPKEY', nullable: true, length: 100 })
  appkey: string | null;

  @Column('varchar', { name: 'HASHLINHA', nullable: true, length: 100 })
  hashlinha: string | null;

  @Column('int', { name: 'STATUS' })
  status: number;

  @Column('varchar', {
    name: 'INTEGRADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  integrado: string | null;

  @Column('varchar', { name: 'IDPERSONALIZACAO', nullable: true, length: 255 })
  idpersonalizacao: string | null;
}

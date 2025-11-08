import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAICEMP', ['codemp'], { unique: true })
@Entity('TAICEMP', { schema: 'SANKHYA' })
export class TaicempEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'APPKEY', nullable: true, length: 300 })
  appkey: string | null;

  @Column('varchar', { name: 'ACCKEY', nullable: true, length: 300 })
  acckey: string | null;

  @Column('varchar', { name: 'INTEGRADO', nullable: true, length: 1 })
  integrado: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', {
    name: 'INTEGRARAUTOMATICO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  integrarautomatico: string | null;

  @Column('varchar', { name: 'DTPINTEG', length: 10, default: () => "'N'" })
  dtpinteg: string;
}

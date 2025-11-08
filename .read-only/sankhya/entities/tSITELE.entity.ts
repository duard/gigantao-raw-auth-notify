import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITELE', ['codtele'], { unique: true })
@Entity('TSITELE', { schema: 'SANKHYA' })
export class TsiteleEntity {
  @Column('smallint', { primary: true, name: 'CODTELE' })
  codtele: number;

  @Column('varchar', { name: 'MONITORCPU', length: 1, default: () => "'N'" })
  monitorcpu: string;

  @Column('varchar', { name: 'MONITORMEMORY', length: 1, default: () => "'N'" })
  monitormemory: string;

  @Column('varchar', { name: 'MONITORGC', length: 1, default: () => "'N'" })
  monitorgc: string;

  @Column('varchar', {
    name: 'MONITORLIVETHREADS',
    length: 1,
    default: () => "'N'",
  })
  monitorlivethreads: string;

  @Column('varchar', {
    name: 'LONGOPSATIVE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  longopsative: string | null;
}

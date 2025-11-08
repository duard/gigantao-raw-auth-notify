import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIBLG', ['nuarquivo'], { unique: true })
@Entity('TSIBLG', { schema: 'SANKHYA' })
export class TsiblgEntity {
  @Column('int', { primary: true, name: 'NUARQUIVO' })
  nuarquivo: number;

  @Column('varchar', { name: 'NOMEARQ', length: 255 })
  nomearq: string;

  @Column('varchar', { name: 'URL', length: 255 })
  url: string;

  @Column('smallint', { name: 'TEMPO' })
  tempo: number;

  @Column('smallint', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('char', { name: 'PROFILE', length: 1, default: () => "'S'" })
  profile: string;

  @Column('varchar', { name: 'EVO', length: 1, default: () => "'N'" })
  evo: string;
}

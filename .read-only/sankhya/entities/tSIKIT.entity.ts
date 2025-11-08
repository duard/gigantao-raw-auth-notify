import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TSIKIT', ['codconfkit'], { unique: true })
@Entity('TSIKIT', { schema: 'SANKHYA' })
export class TsikitEntity {
  @Column('int', { primary: true, name: 'CODCONFKIT' })
  codconfkit: number;

  @Column('varchar', { name: 'DESCRCONFKIT', length: 50 })
  descrconfkit: string;

  @Column('char', { name: 'SOMACUSTOCOMPKIT', length: 1, default: () => "'S'" })
  somacustocompkit: string;

  @Column('char', { name: 'SOMAPRECOCOMPKIT', length: 1, default: () => "'S'" })
  somaprecocompkit: string;

  @Column('char', { name: 'EXPLODCOMP', length: 1, default: () => "'S'" })
  explodcomp: string;

  @Column('char', { name: 'SOMAICMSCOMPKIT', length: 1, default: () => "'N'" })
  somaicmscompkit: string;

  @Column('char', { name: 'DISTRIBUIKITCOMP', length: 1, default: () => "'N'" })
  distribuikitcomp: string;

  @Column('char', { name: 'UTILPRECOABACOMP', length: 1, default: () => "'S'" })
  utilprecoabacomp: string;

  @Column('char', { name: 'CALCIMPKIT', length: 1, default: () => "'S'" })
  calcimpkit: string;

  @Column('char', { name: 'DISTDESCKITCOMP', length: 1, default: () => "'N'" })
  distdesckitcomp: string;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'FAKITESTCOMP', nullable: true, length: 1 })
  fakitestcomp: string | null;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codconfkit)
  tgfpros: TgfproEntity[];
}

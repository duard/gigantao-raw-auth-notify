import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiimpEntity } from './tSIIMP.entity';

@Index('PK_TSIIMQ', ['codrel', 'quebra', 'nroquery', 'coduni'], {
  unique: true,
})
@Entity('TSIIMQ', { schema: 'SANKHYA' })
export class TsiimqEntity {
  @Column('int', { primary: true, name: 'CODREL' })
  codrel: number;

  @Column('int', { primary: true, name: 'QUEBRA' })
  quebra: number;

  @Column('int', { primary: true, name: 'NROQUERY' })
  nroquery: number;

  @Column('int', { primary: true, name: 'CODUNI' })
  coduni: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 30 })
  descricao: string | null;

  @Column('int', { name: 'TAMANHO' })
  tamanho: number;

  @Column('varchar', { name: 'CONDICAO', nullable: true, length: 30 })
  condicao: string | null;

  @Column('int', { name: 'LINHA' })
  linha: number;

  @Column('int', { name: 'COLUNA' })
  coluna: number;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'SALTAPAGINA', length: 1, default: () => "'N'" })
  saltapagina: string;

  @Column('varchar', { name: 'REIMPRIMIR', length: 1, default: () => "'N'" })
  reimprimir: string;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tsiimqs)
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel2: TsiimpEntity;
}

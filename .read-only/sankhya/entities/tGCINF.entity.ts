import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgcgruEntity } from './tGCGRU.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGCINF', ['codcred', 'codgrupocred', 'codinfcred'], { unique: true })
@Index('TGCINF_I01', ['codcred', 'chave'], { unique: true })
@Entity('TGCINF', { schema: 'SANKHYA' })
export class TgcinfEntity {
  @Column('int', { primary: true, name: 'CODCRED' })
  codcred: number;

  @Column('int', { primary: true, name: 'CODGRUPOCRED' })
  codgrupocred: number;

  @Column('int', { primary: true, name: 'CODINFCRED' })
  codinfcred: number;

  @Column('char', { name: 'DESCRINFCRED', length: 40 })
  descrinfcred: string;

  @Column('char', { name: 'CHAVE', length: 10 })
  chave: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'V'" })
  tipo: string;

  @Column('char', { name: 'OBRIGATORIO', length: 1, default: () => "'S'" })
  obrigatorio: string;

  @Column('int', { name: 'PERIODICIDADE', default: () => '(0)' })
  periodicidade: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('smallint', { name: 'DECIMAIS', default: () => '(0)' })
  decimais: number;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('char', { name: 'OBS', nullable: true, length: 60 })
  obs: string | null;

  @ManyToOne(() => TgcgruEntity, (tgcgruEntity) => tgcgruEntity.tgcinfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODCRED', referencedColumnName: 'codcred' },
    { name: 'CODGRUPOCRED', referencedColumnName: 'codgrupocred' },
  ])
  tgcgru: TgcgruEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgcinfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

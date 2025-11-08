import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigruEntity } from './tSIGRU.entity';

@Index('PK_TSIAVI', ['nuaviso'], { unique: true })
@Index('TSIAVI_I01', ['nuavisopai'], {})
@Index('TSIAVI_I02', ['dhcriacao'], {})
@Entity('TSIAVI', { schema: 'SANKHYA' })
export class TsiaviEntity {
  @Column('int', { primary: true, name: 'NUAVISO' })
  nuaviso: number;

  @Column('varchar', { name: 'TITULO', length: 100 })
  titulo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 2000 })
  descricao: string;

  @Column('varchar', { name: 'SOLUCAO', nullable: true, length: 2000 })
  solucao: string | null;

  @Column('varchar', { name: 'IDENTIFICADOR', length: 50 })
  identificador: string;

  @Column('smallint', { name: 'IMPORTANCIA', default: () => '(3)' })
  importancia: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'P'" })
  tipo: string;

  @Column('datetime', { name: 'DHCRIACAO', default: () => 'getdate()' })
  dhcriacao: Date;

  @Column('smallint', { name: 'CODUSUREMETENTE', default: () => '(-1)' })
  codusuremetente: number;

  @Column('int', { name: 'NUAVISOPAI', nullable: true })
  nuavisopai: number | null;

  @Column('datetime', { name: 'DTEXPIRACAO', nullable: true })
  dtexpiracao: Date | null;

  @Column('datetime', { name: 'DTNOTIFICACAO', nullable: true })
  dtnotificacao: Date | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @ManyToOne(() => TsiaviEntity, (tsiaviEntity) => tsiaviEntity.tsiavis)
  @JoinColumn([{ name: 'NUAVISOPAI', referencedColumnName: 'nuaviso' }])
  nuavisopai2: TsiaviEntity;

  @OneToMany(() => TsiaviEntity, (tsiaviEntity) => tsiaviEntity.nuavisopai2)
  tsiavis: TsiaviEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiavis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsiavis)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo: TsigruEntity;
}

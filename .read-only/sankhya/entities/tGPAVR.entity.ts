import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGPAVR', ['nuavaliacao', 'nuavaliado', 'nuavaliador'], {
  unique: true,
})
@Index(
  'TGPAVR_I01',
  [
    'nuavaliacao',
    'nuavaliado',
    'nuavaliador',
    'tiporelacao',
    'codparc',
    'codempfuncrel',
    'codfuncrel',
  ],
  { unique: true },
)
@Entity('TGPAVR', { schema: 'SANKHYA' })
export class TgpavrEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('int', { primary: true, name: 'NUAVALIADOR' })
  nuavaliador: number;

  @Column('smallint', { name: 'TIPORELACAO' })
  tiporelacao: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'CODEMPFUNCREL' })
  codempfuncrel: number;

  @Column('int', { name: 'CODFUNCREL' })
  codfuncrel: number;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'P'" })
  situacao: string;

  @Column('char', { name: 'CONSIDERAR', length: 1, default: () => "'S'" })
  considerar: string;

  @Column('varchar', { name: 'MOTDESCONSID', length: 200 })
  motdesconsid: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'F'" })
  tipo: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpavrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgpavrs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGPREL',
  ['tiporelacao', 'codcargo', 'codparc', 'codempfunc', 'codfunc'],
  {
    unique: true,
  },
)
@Entity('TGPREL', { schema: 'SANKHYA' })
export class TgprelEntity {
  @Column('smallint', { primary: true, name: 'TIPORELACAO' })
  tiporelacao: number;

  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODEMPFUNC' })
  codempfunc: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'F'" })
  tipo: string;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tgprels)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgprels)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgprels)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}

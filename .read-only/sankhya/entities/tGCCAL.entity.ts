import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGCCAL', ['codparc', 'codcred', 'chave', 'dtcalc'], { unique: true })
@Entity('TGCCAL', { schema: 'SANKHYA' })
export class TgccalEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODCRED' })
  codcred: number;

  @Column('char', { primary: true, name: 'CHAVE', length: 10 })
  chave: string;

  @Column('datetime', {
    primary: true,
    name: 'DTCALC',
    default: () => 'getdate()',
  })
  dtcalc: Date;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'S'" })
  digitado: string;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('money', { name: 'VALOR', nullable: true })
  valor: number | null;

  @Column('char', { name: 'OBS', nullable: true, length: 60 })
  obs: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgccals)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgccals, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}

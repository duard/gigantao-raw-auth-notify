import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiregEntity } from './tSIREG.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFVIS', ['codvend', 'codreg', 'tipo', 'valor', 'codparc'], {
  unique: true,
})
@Index('TGFVIS_I01', ['codreg', 'codvend', 'tipo', 'valor', 'codparc'], {})
@Entity('TGFVIS', { schema: 'SANKHYA' })
export class TgfvisEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'S'",
  })
  tipo: string;

  @Column('smallint', { primary: true, name: 'VALOR', default: () => '(1)' })
  valor: number;

  @Column('int', { name: 'SEQVISITA', nullable: true })
  seqvisita: number | null;

  @Column('smallint', { primary: true, name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('int', { primary: true, name: 'CODREG', default: () => '(0)' })
  codreg: number;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgfvis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg2: TsiregEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfvis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}

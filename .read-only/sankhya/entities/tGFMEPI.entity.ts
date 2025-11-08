import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFMEPI', ['codemp', 'codprod', 'codfunc', 'nunota', 'sequencia'], {
  unique: true,
})
@Index('TGFMEPI_I01', ['nunota', 'sequencia'], {})
@Entity('TGFMEPI', { schema: 'SANKHYA' })
export class TgfmepiEntity {
  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(1)' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfmepis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfmepis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfmepis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TCSAGF', ['codvend', 'codparc', 'codprod', 'diasem', 'horario'], {
  unique: true,
})
@Entity('TCSAGF', { schema: 'SANKHYA' })
export class TcsagfEntity {
  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'DIASEM' })
  diasem: number;

  @Column('datetime', { primary: true, name: 'HORARIO' })
  horario: Date;

  @Column('char', { name: 'TIPOPER', length: 1, default: () => "'0'" })
  tipoper: string;

  @Column('text', { name: 'OBSERVACOES', nullable: true })
  observacoes: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsagfs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsagfs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tcsagfs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;
}

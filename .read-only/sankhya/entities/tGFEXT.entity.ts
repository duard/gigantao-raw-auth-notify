import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfhcoEntity } from './tGFHCO.entity';

@Index('PK_TGFEXT', ['nunota', 'codvend', 'origem'], { unique: true })
@Entity('TGFEXT', { schema: 'SANKHYA' })
export class TgfextEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('char', {
    primary: true,
    name: 'ORIGEM',
    length: 1,
    default: () => "'F'",
  })
  origem: string;

  @Column('datetime', { name: 'DTLANC', nullable: true })
  dtlanc: Date | null;

  @Column('money', { name: 'VLRNOTA', nullable: true })
  vlrnota: number | null;

  @Column('money', { name: 'VLRLANC', nullable: true })
  vlrlanc: number | null;

  @Column('smallint', { name: 'TIPLANC', nullable: true, default: () => '(1)' })
  tiplanc: number | null;

  @Column('char', { name: 'LIBERADO', length: 1, default: () => "'S'" })
  liberado: string;

  @Column('money', { name: 'VLRPAGO', nullable: true })
  vlrpago: number | null;

  @Column('datetime', { name: 'DTPAG', nullable: true })
  dtpag: Date | null;

  @Column('money', { name: 'VLRDISP', nullable: true })
  vlrdisp: number | null;

  @Column('int', { name: 'NUMRECIBO', nullable: true })
  numrecibo: number | null;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfexts)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;

  @ManyToOne(() => TgfhcoEntity, (tgfhcoEntity) => tgfhcoEntity.tgfexts)
  @JoinColumn([{ name: 'CODHISTCOM', referencedColumnName: 'codhistcom' }])
  codhistcom: TgfhcoEntity;
}

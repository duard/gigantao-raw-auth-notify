import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadstEntity } from './tGFADST.entity';

@Index('PK_TGFIDST', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFIDST', { schema: 'SANKHYA' })
export class TgfidstEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('float', { name: 'BASESUBSTITCALC', nullable: true, precision: 53 })
  basesubstitcalc: number | null;

  @Column('float', { name: 'VLRSUBSTCALC', nullable: true, precision: 53 })
  vlrsubstcalc: number | null;

  @Column('float', { name: 'BASESUBSTITITEM', nullable: true, precision: 53 })
  basesubstititem: number | null;

  @Column('float', { name: 'VLRSUBSTITEM', nullable: true, precision: 53 })
  vlrsubstitem: number | null;

  @Column('char', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @Column('float', { name: 'DIFVLRSUBST', nullable: true, precision: 53 })
  difvlrsubst: number | null;

  @Column('int', { name: 'IDALIQICMS', nullable: true })
  idaliqicms: number | null;

  @Column('float', { name: 'BASEICMSCALC', nullable: true, precision: 53 })
  baseicmscalc: number | null;

  @Column('float', { name: 'VLRICMSCALC', nullable: true, precision: 53 })
  vlricmscalc: number | null;

  @Column('float', { name: 'BASEICMSITE', nullable: true, precision: 53 })
  baseicmsite: number | null;

  @Column('float', { name: 'VLRICMSITE', nullable: true, precision: 53 })
  vlricmsite: number | null;

  @ManyToOne(() => TgfadstEntity, (tgfadstEntity) => tgfadstEntity.tgfidsts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfadstEntity;
}

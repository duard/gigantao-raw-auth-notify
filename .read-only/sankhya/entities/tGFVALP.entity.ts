import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFVALP', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFVALP', { schema: 'SANKHYA' })
export class TgfvalpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NUCOMPRA', nullable: true, length: 20 })
  nucompra: string | null;

  @Column('char', {
    name: 'TIPPAG',
    nullable: true,
    length: 1,
    default: () => "'E'",
  })
  tippag: string | null;

  @Column('float', { name: 'VLRPEDAGIO', nullable: true, precision: 53 })
  vlrpedagio: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfvalps)
  @JoinColumn([{ name: 'CODPARCFORN', referencedColumnName: 'codparc' }])
  codparcforn: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfvalps2)
  @JoinColumn([{ name: 'CODPARCPAG', referencedColumnName: 'codparc' }])
  codparcpag: TgfparEntity;
}

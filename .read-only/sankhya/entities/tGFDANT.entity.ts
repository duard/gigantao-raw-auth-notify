import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFDANT', ['nunota', 'seqdant'], { unique: true })
@Entity('TGFDANT', { schema: 'SANKHYA' })
export class TgfdantEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQDANT' })
  seqdant: number;

  @Column('varchar', { name: 'CHAVEDANT', nullable: true, length: 44 })
  chavedant: string | null;

  @Column('char', { name: 'CTEREF', length: 1, default: () => "'N'" })
  cteref: string;

  @Column('char', { name: 'SUBSER', nullable: true, length: 2 })
  subser: string | null;

  @Column('datetime', { name: 'DEMI', nullable: true })
  demi: Date | null;

  @Column('char', { name: 'SERIE', nullable: true, length: 3 })
  serie: string | null;

  @Column('varchar', { name: 'TPDOCTA', nullable: true, length: 2 })
  tpdocta: string | null;

  @Column('varchar', { name: 'NDOC', nullable: true, length: 30 })
  ndoc: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfdants)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfdants)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}

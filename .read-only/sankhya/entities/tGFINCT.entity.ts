import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnctEntity } from './tGFNCT.entity';

@Index('PK_TGFINCT', ['nunota', 'seqnota', 'sequencia'], { unique: true })
@Entity('TGFINCT', { schema: 'SANKHYA' })
export class TgfinctEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('varchar', { name: 'DESCPROD', nullable: true, length: 255 })
  descprod: string | null;

  @Column('float', { name: 'QUANTIDADE', nullable: true, precision: 53 })
  quantidade: number | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 6 })
  unidade: string | null;

  @Column('float', { name: 'VALUNIT', nullable: true, precision: 53 })
  valunit: number | null;

  @Column('float', { name: 'VALTOTAL', nullable: true, precision: 53 })
  valtotal: number | null;

  @ManyToOne(() => TgfnctEntity, (tgfnctEntity) => tgfnctEntity.tgfincts)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQNOTA', referencedColumnName: 'sequencia' },
  ])
  tgfnct: TgfnctEntity;
}

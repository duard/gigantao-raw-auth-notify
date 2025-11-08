import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfcmpEntity } from './tGFCMP.entity';

@Index('PK_TGFCCF', ['codcmp', 'codprod'], { unique: true })
@Entity('TGFCCF', { schema: 'SANKHYA' })
export class TgfccfEntity {
  @Column('int', { primary: true, name: 'CODCMP' })
  codcmp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'VLRPREMIO', precision: 53, default: () => '(0)' })
  vlrpremio: number;

  @Column('float', { name: 'QTDE', precision: 53, default: () => '(0)' })
  qtde: number;

  @Column('varchar', { name: 'INDIVIDUAL', length: 1, default: () => "'S'" })
  individual: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'COMBO', nullable: true })
  combo: number | null;

  @Column('varchar', { name: 'OBRIGATORIO', length: 1, default: () => "'S'" })
  obrigatorio: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfccfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfccfs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfcmpEntity, (tgfcmpEntity) => tgfcmpEntity.tgfccfs)
  @JoinColumn([{ name: 'CODCMP', referencedColumnName: 'codcmp' }])
  codcmp2: TgfcmpEntity;
}

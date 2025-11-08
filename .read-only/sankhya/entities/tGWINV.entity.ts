import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWINV', ['codinv', 'dtinv', 'codprod'], { unique: true })
@Entity('TGWINV', { schema: 'SANKHYA' })
export class TgwinvEntity {
  @Column('int', { primary: true, name: 'CODINV' })
  codinv: number;

  @Column('datetime', { primary: true, name: 'DTINV' })
  dtinv: Date;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @Column('int', { name: 'CODEND' })
  codend: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @Column('int', { name: 'CODTPDV' })
  codtpdv: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwinvs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwinvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

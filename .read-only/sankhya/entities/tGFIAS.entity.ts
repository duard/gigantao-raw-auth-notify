import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcasEntity } from './tGFCAS.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFIAS', ['nuagenda', 'sequencia'], { unique: true })
@Entity('TGFIAS', { schema: 'SANKHYA' })
export class TgfiasEntity {
  @Column('int', { primary: true, name: 'NUAGENDA' })
  nuagenda: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'HORAINICIAL', nullable: true })
  horainicial: number | null;

  @Column('smallint', { name: 'HORAFINAL', nullable: true })
  horafinal: number | null;

  @Column('smallint', { name: 'QTDMODULOS', default: () => '(1)' })
  qtdmodulos: number;

  @ManyToOne(() => TgfcasEntity, (tgfcasEntity) => tgfcasEntity.tgfias)
  @JoinColumn([{ name: 'NUAGENDA', referencedColumnName: 'nuagenda' }])
  nuagenda2: TgfcasEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfias)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv: TgfproEntity;
}

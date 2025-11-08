import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiufsEntity } from './tSIUFS.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFAID', ['coduf', 'codprod'], { unique: true })
@Entity('TGFAID', { schema: 'SANKHYA' })
export class TgfaidEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'ALIQINTDEST', precision: 53 })
  aliqintdest: number;

  @Column('float', { name: 'PERCICMSFCP', nullable: true, precision: 53 })
  percicmsfcp: number | null;

  @Column('float', {
    name: 'PERCREDBASEDEST',
    precision: 53,
    default: () => '(0)',
  })
  percredbasedest: number;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfas)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}

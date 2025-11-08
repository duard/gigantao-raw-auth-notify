import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsibcoEntity } from './tSIBCO.entity';
import { TimlocEntity } from './tIMLOC.entity';

@Index('PK_TIMLGP', ['lgpcodigo', 'lgpcontrato'], { unique: true })
@Entity('TIMLGP', { schema: 'SANKHYA' })
export class TimlgpEntity {
  @Column('int', { primary: true, name: 'LGPCODIGO' })
  lgpcodigo: number;

  @Column('int', { primary: true, name: 'LGPCONTRATO' })
  lgpcontrato: number;

  @Column('datetime', { name: 'LGPDATADEPOSITO', nullable: true })
  lgpdatadeposito: Date | null;

  @Column('datetime', { name: 'LGPDATAVENCTO', nullable: true })
  lgpdatavencto: Date | null;

  @Column('varchar', { name: 'LGPAGENCIA', nullable: true, length: 40 })
  lgpagencia: string | null;

  @Column('float', { name: 'LGPVALORDEPOSITO', nullable: true, precision: 53 })
  lgpvalordeposito: number | null;

  @Column('float', { name: 'LGPVLRCORRIGIDO', nullable: true, precision: 53 })
  lgpvlrcorrigido: number | null;

  @Column('datetime', { name: 'LGPDHCORRECAO', nullable: true })
  lgpdhcorrecao: Date | null;

  @Column('varchar', { name: 'LGPCONTA', nullable: true, length: 20 })
  lgpconta: string | null;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.timlgps)
  @JoinColumn([{ name: 'LGPBANCO', referencedColumnName: 'codbco' }])
  lgpbanco: TsibcoEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timlgps)
  @JoinColumn([{ name: 'LGPCONTRATO', referencedColumnName: 'loccodigo' }])
  lgpcontrato2: TimlocEntity;
}

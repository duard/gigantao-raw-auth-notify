import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimiviEntity } from './tIMIVI.entity';

@Index('PK_TIMRIC', ['ricreajuste', 'riciptu', 'ricimovel'], { unique: true })
@Entity('TIMRIC', { schema: 'SANKHYA' })
export class TimricEntity {
  @Column('int', { primary: true, name: 'RICREAJUSTE' })
  ricreajuste: number;

  @Column('int', { primary: true, name: 'RICIPTU' })
  riciptu: number;

  @Column('int', { primary: true, name: 'RICIMOVEL' })
  ricimovel: number;

  @Column('float', { name: 'RICPERCENTUAL', nullable: true, precision: 53 })
  ricpercentual: number | null;

  @Column('float', { name: 'RICVALOR', nullable: true, precision: 53 })
  ricvalor: number | null;

  @Column('float', { name: 'RICPARCELA', nullable: true, precision: 53 })
  ricparcela: number | null;

  @Column('int', { name: 'RICQTDEPARC', nullable: true })
  ricqtdeparc: number | null;

  @Column('int', { name: 'RICNOVOIPTU', nullable: true })
  ricnovoiptu: number | null;

  @ManyToOne(() => TimiviEntity, (timiviEntity) => timiviEntity.timrics)
  @JoinColumn([
    { name: 'RICIPTU', referencedColumnName: 'iviiptu' },
    { name: 'RICIMOVEL', referencedColumnName: 'iviimovel' },
  ])
  timivi: TimiviEntity;
}

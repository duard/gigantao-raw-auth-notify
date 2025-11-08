import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimlocEntity } from './tIMLOC.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMSGI', ['sgicontratoloc', 'sgicodigo'], { unique: true })
@Entity('TIMSGI', { schema: 'SANKHYA' })
export class TimsgiEntity {
  @Column('int', { primary: true, name: 'SGICONTRATOLOC' })
  sgicontratoloc: number;

  @Column('int', { primary: true, name: 'SGICODIGO' })
  sgicodigo: number;

  @Column('varchar', { name: 'SGIAPOLICE', nullable: true, length: 100 })
  sgiapolice: string | null;

  @Column('float', { name: 'SGIVLRSEGURO', nullable: true, precision: 53 })
  sgivlrseguro: number | null;

  @Column('datetime', { name: 'SGIDTINICIO', nullable: true })
  sgidtinicio: Date | null;

  @Column('datetime', { name: 'SGIDTFIM', nullable: true })
  sgidtfim: Date | null;

  @Column('char', { name: 'SGIFEITOADM', nullable: true, length: 1 })
  sgifeitoadm: string | null;

  @Column('varchar', { name: 'SGITIPOSEGURO', nullable: true, length: 2 })
  sgitiposeguro: string | null;

  @Column('float', { name: 'SGIPERCCOMISSAO', nullable: true, precision: 53 })
  sgiperccomissao: number | null;

  @Column('int', { name: 'SGICORRETORA', nullable: true })
  sgicorretora: number | null;

  @Column('datetime', { name: 'SGIDTCANCELAMENTO', nullable: true })
  sgidtcancelamento: Date | null;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timsgis)
  @JoinColumn([{ name: 'SGICONTRATOLOC', referencedColumnName: 'loccodigo' }])
  sgicontratoloc2: TimlocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timsgis)
  @JoinColumn([{ name: 'SGISEGURADORA', referencedColumnName: 'codparc' }])
  sgiseguradora: TgfparEntity;
}

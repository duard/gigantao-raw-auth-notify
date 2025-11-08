import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimlocEntity } from './tIMLOC.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMLGS', ['lgscodigo', 'lgscontrato'], { unique: true })
@Entity('TIMLGS', { schema: 'SANKHYA' })
export class TimlgsEntity {
  @Column('int', { primary: true, name: 'LGSCODIGO' })
  lgscodigo: number;

  @Column('int', { primary: true, name: 'LGSCONTRATO' })
  lgscontrato: number;

  @Column('float', { name: 'LGSVLRSEGURO', nullable: true, precision: 53 })
  lgsvlrseguro: number | null;

  @Column('varchar', { name: 'LGSAPOLICE', nullable: true, length: 100 })
  lgsapolice: string | null;

  @Column('float', { name: 'LGSCOMISSAO', nullable: true, precision: 53 })
  lgscomissao: number | null;

  @Column('datetime', { name: 'LGSDTINIVIGENCIA', nullable: true })
  lgsdtinivigencia: Date | null;

  @Column('datetime', { name: 'LGSDTFINVIGENCIA', nullable: true })
  lgsdtfinvigencia: Date | null;

  @Column('float', { name: 'LGSVLRCOBERTURA', nullable: true, precision: 53 })
  lgsvlrcobertura: number | null;

  @Column('float', { name: 'LGSVLRPREMIO', nullable: true, precision: 53 })
  lgsvlrpremio: number | null;

  @Column('datetime', { name: 'LGSDTCANCELAMENTO', nullable: true })
  lgsdtcancelamento: Date | null;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timlgs)
  @JoinColumn([{ name: 'LGSCONTRATO', referencedColumnName: 'loccodigo' }])
  lgscontrato2: TimlocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timlgs)
  @JoinColumn([{ name: 'LGSSEGURADORA', referencedColumnName: 'codparc' }])
  lgsseguradora: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timlgs2)
  @JoinColumn([{ name: 'LGSCORRETORA', referencedColumnName: 'codparc' }])
  lgscorretora: TgfparEntity;
}

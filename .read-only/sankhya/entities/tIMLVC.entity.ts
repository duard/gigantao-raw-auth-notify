import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimcblEntity } from './tIMCBL.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMLVC', ['lvccontrato', 'lvccliente'], { unique: true })
@Entity('TIMLVC', { schema: 'SANKHYA' })
export class TimlvcEntity {
  @Column('int', { primary: true, name: 'LVCCONTRATO' })
  lvccontrato: number;

  @Column('int', { primary: true, name: 'LVCCLIENTE' })
  lvccliente: number;

  @Column('char', { name: 'LVCBOLETO', nullable: true, length: 1 })
  lvcboleto: string | null;

  @Column('char', { name: 'LVCLEGADO', nullable: true, length: 1 })
  lvclegado: string | null;

  @ManyToOne(() => TimcblEntity, (timcblEntity) => timcblEntity.timlvcs)
  @JoinColumn([
    { name: 'LVCCLIENTE', referencedColumnName: 'cbllocador' },
    { name: 'LVCCONTABANC', referencedColumnName: 'cblcodigo' },
  ])
  timcbl: TimcblEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timlvcs)
  @JoinColumn([
    { name: 'LVCCLIENTE', referencedColumnName: 'codparc' },
    { name: 'LVCENDERECO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timlvcs)
  @JoinColumn([{ name: 'LVCCONTRATO', referencedColumnName: 'ltvcodigo' }])
  lvccontrato2: TimltvEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timlvcs)
  @JoinColumn([{ name: 'LVCPROCURADOR', referencedColumnName: 'codparc' }])
  lvcprocurador: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timlvcs2)
  @JoinColumn([{ name: 'LVCCLIENTE', referencedColumnName: 'codparc' }])
  lvccliente2: TgfparEntity;
}

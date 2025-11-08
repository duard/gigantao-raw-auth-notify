import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcfmanEntity } from './tCFMAN.entity';

@Index('PK_TCFMANSRV', ['nuplano', 'sequencia'], { unique: true })
@Entity('TCFMANSRV', { schema: 'SANKHYA' })
export class TcfmansrvEntity {
  @Column('int', { primary: true, name: 'NUPLANO' })
  nuplano: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'KMEXEC', nullable: true, precision: 53 })
  kmexec: number | null;

  @Column('int', { name: 'DIASEXEC', nullable: true })
  diasexec: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcfmansrvs)
  @JoinColumn([{ name: 'CODPRODMANUTENCAO', referencedColumnName: 'codprod' }])
  codprodmanutencao: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcfmansrvs2)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TcfmanEntity, (tcfmanEntity) => tcfmanEntity.tcfmansrvs)
  @JoinColumn([{ name: 'NUPLANO', referencedColumnName: 'nuplano' }])
  nuplano2: TcfmanEntity;
}

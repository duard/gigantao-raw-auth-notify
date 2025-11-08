import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfabtEntity } from './tCFABT.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCFABTITE', ['idabt', 'sequencia'], { unique: true })
@Entity('TCFABTITE', { schema: 'SANKHYA' })
export class TcfabtiteEntity {
  @Column('int', { primary: true, name: 'IDABT' })
  idabt: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'QTDLITRO', nullable: true, precision: 53 })
  qtdlitro: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'VLRTOTAL', nullable: true, precision: 53 })
  vlrtotal: number | null;

  @ManyToOne(() => TcfabtEntity, (tcfabtEntity) => tcfabtEntity.tcfabtites)
  @JoinColumn([{ name: 'IDABT', referencedColumnName: 'idabt' }])
  idabt2: TcfabtEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcfabtites)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';

@Index('PK_TCBVCAD', ['codemp', 'codctactb', 'sequencia'], { unique: true })
@Entity('TCBVCAD', { schema: 'SANKHYA' })
export class TcbvcadEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbvcads)
  @JoinColumn([{ name: 'CODCTACTBALT', referencedColumnName: 'codctactb' }])
  codctactbalt: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbvcads2)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;
}

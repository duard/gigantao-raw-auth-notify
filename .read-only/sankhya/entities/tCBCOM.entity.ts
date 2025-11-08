import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcbgruEntity } from './tCBGRU.entity';

@Index('PK_TCBCOM', ['codemp', 'codgrupocta', 'codctactb'], { unique: true })
@Entity('TCBCOM', { schema: 'SANKHYA' })
export class TcbcomEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODGRUPOCTA' })
  codgrupocta: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbcoms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbcoms)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TcbgruEntity, (tcbgruEntity) => tcbgruEntity.tcbcoms)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODGRUPOCTA', referencedColumnName: 'codgrupocta' },
  ])
  tcbgru: TcbgruEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBISE', ['codemp', 'dtmov'], { unique: true })
@Entity('TCBISE', { schema: 'SANKHYA' })
export class TcbiseEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'CODISE', length: 1 })
  codise: string;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbises)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbises)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

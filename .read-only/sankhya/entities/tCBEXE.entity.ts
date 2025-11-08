import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBEXE', ['codemp', 'inicioexercicio'], { unique: true })
@Entity('TCBEXE', { schema: 'SANKHYA' })
export class TcbexeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'INICIOEXERCICIO' })
  inicioexercicio: Date;

  @Column('datetime', { name: 'FIMEXERCICIO' })
  fimexercicio: Date;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbexes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfapEntity } from './tCSFAP.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TCSFD', ['nufap', 'nunota'], { unique: true })
@Index('TCSFPD_I01', ['nunota'], {})
@Entity('TCSFPD', { schema: 'SANKHYA' })
export class TcsfpdEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'QTDHORAS', default: () => '(0)' })
  qtdhoras: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcsfpds)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcsfpds)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}

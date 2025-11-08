import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcfiEntity } from './tGFCFI.entity';

@Index('PK_TGFCFS', ['nunota'], { unique: true })
@Index('TGFCFS_I01', ['nufidel', 'dtval'], {})
@Index('TGFCFS_I02', ['nufidel', 'saldo'], {})
@Entity('TGFCFS', { schema: 'SANKHYA' })
export class TgfcfsEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUFIDEL' })
  nufidel: number;

  @Column('float', { name: 'SALDO', precision: 53 })
  saldo: number;

  @Column('datetime', { name: 'DTVAL' })
  dtval: Date;

  @ManyToOne(() => TgfcfiEntity, (tgfcfiEntity) => tgfcfiEntity.tgfcfs)
  @JoinColumn([{ name: 'NUFIDEL', referencedColumnName: 'nufidel' }])
  nufidel2: TgfcfiEntity;
}

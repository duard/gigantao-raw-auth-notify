import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgmaiEntity } from './tGMAI.entity';

@Index('PK_TGMAIN', ['nuautinv', 'nunota', 'nunotadest'], { unique: true })
@Index('TGMAIN_01', ['nunota', 'nunotadest'], {})
@Index('TGMAIN_02', ['nunotadest', 'nunota'], {})
@Entity('TGMAIN', { schema: 'SANKHYA' })
export class TgmainEntity {
  @Column('int', { primary: true, name: 'NUAUTINV' })
  nuautinv: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUNOTADEST' })
  nunotadest: number;

  @Column('float', {
    name: 'VLRCOMPROMISSO',
    precision: 53,
    default: () => '(0)',
  })
  vlrcompromisso: number;

  @Column('float', { name: 'VLRUSADO', precision: 53, default: () => '(0)' })
  vlrusado: number;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'N'" })
  pendente: string;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgmains, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.tgmains)
  @JoinColumn([{ name: 'NUAUTINV', referencedColumnName: 'nuautinv' }])
  nuautinv2: TgmaiEntity;
}

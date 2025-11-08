import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgftdpEntity } from './tGFTDP.entity';

@Index('PK_TGFNDP', ['nunota', 'sequencia', 'codtipdesc'], { unique: true })
@Entity('TGFNDP', { schema: 'SANKHYA' })
export class TgfndpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODTIPDESC' })
  codtipdesc: number;

  @Column('float', { name: 'BASEDESC', precision: 53, default: () => '(0)' })
  basedesc: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('int', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfndps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgftdpEntity, (tgftdpEntity) => tgftdpEntity.tgfndps)
  @JoinColumn([{ name: 'CODTIPDESC', referencedColumnName: 'codtipdesc' }])
  codtipdesc2: TgftdpEntity;
}

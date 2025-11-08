import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFDGC', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFDGC', { schema: 'SANKHYA' })
export class TgfdgcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('float', { name: 'BASEDESC', precision: 53, default: () => '(0)' })
  basedesc: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('varchar', { name: 'PRIPARFIXA', length: 1, default: () => "'N'" })
  priparfixa: string;

  @Column('varchar', { name: 'CONFIRMADO', length: 1, default: () => "'N'" })
  confirmado: string;

  @Column('float', { name: 'VLRDESCPROM', precision: 53, default: () => '(0)' })
  vlrdescprom: number;

  @Column('float', {
    name: 'BASEDESCPROGEXT',
    precision: 53,
    default: () => '(0)',
  })
  basedescprogext: number;

  @Column('float', {
    name: 'PERCDESCPROGEXT',
    precision: 53,
    default: () => '(0)',
  })
  percdescprogext: number;

  @Column('float', {
    name: 'VLRDESCPROGEXT',
    precision: 53,
    default: () => '(0)',
  })
  vlrdescprogext: number;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfdgcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcmpEntity } from './tGFCMP.entity';

@Index('PK_TGFNFC', ['nunotaorig', 'nudest', 'tipo', 'codcmp'], {
  unique: true,
})
@Entity('TGFNFC', { schema: 'SANKHYA' })
export class TgfnfcEntity {
  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('int', { primary: true, name: 'NUDEST' })
  nudest: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { primary: true, name: 'CODCMP' })
  codcmp: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('float', { name: 'QTDATEND', nullable: true, precision: 53 })
  qtdatend: number | null;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfnfcs)
  @JoinColumn([{ name: 'NUNOTAORIG', referencedColumnName: 'nunota' }])
  nunotaorig2: TgfcabEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfnfcs2)
  @JoinColumn([{ name: 'NUDEST', referencedColumnName: 'nunota' }])
  nudest2: TgfcabEntity;

  @ManyToOne(() => TgfcmpEntity, (tgfcmpEntity) => tgfcmpEntity.tgfnfcs)
  @JoinColumn([{ name: 'CODCMP', referencedColumnName: 'codcmp' }])
  codcmp2: TgfcmpEntity;
}

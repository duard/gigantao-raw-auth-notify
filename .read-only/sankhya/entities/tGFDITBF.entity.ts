import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfditbEntity } from './tGFDITB.entity';

@Index('PK_TGFDITBF', ['codemp', 'tipoimp', 'dhimport', 'ncm', 'codprod'], {
  unique: true,
})
@Entity('TGFDITBF', { schema: 'SANKHYA' })
export class TgfditbfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'TIPOIMP' })
  tipoimp: number;

  @Column('datetime', { primary: true, name: 'DHIMPORT' })
  dhimport: Date;

  @Column('char', { name: 'STATUSIMP', nullable: true, length: 1 })
  statusimp: string | null;

  @Column('varchar', { name: 'CSTENT', nullable: true, length: 2 })
  cstent: string | null;

  @Column('varchar', { name: 'CSTSAI', nullable: true, length: 2 })
  cstsai: string | null;

  @Column('float', { name: 'ALIQPIS', precision: 53, default: () => '(0)' })
  aliqpis: number;

  @Column('float', { name: 'ALIQCOFINS', precision: 53, default: () => '(0)' })
  aliqcofins: number;

  @Column('varchar', { name: 'NRI', nullable: true, length: 3 })
  nri: string | null;

  @Column('varchar', { primary: true, name: 'NCM', length: 8 })
  ncm: string;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @ManyToOne(() => TgfditbEntity, (tgfditbEntity) => tgfditbEntity.tgfditbfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'TIPOIMP', referencedColumnName: 'tipoimp' },
    { name: 'DHIMPORT', referencedColumnName: 'dhimport' },
  ])
  tgfditb: TgfditbEntity;
}

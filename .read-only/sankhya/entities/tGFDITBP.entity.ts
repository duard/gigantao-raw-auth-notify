import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfditbEntity } from './tGFDITB.entity';

@Index('PK_TTGFDITBP', ['codemp', 'tipoimp', 'dhimport', 'ncm', 'codprod'], {
  unique: true,
})
@Entity('TGFDITBP', { schema: 'SANKHYA' })
export class TgfditbpEntity {
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

  @Column('float', { name: 'ALIQIPI', precision: 53, default: () => '(0)' })
  aliqipi: number;

  @Column('varchar', { name: 'CODENQ', nullable: true, length: 3 })
  codenq: string | null;

  @Column('varchar', { name: 'EX', nullable: true, length: 2 })
  ex: string | null;

  @Column('varchar', { primary: true, name: 'NCM', length: 8 })
  ncm: string;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @ManyToOne(() => TgfditbEntity, (tgfditbEntity) => tgfditbEntity.tgfditbps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'TIPOIMP', referencedColumnName: 'tipoimp' },
    { name: 'DHIMPORT', referencedColumnName: 'dhimport' },
  ])
  tgfditb: TgfditbEntity;
}

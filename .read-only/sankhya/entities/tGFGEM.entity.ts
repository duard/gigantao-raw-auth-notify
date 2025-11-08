import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFGEM', ['codemp', 'codgrupoprod'], { unique: true })
@Entity('TGFGEM', { schema: 'SANKHYA' })
export class TgfgemEntity {
  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD', default: () => '(0)' })
  codgrupoprod: number;

  @Column('int', { name: 'GRUPOICMS', nullable: true })
  grupoicms: number | null;

  @Column('float', { name: 'PERCCMTNAC', precision: 53, default: () => '(0)' })
  perccmtnac: number;

  @Column('float', { name: 'PERCCMTFED', precision: 53, default: () => '(0)' })
  perccmtfed: number;

  @Column('float', { name: 'PERCCMTEST', precision: 53, default: () => '(0)' })
  perccmtest: number;

  @Column('float', { name: 'PERCCMTMUN', precision: 53, default: () => '(0)' })
  perccmtmun: number;

  @Column('float', { name: 'PERCCMTIMP', precision: 53, default: () => '(0)' })
  perccmtimp: number;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfgems)
  @JoinColumn([{ name: 'CODCTACTBEFD', referencedColumnName: 'codctactb' }])
  codctactbefd: TcbplaEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfgems)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfgems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}

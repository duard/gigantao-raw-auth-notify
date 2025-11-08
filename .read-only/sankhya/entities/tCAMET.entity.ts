import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcacprEntity } from './tCACPR.entity';
import { TgmcfgEntity } from './tGMCFG.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TCAMET', ['nucurso', 'codmeta', 'dtref', 'codcencus', 'codnat'], {
  unique: true,
})
@Entity('TCAMET', { schema: 'SANKHYA' })
export class TcametEntity {
  @Column('int', { primary: true, name: 'NUCURSO' })
  nucurso: number;

  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('float', { name: 'QTDPREV', nullable: true, precision: 53 })
  qtdprev: number | null;

  @Column('float', { name: 'PREVREC', nullable: true, precision: 53 })
  prevrec: number | null;

  @Column('float', { name: 'PREVDESP', nullable: true, precision: 53 })
  prevdesp: number | null;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcamets)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TcacprEntity, (tcacprEntity) => tcacprEntity.tcamets, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCURSO', referencedColumnName: 'nucurso' }])
  nucurso2: TcacprEntity;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tcamets, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta2: TgmcfgEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcamets)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;
}

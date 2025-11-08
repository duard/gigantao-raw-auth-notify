import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index(
  'PK_TGFPRJ',
  ['codemp', 'codnat', 'codcencus', 'codproj', 'referencia'],
  { unique: true },
)
@Entity('TGFPRJ', { schema: 'SANKHYA' })
export class TgfprjEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('money', { name: 'PROJREC', nullable: true })
  projrec: number | null;

  @Column('money', { name: 'PROJDESP', nullable: true })
  projdesp: number | null;

  @Column('money', { name: 'REALREC', nullable: true })
  realrec: number | null;

  @Column('money', { name: 'REALDESP', nullable: true })
  realdesp: number | null;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfprjs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfprjs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfprjs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfprjs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;
}

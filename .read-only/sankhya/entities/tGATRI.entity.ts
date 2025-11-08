import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgatrcEntity } from './tGATRC.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TGATRI', ['nutransf', 'sequencia'], { unique: true })
@Entity('TGATRI', { schema: 'SANKHYA' })
export class TgatriEntity {
  @Column('int', { primary: true, name: 'NUTRANSF' })
  nutransf: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('char', { name: 'CONFIRMA', length: 1, default: () => "'N'" })
  confirma: string;

  @Column('int', { name: 'CODLOCALORIG', default: () => '(0)' })
  codlocalorig: number;

  @Column('int', { name: 'CODLOCALDEST', default: () => '(0)' })
  codlocaldest: number;

  @Column('smallint', { name: 'CODEMPDEST', default: () => '(0)' })
  codempdest: number;

  @Column('smallint', { name: 'CODTIPVENDA', default: () => '(0)' })
  codtipvenda: number;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('smallint', { name: 'ORDEM', default: () => '(1)' })
  ordem: number;

  @ManyToOne(() => TgatrcEntity, (tgatrcEntity) => tgatrcEntity.tgatris, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUTRANSF', referencedColumnName: 'nutransf' }])
  nutransf2: TgatrcEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgatris)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgatris)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgatris)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgatris)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgatris)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;
}

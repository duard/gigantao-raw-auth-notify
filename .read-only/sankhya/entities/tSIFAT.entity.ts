import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfhbcEntity } from './tGFHBC.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TSIFAT', ['codemp', 'codparc'], { unique: true })
@Entity('TSIFAT', { schema: 'SANKHYA' })
export class TsifatEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('smallint', { name: 'CODTIPOPERREC' })
  codtipoperrec: number;

  @Column('smallint', { name: 'CODTIPOPERDESP' })
  codtipoperdesp: number;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tsifats)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tsifats, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfhbcEntity, (tgfhbcEntity) => tgfhbcEntity.tsifats)
  @JoinColumn([{ name: 'CODLANCDESP', referencedColumnName: 'codlanc' }])
  codlancdesp: TgfhbcEntity;

  @ManyToOne(() => TgfhbcEntity, (tgfhbcEntity) => tgfhbcEntity.tsifats2)
  @JoinColumn([{ name: 'CODLANCREC', referencedColumnName: 'codlanc' }])
  codlancrec: TgfhbcEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tsifats)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsifats, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsifats)
  @JoinColumn([
    { name: 'CODCTABCOINTREC', referencedColumnName: 'codctabcoint' },
  ])
  codctabcointrec: TsictaEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsifats2)
  @JoinColumn([
    { name: 'CODCTABCOINTDESP', referencedColumnName: 'codctabcoint' },
  ])
  codctabcointdesp: TsictaEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tsifats)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;
}

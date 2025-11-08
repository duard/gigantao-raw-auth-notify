import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFMFCI', ['codprod', 'codemp', 'codlocal', 'controle'], {
  unique: true,
})
@Entity('TGFMFCI', { schema: 'SANKHYA' })
export class TgfmfciEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('varchar', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('varchar', { name: 'CODFCI', nullable: true, length: 36 })
  codfci: string | null;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfmfcis)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfmfcis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfmfcis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}

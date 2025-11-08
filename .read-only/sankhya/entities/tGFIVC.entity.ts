import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfvcfEntity } from './tGFVCF.entity';

@Index('PK_TGFIVC', ['nuconf', 'seqvol', 'seqitem'], { unique: true })
@Entity('TGFIVC', { schema: 'SANKHYA' })
export class TgfivcEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('int', { primary: true, name: 'SEQVOL' })
  seqvol: number;

  @Column('int', { primary: true, name: 'SEQITEM' })
  seqitem: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'QTDVOLPAD', nullable: true, precision: 53 })
  qtdvolpad: number | null;

  @Column('char', { name: 'IMPRIMEAUTO', nullable: true, length: 1 })
  imprimeauto: string | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 50 })
  codbarra: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfivcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfivcs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfvcfEntity, (tgfvcfEntity) => tgfvcfEntity.tgfivcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONF', referencedColumnName: 'nuconf' },
    { name: 'SEQVOL', referencedColumnName: 'seqvol' },
  ])
  tgfvcf: TgfvcfEntity;
}

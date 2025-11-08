import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgficnfEntity } from './tGFICNF.entity';

@Index('PK_TGFCNF', ['nuconting'], { unique: true })
@Index('TGFCNF_I01', ['codemp', 'tpemisnfe', 'tipoconting', 'dhabertura'], {
  unique: true,
})
@Entity('TGFCNF', { schema: 'SANKHYA' })
export class TgfcnfEntity {
  @Column('int', { primary: true, name: 'NUCONTING' })
  nuconting: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'TPEMISNFE' })
  tpemisnfe: number;

  @Column('varchar', { name: 'TIPOCONTING', length: 1, default: () => "'M'" })
  tipoconting: string;

  @Column('datetime', { name: 'DHABERTURA' })
  dhabertura: Date;

  @Column('datetime', { name: 'DHFECHAMENTO', nullable: true })
  dhfechamento: Date | null;

  @Column('varchar', { name: 'JUSTIFICATIVA', length: 255 })
  justificativa: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'TIPODOC', length: 1, default: () => "'N'" })
  tipodoc: string;

  @Column('smallint', { name: 'TPEMISCTE', nullable: true })
  tpemiscte: number | null;

  @Column('int', { name: 'TPEMISNFCOM', nullable: true })
  tpemisnfcom: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcnfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcnfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(() => TgficnfEntity, (tgficnfEntity) => tgficnfEntity.nuconting2)
  tgficnfs: TgficnfEntity[];
}

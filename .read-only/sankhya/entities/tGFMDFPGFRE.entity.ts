import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfmdfcompgfreEntity } from './tGFMDFCOMPGFRE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfmdfprapgfreEntity } from './tGFMDFPRAPGFRE.entity';

@Index('PK_TGFMDFPGFRE', ['nuviag', 'seqmdfe', 'seqpgfre'], { unique: true })
@Entity('TGFMDFPGFRE', { schema: 'SANKHYA' })
export class TgfmdfpgfreEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'SEQPGFRE' })
  seqpgfre: number;

  @Column('float', { name: 'VLRCONTRATO', nullable: true, precision: 53 })
  vlrcontrato: number | null;

  @Column('varchar', { name: 'INDPAG', nullable: true, length: 1 })
  indpag: string | null;

  @Column('varchar', { name: 'CODBANCO', nullable: true, length: 5 })
  codbanco: string | null;

  @Column('varchar', { name: 'AGENCIA', nullable: true, length: 10 })
  agencia: string | null;

  @Column('varchar', { name: 'ENVIO', nullable: true, length: 1 })
  envio: string | null;

  @Column('varchar', { name: 'CHAVEPIX', nullable: true, length: 60 })
  chavepix: string | null;

  @OneToMany(
    () => TgfmdfcompgfreEntity,
    (tgfmdfcompgfreEntity) => tgfmdfcompgfreEntity.tgfmdfpgfre,
  )
  tgfmdfcompgfres: TgfmdfcompgfreEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmdfpgfres)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmdfpgfres2)
  @JoinColumn([{ name: 'CODPARCINTPGFRE', referencedColumnName: 'codparc' }])
  codparcintpgfre: TgfparEntity;

  @ManyToOne(
    () => TgfmdfeEntity,
    (tgfmdfeEntity) => tgfmdfeEntity.tgfmdfpgfres,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @OneToMany(
    () => TgfmdfprapgfreEntity,
    (tgfmdfprapgfreEntity) => tgfmdfprapgfreEntity.tgfmdfpgfre,
  )
  tgfmdfprapgfres: TgfmdfprapgfreEntity[];
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TFCANU', ['codanuncio'], { unique: true })
@Entity('TFCANU', { schema: 'SANKHYA' })
export class TfcanuEntity {
  @Column('int', { primary: true, name: 'CODANUNCIO' })
  codanuncio: number;

  @Column('varchar', { name: 'DESCRVAGA', length: 60 })
  descrvaga: string;

  @Column('datetime', { name: 'DTENTRADA', nullable: true })
  dtentrada: Date | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('int', { name: 'NUVAGAS', nullable: true })
  nuvagas: number | null;

  @Column('text', { name: 'RESUMO' })
  resumo: string;

  @Column('char', { name: 'FORMAEXP', length: 1, default: () => "'C'" })
  formaexp: string;

  @Column('float', {
    name: 'FAIXASALARIALINICIAL',
    nullable: true,
    precision: 53,
  })
  faixasalarialinicial: number | null;

  @Column('float', {
    name: 'FAIXASALARIALFINAL',
    nullable: true,
    precision: 53,
  })
  faixasalarialfinal: number | null;

  @Column('smallint', { name: 'GRAUINSTR', nullable: true })
  grauinstr: number | null;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tfcanus)
  @JoinColumn([{ name: 'CODPERFIL_AREA', referencedColumnName: 'codperfil' }])
  codperfilArea: TfpperEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tfcanus2)
  @JoinColumn([{ name: 'CODPERFIL_NIVEL', referencedColumnName: 'codperfil' }])
  codperfilNivel: TfpperEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfcanus)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppreEntity } from './tFPPRE.entity';

@Index('PK_TFPDFC', ['codpref', 'dtdesconsidera'], { unique: true })
@Entity('TFPDFC', { schema: 'SANKHYA' })
export class TfpdfcEntity {
  @Column('smallint', { primary: true, name: 'CODPREF' })
  codpref: number;

  @Column('datetime', { primary: true, name: 'DTDESCONSIDERA' })
  dtdesconsidera: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 30 })
  observacao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpdfcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppreEntity, (tfppreEntity) => tfppreEntity.tfpdfcs)
  @JoinColumn([{ name: 'CODPREF', referencedColumnName: 'codpref' }])
  codpref2: TfppreEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpgraEntity } from './tFPGRA.entity';
import { TfpdepEntity } from './tFPDEP.entity';

@Index('PK_TFPGRD', ['coddep', 'codgrat'], { unique: true })
@Entity('TFPGRD', { schema: 'SANKHYA' })
export class TfpgrdEntity {
  @Column('int', { primary: true, name: 'CODDEP' })
  coddep: number;

  @Column('smallint', { primary: true, name: 'CODGRAT' })
  codgrat: number;

  @Column('money', { name: 'TOTGERAL' })
  totgeral: number;

  @Column('money', { name: 'TOTDISP', nullable: true })
  totdisp: number | null;

  @ManyToOne(() => TfpgraEntity, (tfpgraEntity) => tfpgraEntity.tfpgrds)
  @JoinColumn([{ name: 'CODGRAT', referencedColumnName: 'codgrat' }])
  codgrat2: TfpgraEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpgrds)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep2: TfpdepEntity;
}

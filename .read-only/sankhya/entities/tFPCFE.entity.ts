import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPCFE', ['codpref', 'dtferiado', 'sequencia'], { unique: true })
@Index('TFPCFE_I01', ['codpref', 'dtferiado', 'codemp'], { unique: true })
@Entity('TFPCFE', { schema: 'SANKHYA' })
export class TfpcfeEntity {
  @Column('smallint', { primary: true, name: 'CODPREF' })
  codpref: number;

  @Column('datetime', { primary: true, name: 'DTFERIADO' })
  dtferiado: Date;

  @Column('datetime', { name: 'DTCOMPENSA', nullable: true })
  dtcompensa: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 30 })
  observacao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcfes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppreEntity, (tfppreEntity) => tfppreEntity.tfpcfes)
  @JoinColumn([{ name: 'CODPREF', referencedColumnName: 'codpref' }])
  codpref2: TfppreEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpcfes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}

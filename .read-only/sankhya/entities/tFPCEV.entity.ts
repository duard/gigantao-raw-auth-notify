import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPCEV', ['codemp', 'codcargo', 'codevento', 'sequencia'], {
  unique: true,
})
@Entity('TFPCEV', { schema: 'SANKHYA' })
export class TfpcevEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRMOV', nullable: true, precision: 53 })
  vlrmov: number | null;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('char', {
    name: 'UNIDADE',
    nullable: true,
    length: 1,
    default: () => "'V'",
  })
  unidade: string | null;

  @Column('char', { name: 'OBS', nullable: true, length: 60 })
  obs: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcevs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfpcevs)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpcevs)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpcevs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TrsetaEntity } from './tRSETA.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TRSECG', ['codemp', 'codcargo', 'codetapa'], { unique: true })
@Entity('TRSECG', { schema: 'SANKHYA' })
export class TrsecgEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('int', { primary: true, name: 'CODETAPA' })
  codetapa: number;

  @Column('smallint', { name: 'SEQETAPA', nullable: true })
  seqetapa: number | null;

  @Column('int', { name: 'PONTUACAOMINIMA', nullable: true })
  pontuacaominima: number | null;

  @Column('int', { name: 'PESO', nullable: true })
  peso: number | null;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('float', { name: 'VLRETAPA', nullable: true, precision: 53 })
  vlretapa: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsecgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.trsecgs)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa2: TrsetaEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.trsecgs)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.trsecgs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}

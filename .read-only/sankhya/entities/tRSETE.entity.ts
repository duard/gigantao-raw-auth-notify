import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrsetaEntity } from './tRSETA.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TRSETE', ['codemp', 'codetapa'], { unique: true })
@Entity('TRSETE', { schema: 'SANKHYA' })
export class TrseteEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODETAPA' })
  codetapa: number;

  @Column('smallint', { name: 'SEQETAPA', nullable: true })
  seqetapa: number | null;

  @Column('int', { name: 'PONTUACAOMINIMA', nullable: true })
  pontuacaominima: number | null;

  @Column('int', { name: 'PESO', nullable: true })
  peso: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('float', { name: 'VLRETAPA', nullable: true, precision: 53 })
  vlretapa: number | null;

  @ManyToOne(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.trsetes)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa2: TrsetaEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.trsetes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}

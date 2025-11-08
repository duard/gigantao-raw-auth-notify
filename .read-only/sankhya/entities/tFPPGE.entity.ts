import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TfpgruEntity } from './tFPGRU.entity';

@Index('PK_TFPPGE', ['codgru', 'codemp'], { unique: true })
@Entity('TFPPGE', { schema: 'SANKHYA' })
export class TfppgeEntity {
  @Column('smallint', { primary: true, name: 'CODGRU' })
  codgru: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfppges)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TfpgruEntity, (tfpgruEntity) => tfpgruEntity.tfppges)
  @JoinColumn([{ name: 'CODGRU', referencedColumnName: 'codgru' }])
  codgru2: TfpgruEntity;
}

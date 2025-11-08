import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpgruEntity } from './tFPGRU.entity';
import { TfptelaspermEntity } from './tFPTELASPERM.entity';

@Index('PK_TFPGRUPER', ['codgru', 'codperm'], { unique: true })
@Entity('TFPGRUPER', { schema: 'SANKHYA' })
export class TfpgruperEntity {
  @Column('smallint', { primary: true, name: 'CODGRU' })
  codgru: number;

  @Column('smallint', { primary: true, name: 'CODPERM' })
  codperm: number;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @ManyToOne(() => TfpgruEntity, (tfpgruEntity) => tfpgruEntity.tfpgrupers)
  @JoinColumn([{ name: 'CODGRU', referencedColumnName: 'codgru' }])
  codgru2: TfpgruEntity;

  @ManyToOne(
    () => TfptelaspermEntity,
    (tfptelaspermEntity) => tfptelaspermEntity.tfpgrupers,
  )
  @JoinColumn([
    { name: 'CODPERM', referencedColumnName: 'codperm' },
    { name: 'TELA_ID', referencedColumnName: 'telaId' },
    { name: 'FUNCAO', referencedColumnName: 'funcao' },
  ])
  tfptelasperm: TfptelaspermEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfphorEntity } from './tFPHOR.entity';

@Index('PK_TFPPPRG', ['codcargahor', 'diasem', 'turno', 'sequencia'], {
  unique: true,
})
@Entity('TFPPPRG', { schema: 'SANKHYA' })
export class TfppprgEntity {
  @Column('smallint', { primary: true, name: 'CODCARGAHOR' })
  codcargahor: number;

  @Column('smallint', { primary: true, name: 'DIASEM' })
  diasem: number;

  @Column('smallint', { primary: true, name: 'TURNO' })
  turno: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'INICIO' })
  inicio: number;

  @Column('int', { name: 'FIM' })
  fim: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @ManyToOne(() => TfphorEntity, (tfphorEntity) => tfphorEntity.tfppprgs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' },
    { name: 'DIASEM', referencedColumnName: 'diasem' },
    { name: 'TURNO', referencedColumnName: 'turno' },
  ])
  tfphor: TfphorEntity;
}

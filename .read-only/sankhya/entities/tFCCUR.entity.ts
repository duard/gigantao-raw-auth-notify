import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfctpcEntity } from './tFCTPC.entity';

@Index('PK_TFCCUR', ['nucurriculo', 'sequencia'], { unique: true })
@Entity('TFCCUR', { schema: 'SANKHYA' })
export class TfccurEntity {
  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'TITULO', length: 100 })
  titulo: string;

  @Column('datetime', { name: 'DATINICIO' })
  datinicio: Date;

  @Column('datetime', { name: 'DATFIM', nullable: true })
  datfim: Date | null;

  @Column('int', { name: 'CARGAHORARIA', nullable: true })
  cargahoraria: number | null;

  @Column('char', { name: 'LOCAL', nullable: true, length: 200 })
  local: string | null;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tfccurs)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo2: TfcbcoEntity;

  @ManyToOne(() => TfctpcEntity, (tfctpcEntity) => tfctpcEntity.tfccurs)
  @JoinColumn([{ name: 'CODTIPCURSO', referencedColumnName: 'codtipcurso' }])
  codtipcurso: TfctpcEntity;
}

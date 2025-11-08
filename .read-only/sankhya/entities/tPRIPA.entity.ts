import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';

@Index('PK_TPRIPA', ['idiproc', 'codprodpa', 'controlepa'], { unique: true })
@Entity('TPRIPA', { schema: 'SANKHYA' })
export class TpripaEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('float', { name: 'QTDPRODUZIR', precision: 53, default: () => '(0)' })
  qtdproduzir: number;

  @Column('varchar', { name: 'NROLOTE', length: 20 })
  nrolote: string;

  @Column('varchar', { name: 'CONCLUIDO', length: 1, default: () => "'N'" })
  concluido: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTFAB', nullable: true })
  dtfab: Date | null;

  @Column('float', {
    name: 'QTDPRODUZIR_ORIGINAL',
    nullable: true,
    precision: 53,
  })
  qtdproduzirOriginal: number | null;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tpripas)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;
}

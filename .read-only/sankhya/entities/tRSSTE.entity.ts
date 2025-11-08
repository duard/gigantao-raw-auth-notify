import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrsetaEntity } from './tRSETA.entity';
import { TrsselEntity } from './tRSSEL.entity';

@Index('PK_TRSSTE', ['codstaetapa'], { unique: true })
@Entity('TRSSTE', { schema: 'SANKHYA' })
export class TrssteEntity {
  @Column('int', { primary: true, name: 'CODSTAETAPA' })
  codstaetapa: number;

  @Column('int', { name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { name: 'NUREQUISICAO' })
  nurequisicao: number;

  @Column('varchar', { name: 'STATUSETAPA', nullable: true, length: 1 })
  statusetapa: string | null;

  @Column('varchar', { name: 'TIPOETAPA', nullable: true, length: 1 })
  tipoetapa: string | null;

  @ManyToOne(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.trsstes)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa: TrsetaEntity;

  @ManyToOne(() => TrsselEntity, (trsselEntity) => trsselEntity.trsstes)
  @JoinColumn([{ name: 'NUSELECAO', referencedColumnName: 'nuselecao' }])
  nuselecao: TrsselEntity;
}

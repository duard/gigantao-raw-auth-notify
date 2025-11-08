import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TrsetaEntity } from './tRSETA.entity';
import { TrsselEntity } from './tRSSEL.entity';

@Index('PK_TRSPON', ['nuselecao', 'nucurriculo', 'codetapa'], { unique: true })
@Entity('TRSPON', { schema: 'SANKHYA' })
export class TrsponEntity {
  @Column('int', { primary: true, name: 'NUSELECAO' })
  nuselecao: number;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { primary: true, name: 'CODETAPA' })
  codetapa: number;

  @Column('smallint', { name: 'SEQETAPA', nullable: true })
  seqetapa: number | null;

  @Column('int', { name: 'PONTUACAOMINIMA', nullable: true })
  pontuacaominima: number | null;

  @Column('int', { name: 'PESO', nullable: true })
  peso: number | null;

  @Column('datetime', { name: 'DTPLAN', nullable: true })
  dtplan: Date | null;

  @Column('text', { name: 'OBSPLAN', nullable: true })
  obsplan: string | null;

  @Column('datetime', { name: 'DTEXECUCAO', nullable: true })
  dtexecucao: Date | null;

  @Column('text', { name: 'OBSEXEC', nullable: true })
  obsexec: string | null;

  @Column('int', { name: 'NUREQUISICAO', default: () => '(0)' })
  nurequisicao: number;

  @Column('float', { name: 'VALORETAPA', precision: 53, default: () => '(0)' })
  valoretapa: number;

  @Column('float', { name: 'RESULTADO', precision: 53, default: () => '(0)' })
  resultado: number;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.trspons)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo2: TfcbcoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trspons)
  @JoinColumn([{ name: 'CODUSUPLAN', referencedColumnName: 'codusu' }])
  codusuplan: TsiusuEntity;

  @ManyToOne(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.trspons)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa2: TrsetaEntity;

  @ManyToOne(() => TrsselEntity, (trsselEntity) => trsselEntity.trspons)
  @JoinColumn([{ name: 'NUSELECAO', referencedColumnName: 'nuselecao' }])
  nuselecao2: TrsselEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trspons2)
  @JoinColumn([{ name: 'CODUSUEXEC', referencedColumnName: 'codusu' }])
  codusuexec: TsiusuEntity;
}

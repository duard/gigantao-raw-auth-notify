import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrsreqEntity } from './tRSREQ.entity';
import { TrsselEntity } from './tRSSEL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TrsetaEntity } from './tRSETA.entity';

@Index('PK_TRSEPE', ['codepe'], { unique: true })
@Entity('TRSEPE', { schema: 'SANKHYA' })
export class TrsepeEntity {
  @Column('int', { primary: true, name: 'CODEPE' })
  codepe: number;

  @Column('varchar', { name: 'ARQMODEMAIL', nullable: true, length: 200 })
  arqmodemail: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('datetime', { name: 'DTABERTURA', default: () => 'getdate()' })
  dtabertura: Date;

  @ManyToOne(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.trsepes)
  @JoinColumn([{ name: 'NUREQUISICAO', referencedColumnName: 'nurequisicao' }])
  nurequisicao: TrsreqEntity;

  @ManyToOne(() => TrsselEntity, (trsselEntity) => trsselEntity.trsepes)
  @JoinColumn([{ name: 'NUSELECAO', referencedColumnName: 'nuselecao' }])
  nuselecao: TrsselEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsepes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.trsepes)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa: TrsetaEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsprotEntity } from './tMSPROT.entity';

@Index('PK_TMSPROTCAN', ['codprot', 'codcan'], { unique: true })
@Entity('TMSPROTCAN', { schema: 'SANKHYA' })
export class TmsprotcanEntity {
  @Column('int', { primary: true, name: 'CODPROT' })
  codprot: number;

  @Column('int', { primary: true, name: 'CODCAN' })
  codcan: number;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 100 })
  chavecte: string | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @ManyToOne(() => TmsprotEntity, (tmsprotEntity) => tmsprotEntity.tmsprotcans)
  @JoinColumn([{ name: 'CODPROT', referencedColumnName: 'codprot' }])
  codprot2: TmsprotEntity;
}

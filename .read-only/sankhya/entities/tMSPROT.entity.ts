import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmsprotcanEntity } from './tMSPROTCAN.entity';

@Index('PK_TMSPROT', ['codprot'], { unique: true })
@Entity('TMSPROT', { schema: 'SANKHYA' })
export class TmsprotEntity {
  @Column('int', { primary: true, name: 'CODPROT' })
  codprot: number;

  @Column('varchar', { name: 'AOSCUIDADOS', nullable: true, length: 100 })
  aoscuidados: string | null;

  @Column('varchar', { name: 'CODRASTREIO', nullable: true, length: 100 })
  codrastreio: string | null;

  @Column('int', { name: 'CODUSUENV', nullable: true })
  codusuenv: number | null;

  @Column('int', { name: 'CODEMPENV', nullable: true })
  codempenv: number | null;

  @Column('int', { name: 'CODUSUDEST', nullable: true })
  codusudest: number | null;

  @Column('int', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('int', { name: 'CODUSUFECHA', nullable: true })
  codusufecha: number | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DHFECHA', nullable: true })
  dhfecha: Date | null;

  @Column('varchar', { name: 'NROPROTCLI', nullable: true, length: 100 })
  nroprotcli: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('varchar', { name: 'RESPENVIO', nullable: true, length: 100 })
  respenvio: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'TIPOPROT', nullable: true, length: 10 })
  tipoprot: string | null;

  @OneToMany(
    () => TmsprotcanEntity,
    (tmsprotcanEntity) => tmsprotcanEntity.codprot2,
  )
  tmsprotcans: TmsprotcanEntity[];
}

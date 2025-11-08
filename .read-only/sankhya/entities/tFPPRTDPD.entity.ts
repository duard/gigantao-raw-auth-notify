import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpprtEntity } from './tFPPRT.entity';

@Index('PK_TFPPRTDPD', ['nudpd', 'nuprt'], { unique: true })
@Entity('TFPPRTDPD', { schema: 'SANKHYA' })
export class TfpprtdpdEntity {
  @Column('int', { primary: true, name: 'NUDPD' })
  nudpd: number;

  @Column('int', { primary: true, name: 'NUPRT' })
  nuprt: number;

  @Column('varchar', { name: 'NOMEDPD', nullable: true, length: 70 })
  nomedpd: string | null;

  @Column('varchar', { name: 'CPFDPD', length: 11 })
  cpfdpd: string;

  @Column('varchar', { name: 'TIPODPD', nullable: true, length: 2 })
  tipodpd: string | null;

  @Column('varchar', { name: 'DESCDPD', nullable: true, length: 30 })
  descdpd: string | null;

  @Column('varchar', { name: 'IDADEESCOLAR', nullable: true, length: 1 })
  idadeescolar: string | null;

  @Column('varchar', { name: 'DEPENDIRF', nullable: true, length: 1 })
  dependirf: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('datetime', { name: 'DTLIMIRF', nullable: true })
  dtlimirf: Date | null;

  @ManyToOne(() => TfpprtEntity, (tfpprtEntity) => tfpprtEntity.tfpprtdpds)
  @JoinColumn([{ name: 'NUPRT', referencedColumnName: 'nuprt' }])
  nuprt2: TfpprtEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSILBA', ['nusolic'], { unique: true })
@Entity('TSILBA', { schema: 'SANKHYA' })
export class TsilbaEntity {
  @Column('int', { primary: true, name: 'NUSOLIC' })
  nusolic: number;

  @Column('varchar', { name: 'PCSOLIC', nullable: true, length: 32 })
  pcsolic: string | null;

  @Column('datetime', { name: 'DTSOLIC', nullable: true })
  dtsolic: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('datetime', { name: 'DTLIBER', nullable: true })
  dtliber: Date | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @Column('varchar', { name: 'IPLOCAL', nullable: true, length: 15 })
  iplocal: string | null;

  @Column('varchar', { name: 'IPREQUISICAO', nullable: true, length: 15 })
  iprequisicao: string | null;

  @Column('varchar', { name: 'MACREQUISICAO', nullable: true, length: 50 })
  macrequisicao: string | null;

  @Column('varchar', { name: 'NOMEPCSOLIC', nullable: true, length: 250 })
  nomepcsolic: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilbas)
  @JoinColumn([{ name: 'CODUSUSOLIC', referencedColumnName: 'codusu' }])
  codususolic: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilbas2)
  @JoinColumn([{ name: 'CODUSULIBER', referencedColumnName: 'codusu' }])
  codusuliber: TsiusuEntity;
}
